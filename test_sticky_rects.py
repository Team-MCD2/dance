from playwright.sync_api import sync_playwright
import os, json

CHROME = r"C:\Users\PC\AppData\Local\ms-playwright\chromium-1217\chrome-win64\chrome.exe"

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=CHROME, headless=True)
    ctx = browser.new_context(viewport={"width": 1500, "height": 900})
    page = ctx.new_page()
    page.goto("http://localhost:8000/", wait_until="networkidle")
    page.wait_for_timeout(2000)

    # Scroll down to trigger sticky
    page.evaluate("window.scrollTo(0, 600)")
    page.wait_for_timeout(1500)

    print("=== STICKY DOM & RECTS ===")
    data = page.evaluate("""() => {
        const getRect = (el) => {
            if (!el) return null;
            const r = el.getBoundingClientRect();
            const cs = getComputedStyle(el);
            return {
                tag: el.tagName, id: el.id, class: el.className,
                x: r.left, y: r.top, w: r.width, h: r.height,
                display: cs.display, position: cs.position, float: cs.float,
                flexDirection: cs.flexDirection, flexWrap: cs.flexWrap,
                alignItems: cs.alignItems, justifyContent: cs.justifyContent,
                order: cs.order, flex: cs.flex, zIndex: cs.zIndex, boxSizing: cs.boxSizing
            };
        };
        
        return {
            wrapper: getRect(document.querySelector('.tm-stickable-header-w')),
            header: getRect(document.querySelector('.site-header')),
            headerMain: getRect(document.querySelector('.site-header-main')),
            branding: getRect(document.querySelector('.site-branding')),
            headerMenu: getRect(document.querySelector('.site-header-menu')),
            nav: getRect(document.getElementById('site-navigation')),
            navMenu: getRect(document.querySelector('.nav-menu')),
            pinkBlock: getRect(document.querySelector('.tm-header-text-area')),
            firstMenuItem: getRect(document.querySelector('#menu-menu > li:first-child'))
        };
    }""")
    print(json.dumps(data, indent=2))
    browser.close()
