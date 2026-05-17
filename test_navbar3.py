from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=r"C:\Users\PC\AppData\Local\ms-playwright\chromium-1217\chrome-win64\chrome.exe")
    for vw in [1100, 1150, 1200, 1250, 1300, 1366, 1440]:
        ctx = browser.new_context(viewport={"width": vw, "height": 700})
        page = ctx.new_page()
        page.goto("http://localhost:8000/", wait_until="networkidle")
        page.wait_for_timeout(500)
        info = page.evaluate("""
        () => {
          const r = (el) => { if(!el) return null; const x=el.getBoundingClientRect(); return {x:x.x|0,y:x.y|0,w:x.width|0,h:x.height|0,d:getComputedStyle(el).display,fw:getComputedStyle(el).flexWrap}; };
          return {
            siteHeaderMain: r(document.querySelector('.site-header-main')),
            nav: r(document.querySelector('#site-navigation')),
            menuDiv: r(document.querySelector('#site-navigation > .nav-menu')),
            textArea: r(document.querySelector('#site-navigation > .tm-header-text-area')),
            menuToggle: r(document.querySelector('.menu-toggle')),
          };
        }
        """)
        print(f"\n--- {vw}px ---")
        for k,v in info.items(): print(f"  {k}: {v}")
        page.screenshot(path=f"navbar_w{vw}.png", clip={"x":0,"y":0,"width":vw,"height":220})
        ctx.close()
    browser.close()
