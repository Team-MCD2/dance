from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=r"C:\Users\PC\AppData\Local\ms-playwright\chromium-1217\chrome-win64\chrome.exe")

    for vw in [1366, 1300, 1500, 1920]:
        ctx = browser.new_context(viewport={"width": vw, "height": 800})
        page = ctx.new_page()
        page.goto("http://localhost:8000/", wait_until="networkidle")
        page.wait_for_timeout(3000)  # Long wait for ALL JS to fully initialize

        info = page.evaluate("""() => {
            const dump = el => el ? {
                tag: el.tagName, classes: el.className,
                inline: el.getAttribute('style') || '',
                rect: (() => { const b=el.getBoundingClientRect(); return {x:b.x|0,y:b.y|0,w:b.width|0,h:b.height|0}; })(),
                disp: getComputedStyle(el).display,
                pos: getComputedStyle(el).position,
            } : null;
            return {
                stickableW: dump(document.querySelector('.tm-stickable-header-w')),
                stickable: dump(document.querySelector('.tm-stickable-header')),
                siteHeader: dump(document.querySelector('.site-header')),
                headerMain: dump(document.querySelector('.site-header-main')),
                siteNav: dump(document.querySelector('#site-navigation')),
                navMenuDiv: dump(document.querySelector('#site-navigation > .nav-menu')),
                navMenuUl: dump(document.querySelector('#site-navigation div.nav-menu > ul')),
                textArea: dump(document.querySelector('.tm-header-text-area')),
                bodyClasses: document.body.className.substring(0, 200),
            };
        }""")
        print(f"\n========== {vw}px ==========")
        for k,v in info.items():
            if v is None: print(f"  {k}: None"); continue
            if isinstance(v, str): print(f"  {k}: {v}"); continue
            inline = v['inline'][:300] if v['inline'] else '(none)'
            print(f"  {k}:")
            print(f"    classes: {v['classes'][:120]}")
            print(f"    inline:  {inline}")
            print(f"    rect:    {v['rect']}  disp={v['disp']} pos={v['pos']}")
        page.screenshot(path=f"inline_{vw}.png", clip={"x":0,"y":0,"width":vw,"height":250})
        ctx.close()
    browser.close()
    print("\ndone")
