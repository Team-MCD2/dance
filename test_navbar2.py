from playwright.sync_api import sync_playwright

URL = "http://localhost:8000/"

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=r"C:\Users\PC\AppData\Local\ms-playwright\chromium-1217\chrome-win64\chrome.exe")
    ctx = browser.new_context(viewport={"width": 1280, "height": 700})
    page = ctx.new_page()
    page.goto(URL, wait_until="networkidle", timeout=30000)
    page.wait_for_timeout(800)
    info = page.evaluate("""
    () => {
      const r = (el) => { if(!el) return null; const x=el.getBoundingClientRect(); return {x:x.x|0,y:x.y|0,w:x.width|0,h:x.height|0}; };
      return {
        siteHeaderMain: r(document.querySelector('.site-header-main')),
        branding: r(document.querySelector('.site-branding')),
        siteHeaderMenu: r(document.querySelector('#site-header-menu')),
        nav: r(document.querySelector('#site-navigation')),
        menuDiv: r(document.querySelector('#site-navigation > .nav-menu')),
        menuUl: r(document.querySelector('#site-navigation ul.nav-menu')),
        textArea: r(document.querySelector('#site-navigation > .tm-header-text-area')),
        rightBg: r(document.querySelector('.tm-header-rightbg')),
        items: Array.from(document.querySelectorAll('#site-navigation ul.nav-menu > li')).map(li => ({
          text: li.textContent.trim(), ...r(li)
        })),
      };
    }
    """)
    import json
    print(json.dumps(info, indent=2))
    page.screenshot(path="navbar_laptop_full.png", clip={"x":0,"y":0,"width":1280,"height":160})
    browser.close()
