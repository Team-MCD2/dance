from playwright.sync_api import sync_playwright

CHROME = r"C:\Users\PC\AppData\Local\ms-playwright\chromium-1217\chrome-win64\chrome.exe"

def dump(page, label):
    info = page.evaluate("""() => {
        const r = s => { const el=document.querySelector(s); if(!el) return null;
            const b=el.getBoundingClientRect(); const cs=getComputedStyle(el);
            return {x:b.x|0,y:b.y|0,w:b.width|0,h:b.height|0,disp:cs.display,pos:cs.position,vis:cs.visibility}; };
        const navClasses = document.getElementById('site-navigation')?.className || '';
        const items = Array.from(document.querySelectorAll('#site-navigation div.nav-menu > ul > li > a')).map(a => ({
            text: a.textContent.trim().substring(0,20),
            href: a.getAttribute('href'),
            rect: (() => { const b=a.getBoundingClientRect(); return {x:b.x|0,y:b.y|0,w:b.width|0,h:b.height|0}; })()
        }));
        return {navClasses, items,
            headerMain: r('.site-header-main'),
            toggle: r('.menu-toggle'),
            menuUl: r('#site-navigation div.nav-menu > ul'),
            textArea: r('.tm-header-text-area'),
        };
    }""")
    print(f"\n--- {label} ---")
    print(f"  navClasses: {info['navClasses']}")
    print(f"  toggle: {info['toggle']}")
    print(f"  menuUl: {info['menuUl']}")
    print(f"  textArea: {info['textArea']}")
    print(f"  items count: {len(info['items'])}, sample: {info['items'][:3]}")
    return info

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=CHROME)

    # ========== TEST 1: Desktop 1500px ==========
    ctx = browser.new_context(viewport={"width": 1500, "height": 900})
    page = ctx.new_page()
    page.goto("http://localhost:8000/", wait_until="networkidle")
    page.wait_for_timeout(2500)
    info = dump(page, "Desktop 1500 INIT")
    page.screenshot(path="probe_1500_init.png", clip={"x":0,"y":0,"width":1500,"height":180})

    # Hover each menu item to check sub-menus / state
    print("\n[Desktop] Hover each menu item:")
    items = page.query_selector_all('#site-navigation div.nav-menu > ul > li > a')
    for i, a in enumerate(items):
        txt = a.text_content().strip()
        try:
            a.hover()
            page.wait_for_timeout(150)
            print(f"  hover '{txt}': OK")
        except Exception as e:
            print(f"  hover '{txt}': ERR {e}")
    page.screenshot(path="probe_1500_hover.png", clip={"x":0,"y":0,"width":1500,"height":180})

    # Scroll to test sticky
    page.evaluate("window.scrollTo(0, 600)")
    page.wait_for_timeout(700)
    info = dump(page, "Desktop 1500 SCROLLED")
    page.screenshot(path="probe_1500_scrolled.png", clip={"x":0,"y":0,"width":1500,"height":150})

    # Scroll back up
    page.evaluate("window.scrollTo(0, 0)")
    page.wait_for_timeout(500)

    # Resize the window to mobile
    page.set_viewport_size({"width": 800, "height": 800})
    page.wait_for_timeout(800)
    info = dump(page, "After RESIZE to 800px")
    page.screenshot(path="probe_resize_800.png", clip={"x":0,"y":0,"width":800,"height":200})
    ctx.close()

    # ========== TEST 2: Mobile 800px from scratch ==========
    ctx = browser.new_context(viewport={"width": 800, "height": 900})
    page = ctx.new_page()
    page.goto("http://localhost:8000/", wait_until="networkidle")
    page.wait_for_timeout(2500)
    info = dump(page, "Mobile 800 INIT")
    page.screenshot(path="probe_800_init.png", clip={"x":0,"y":0,"width":800,"height":200})

    # Click hamburger
    page.click('.menu-toggle')
    page.wait_for_timeout(500)
    info = dump(page, "Mobile 800 AFTER CLICK HAMBURGER")
    page.screenshot(path="probe_800_opened.png", clip={"x":0,"y":0,"width":800,"height":600})

    # Click hamburger again to close
    page.click('.menu-toggle')
    page.wait_for_timeout(500)
    info = dump(page, "Mobile 800 AFTER CLICK HAMBURGER #2")
    page.screenshot(path="probe_800_closed.png", clip={"x":0,"y":0,"width":800,"height":200})
    ctx.close()

    browser.close()
    print("\nDONE")
