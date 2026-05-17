from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=r"C:\Users\PC\AppData\Local\ms-playwright\chromium-1217\chrome-win64\chrome.exe")
    for vw in [1133, 1250, 1350, 1500, 1920]:
        ctx = browser.new_context(viewport={"width": vw, "height": 800})
        page = ctx.new_page()
        page.goto("http://localhost:8000/", wait_until="networkidle")
        page.wait_for_timeout(600)

        info = page.evaluate("""
        () => {
          const r = (s) => { const el=document.querySelector(s); if(!el) return null; const x=el.getBoundingClientRect(); return {x:x.x|0,y:x.y|0,w:x.width|0,h:x.height|0, pos:getComputedStyle(el).position, disp:getComputedStyle(el).display}; };
          const cssText = Array.from(document.styleSheets).map(s => {
            try { return {href: s.href, rules: s.cssRules.length}; } catch(e) { return {href: s.href||'inline', err: true}; }
          });
          return {
            topbar: r('.themetechmount-topbar-wrapper'),
            menuDiv: r('#site-navigation > .nav-menu'),
            menuUl: r('#site-navigation div.nav-menu > ul'),
            textArea: r('#site-navigation > .tm-header-text-area'),
            toggle: r('.menu-toggle'),
            cssSheets: cssText,
          };
        }
        """)
        print(f"\n=== {vw}px ===")
        for k,v in info.items():
            if k != 'cssSheets':
                print(f"  {k}: {v}")
        for s in info['cssSheets']:
            print(f"  sheet: {s}")
        page.screenshot(path=f"exact_{vw}.png", clip={"x":0,"y":0,"width":vw,"height":240})
        ctx.close()
    browser.close()
