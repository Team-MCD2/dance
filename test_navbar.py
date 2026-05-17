from playwright.sync_api import sync_playwright

URL = "http://localhost:8000/"

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=r"C:\Users\PC\AppData\Local\ms-playwright\chromium-1217\chrome-win64\chrome.exe")
    for vw, name in [(1920, "desktop"), (1440, "laptop_lg"), (1280, "laptop"), (1024, "tablet_lg"), (768, "tablet"), (487, "mobile")]:
        ctx = browser.new_context(viewport={"width": vw, "height": 700})
        page = ctx.new_page()
        page.goto(URL, wait_until="networkidle", timeout=30000)
        page.wait_for_timeout(800)

        info = page.evaluate("""
        () => {
          const q = (s) => document.querySelector(s);
          const all = (s) => Array.from(document.querySelectorAll(s));
          const rect = (el) => { if(!el) return null; const r=el.getBoundingClientRect(); return {x:r.x|0,y:r.y|0,w:r.width|0,h:r.height|0,vis:getComputedStyle(el).visibility,disp:getComputedStyle(el).display}; };
          const out = {
            topbar: rect(q('.themetechmount-topbar-wrapper')),
            siteHeader: rect(q('.site-header')),
            siteHeaderMain: rect(q('.site-header-main')),
            branding: rect(q('.site-branding')),
            logo: rect(q('.themetechmount-logo-img')),
            siteHeaderMenu: rect(q('#site-header-menu')),
            nav: rect(q('#site-navigation')),
            menuDiv: rect(q('#site-navigation > .nav-menu')),
            menuUl: rect(q('#site-navigation ul.nav-menu')),
            textArea: rect(q('.tm-header-text-area')),
            rightBg: rect(q('.tm-header-rightbg')),
            iconRight: rect(q('.tm-iconright')),
            phoneText: rect(q('.tm-textheader')),
            appelButton: rect(q('.tm-header-rightbg .elementor-button')),
            menuToggle: rect(q('.menu-toggle')),
            menuItems: all('#site-navigation ul.nav-menu > li').map(li => ({
              text: li.textContent.trim().slice(0,30),
              ...((r=>({x:r.x|0,y:r.y|0,w:r.width|0,h:r.height|0}))(li.getBoundingClientRect()))
            })),
          };
          // computed bg color of header-rightbg & site-header
          out.bg = {
            header: getComputedStyle(q('.site-header')).backgroundColor,
            rightbg: getComputedStyle(q('.tm-header-rightbg')).backgroundColor,
            textArea: getComputedStyle(q('.tm-header-text-area')).backgroundColor,
            nav: getComputedStyle(q('#site-navigation')).backgroundColor,
          };
          out.viewport = {w: window.innerWidth, h: window.innerHeight};
          return out;
        }
        """)

        print(f"\n========== {name} ({vw}px) ==========")
        for k, v in info.items():
            if k == "menuItems":
                print(f"menuItems ({len(v)}):")
                for it in v:
                    print(f"  {it}")
            else:
                print(f"{k}: {v}")

        # Crop top of page (just navbar area)
        page.screenshot(path=f"navbar_{name}.png", clip={"x":0,"y":0,"width":vw,"height":200})
        ctx.close()
    browser.close()
