from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=r"C:\Users\PC\AppData\Local\ms-playwright\chromium-1217\chrome-win64\chrome.exe")
    for vw in [1366, 1920]:
        ctx = browser.new_context(viewport={"width": vw, "height": 800})
        page = ctx.new_page()
        page.goto("http://localhost:8000/", wait_until="networkidle")
        page.wait_for_timeout(2000)
        info = page.evaluate("""() => ({
            bodyScrollW: document.body.scrollWidth,
            htmlScrollW: document.documentElement.scrollWidth,
            bodyOverflow: getComputedStyle(document.body).overflowX,
            htmlOverflow: getComputedStyle(document.documentElement).overflowX,
        })""")
        print(f"{vw}px: {info}")
        # Full-width screenshot
        page.screenshot(path=f"full_{vw}.png", full_page=False)
        ctx.close()
    browser.close()
