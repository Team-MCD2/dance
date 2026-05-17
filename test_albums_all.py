from playwright.sync_api import sync_playwright

URL = "http://localhost:8000/pages/albums.html"

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=r"C:\Users\PC\AppData\Local\ms-playwright\chromium-1217\chrome-win64\chrome.exe")
    for vw, name in [(1920, "desktop"), (1280, "laptop"), (768, "tablet"), (487, "mobile")]:
        ctx = browser.new_context(viewport={"width": vw, "height": 900})
        page = ctx.new_page()
        page.goto(URL, wait_until="networkidle", timeout=30000)
        page.wait_for_timeout(800)
        broken = page.evaluate("""
        () => Array.from(document.querySelectorAll('img')).map((img,i) => ({
          i, src: img.getAttribute('src'), nw: img.naturalWidth, nh: img.naturalHeight,
          rect: (r => ({w: r.width, h: r.height}))(img.getBoundingClientRect()),
          inGallery: !!img.closest('.tm-masnory-gallery'),
        })).filter(x => x.nw === 0 || x.rect.w === 0 || x.rect.h === 0)
        """)
        print(f"--- {name} ({vw}px) broken/zero-size images: {len(broken)}")
        for b in broken: print(" ", b)
        page.screenshot(path=f"albums_{name}.png", full_page=True)
        ctx.close()
    browser.close()
