from playwright.sync_api import sync_playwright

CHROME = r"C:\Users\PC\AppData\Local\ms-playwright\chromium-1217\chrome-win64\chrome.exe"

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=CHROME)

    # Test 1: Desktop sticky header
    ctx = browser.new_context(viewport={"width": 1500, "height": 900})
    page = ctx.new_page()
    page.goto("http://localhost:8000/", wait_until="networkidle")
    page.wait_for_timeout(2000)
    page.screenshot(path="sticky_before.png", clip={"x":0,"y":0,"width":1500,"height":200})

    page.evaluate("window.scrollTo(0, 600)")
    page.wait_for_timeout(800)
    info = page.evaluate("""() => ({
        isStuck: document.querySelector('.tm-stickable-header')?.classList.contains('is_stuck'),
        headerPos: (() => { const b=document.querySelector('.site-header').getBoundingClientRect(); return {x:b.x|0,y:b.y|0,w:b.width|0,h:b.height|0}; })(),
        headerMainPos: (() => { const b=document.querySelector('.site-header-main').getBoundingClientRect(); return {x:b.x|0,y:b.y|0,w:b.width|0,h:b.height|0}; })(),
        navMenuPos: (() => { const b=document.querySelector('#site-navigation div.nav-menu > ul').getBoundingClientRect(); return {x:b.x|0,y:b.y|0,w:b.width|0,h:b.height|0}; })(),
        textAreaPos: (() => { const b=document.querySelector('.tm-header-text-area').getBoundingClientRect(); return {x:b.x|0,y:b.y|0,w:b.width|0,h:b.height|0}; })(),
    })""")
    print(f"Desktop sticky: {info}")
    page.screenshot(path="sticky_after.png", clip={"x":0,"y":0,"width":1500,"height":150})
    ctx.close()

    # Test 2: Sub-menu hover (if any items have sub-menus)
    ctx = browser.new_context(viewport={"width": 1500, "height": 900})
    page = ctx.new_page()
    page.goto("http://localhost:8000/", wait_until="networkidle")
    page.wait_for_timeout(2000)

    # Check which items have sub-menus
    has_submenu = page.evaluate("""() => {
        const items = Array.from(document.querySelectorAll('#site-navigation div.nav-menu > ul > li'));
        return items.map(li => ({
            text: li.querySelector('a')?.textContent.trim().substring(0,20),
            hasSubmenu: li.querySelector('ul, .sub-menu, .children, .mega-sub-menu') !== null,
            hasRighticon: li.querySelector('.righticon') !== null,
        }));
    }""")
    print(f"Sub-menu analysis: {has_submenu}")

    # Hover over items with sub-menus
    for item in has_submenu:
        if item['hasSubmenu']:
            print(f"  Hovering over '{item['text']}' (has submenu)...")
            try:
                page.hover(f'text={item["text"]}')
                page.wait_for_timeout(400)
                sub_visible = page.evaluate("""() => {
                    const sub = document.querySelector('.sub-menu, .children, .mega-sub-menu');
                    if (!sub) return null;
                    const b=sub.getBoundingClientRect();
                    return {x:b.x|0,y:b.y|0,w:b.width|0,h:b.height|0,disp:getComputedStyle(sub).display,vis:getComputedStyle(sub).visibility};
                }""")
                print(f"    Submenu visible: {sub_visible}")
                page.screenshot(path=f"submenu_{item['text'].replace(' ', '_')}.png", clip={"x":0,"y":0,"width":1500,"height":300})
            except Exception as e:
                print(f"    Error: {e}")

    ctx.close()
    browser.close()
    print("\nDONE")
