from playwright.sync_api import sync_playwright

CHROME = r"C:\Users\PC\AppData\Local\ms-playwright\chromium-1217\chrome-win64\chrome.exe"

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=CHROME)

    # Test 1: Mobile - click a menu item to navigate
    ctx = browser.new_context(viewport={"width": 800, "height": 900})
    page = ctx.new_page()
    page.goto("http://localhost:8000/", wait_until="networkidle")
    page.wait_for_timeout(2000)
    page.click('.menu-toggle')
    page.wait_for_timeout(500)
    page.screenshot(path="mobile_before_click_link.png", clip={"x":0,"y":0,"width":800,"height":600})

    # Click "Albums" link
    page.click('text=Albums')
    page.wait_for_timeout(1000)
    url = page.url
    print(f"After clicking Albums: {url}")
    page.screenshot(path="mobile_after_click_albums.png", clip={"x":0,"y":0,"width":800,"height":200})
    ctx.close()

    # Test 2: Mobile - sticky header behavior
    ctx = browser.new_context(viewport={"width": 800, "height": 900})
    page = ctx.new_page()
    page.goto("http://localhost:8000/", wait_until="networkidle")
    page.wait_for_timeout(2000)
    page.evaluate("window.scrollTo(0, 500)")
    page.wait_for_timeout(800)
    info = page.evaluate("""() => ({
        isStuck: document.querySelector('.tm-stickable-header')?.classList.contains('is_stuck'),
        headerPos: (() => { const b=document.querySelector('.site-header').getBoundingClientRect(); return {x:b.x|0,y:b.y|0,w:b.width|0,h:b.height|0}; })(),
        navClasses: document.getElementById('site-navigation')?.className,
    })""")
    print(f"Mobile scrolled: {info}")
    page.screenshot(path="mobile_scrolled.png", clip={"x":0,"y":0,"width":800,"height":200})
    ctx.close()

    # Test 3: Desktop - click menu items
    ctx = browser.new_context(viewport={"width": 1500, "height": 900})
    page = ctx.new_page()
    page.goto("http://localhost:8000/", wait_until="networkidle")
    page.wait_for_timeout(2000)
    page.screenshot(path="desktop_before_click.png", clip={"x":0,"y":0,"width":1500,"height":180})

    # Click "Contact"
    page.click('text=Contact')
    page.wait_for_timeout(1000)
    url = page.url
    print(f"After clicking Contact: {url}")
    page.screenshot(path="desktop_after_click_contact.png", clip={"x":0,"y":0,"width":1500,"height":180})
    ctx.close()

    browser.close()
    print("\nDONE")
