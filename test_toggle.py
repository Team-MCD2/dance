from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=r"C:\Users\PC\AppData\Local\ms-playwright\chromium-1217\chrome-win64\chrome.exe")
    ctx = browser.new_context(viewport={"width": 1024, "height": 700})
    page = ctx.new_page()
    page.goto("http://localhost:8000/", wait_until="networkidle")
    page.wait_for_timeout(500)

    data = page.evaluate("""
    () => {
      const navChildren = Array.from(document.querySelectorAll('#site-navigation > *'));
      return navChildren.map(el => {
        const cs = getComputedStyle(el);
        const r = el.getBoundingClientRect();
        return {
          tag: el.tagName,
          class: el.className,
          rect: {x: r.x|0, y: r.y|0, w: r.width|0, h: r.height|0},
          order: cs.order, ml: cs.marginLeft, mr: cs.marginRight,
          display: cs.display, position: cs.position,
        };
      });
    }
    """)
    import json
    print(json.dumps(data, indent=2))
    browser.close()
