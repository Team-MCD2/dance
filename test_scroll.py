from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=r"C:\Users\PC\AppData\Local\ms-playwright\chromium-1217\chrome-win64\chrome.exe")
    ctx = browser.new_context(viewport={"width": 1300, "height": 800})
    page = ctx.new_page()
    page.goto("http://localhost:8000/", wait_until="networkidle")
    page.wait_for_timeout(2000)

    # Scroll down to trigger sticky header
    page.evaluate("window.scrollTo(0, 400)")
    page.wait_for_timeout(800)

    info = page.evaluate("""() => {
        const r = s => { const el=document.querySelector(s); if(!el) return null;
            const b=el.getBoundingClientRect(); const cs=getComputedStyle(el);
            return {x:b.x|0, y:b.y|0, w:b.width|0, h:b.height|0, disp:cs.display, pos:cs.position}; };
        return {
            isStuck: document.querySelector('.tm-stickable-header')?.classList.contains('is_stuck'),
            stickableHeader: r('.tm-stickable-header'),
            headerMain: r('.site-header-main'),
            navMenu: r('#site-navigation .nav-menu'),
            textArea: r('#site-navigation .tm-header-text-area'),
        };
    }""")
    print("After scroll (1300px):")
    for k,v in info.items(): print(f"  {k}: {v}")
    page.screenshot(path="sticky_scrolled.png", clip={"x":0,"y":0,"width":1300,"height":150})
    ctx.close()
    browser.close()
    print("done")
