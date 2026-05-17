from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=r"C:\Users\PC\AppData\Local\ms-playwright\chromium-1217\chrome-win64\chrome.exe")
    ctx = browser.new_context(viewport={"width": 800, "height": 800})
    page = ctx.new_page()
    page.on("console", lambda msg: print(f"Console: {msg.text}"))
    page.goto("http://localhost:8000/", wait_until="networkidle")
    page.wait_for_timeout(500)

    # Before click
    nav_class_before = page.evaluate("document.getElementById('site-navigation').className")
    print(f"Nav classes before click: {nav_class_before}")
    page.screenshot(path="toggle_before.png", clip={"x":0,"y":0,"width":1133,"height":250})

    # Click hamburger
    page.click('.menu-toggle')
    page.wait_for_timeout(400)

    nav_class = page.evaluate("document.getElementById('site-navigation').className")
    menu_disp = page.evaluate("getComputedStyle(document.querySelector('#site-navigation .nav-menu')).display")
    print(f"Nav classes after click: {nav_class}")
    print(f"Menu display after click: {menu_disp}")

    # After click
    page.screenshot(path="toggle_after.png", clip={"x":0,"y":0,"width":1133,"height":450})
    ctx.close()
    browser.close()
    print("done")
