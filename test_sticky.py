from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=r"C:\Users\PC\AppData\Local\ms-playwright\chromium-1217\chrome-win64\chrome.exe")

    for vw in [1300, 1133]:
        ctx = browser.new_context(viewport={"width": vw, "height": 800})
        page = ctx.new_page()
        page.goto("http://localhost:8000/", wait_until="networkidle")
        page.wait_for_timeout(2000)  # Wait for all JS to initialize

        # Capture initial state after JS fully loaded
        page.screenshot(path=f"sticky_{vw}_init.png", clip={"x":0,"y":0,"width":vw,"height":200})

        info = page.evaluate("""() => {
            const r = s => { const el=document.querySelector(s); if(!el) return null;
                const b=el.getBoundingClientRect(); const cs=getComputedStyle(el);
                return {x:b.x|0, y:b.y|0, w:b.width|0, h:b.height|0,
                        disp:cs.display, pos:cs.position}; };
            return {
                header: r('.site-header'),
                headerMain: r('.site-header-main'),
                navMenu: r('#site-navigation .nav-menu'),
                navUl: r('#site-navigation div.nav-menu > ul'),
                toggle: r('.menu-toggle'),
                isStuck: document.querySelector('.tm-stickable-header')?.classList.contains('is_stuck'),
                navClasses: document.getElementById('site-navigation')?.className
            };
        }""")
        print(f"\n=== {vw}px after JS init ===")
        for k,v in info.items():
            print(f"  {k}: {v}")

        if vw == 1133:
            # Test hamburger click at mobile
            page.click('.menu-toggle')
            page.wait_for_timeout(500)
            nav_class = page.evaluate("document.getElementById('site-navigation').className")
            menu_vis = page.evaluate("getComputedStyle(document.querySelector('#site-navigation div.nav-menu > ul')).display")
            print(f"  After hamburger click: navClass={nav_class}, menuDisplay={menu_vis}")
            page.screenshot(path=f"sticky_{vw}_clicked.png", clip={"x":0,"y":0,"width":vw,"height":400})

        ctx.close()
    browser.close()
    print("\ndone")
