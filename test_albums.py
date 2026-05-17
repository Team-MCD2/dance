from playwright.sync_api import sync_playwright

URL = "http://localhost:8000/pages/albums.html"

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=r"C:\Users\PC\AppData\Local\ms-playwright\chromium-1217\chrome-win64\chrome.exe")
    ctx = browser.new_context(viewport={"width": 487, "height": 900})
    page = ctx.new_page()

    console_msgs = []
    page.on("console", lambda m: console_msgs.append(f"[{m.type}] {m.text}"))
    page.on("pageerror", lambda e: console_msgs.append(f"[pageerror] {e}"))

    failed = []
    page.on("requestfailed", lambda r: failed.append(f"{r.url} -> {r.failure}"))

    page.goto(URL, wait_until="networkidle", timeout=30000)
    page.wait_for_timeout(1500)

    # Inspect gallery state
    info = page.evaluate("""
    () => {
      const out = {imgs: [], items: [], gallery: null};
      const gal = document.querySelector('.tm-masnory-gallery');
      if (gal) {
        const r = gal.getBoundingClientRect();
        const cs = getComputedStyle(gal);
        out.gallery = {w: r.width, h: r.height, display: cs.display, position: cs.position, visibility: cs.visibility, height_style: gal.style.height};
      }
      document.querySelectorAll('.tm-masnory-gallery .tm-box-col-wrapper').forEach((el,i) => {
        const r = el.getBoundingClientRect();
        const cs = getComputedStyle(el);
        out.items.push({i, w: r.width, h: r.height, display: cs.display, position: cs.position, top: cs.top, left: cs.left, transform: cs.transform, visibility: cs.visibility, opacity: cs.opacity, classes: el.className});
      });
      document.querySelectorAll('.tm-masnory-gallery img').forEach((img,i) => {
        const r = img.getBoundingClientRect();
        out.imgs.push({i, src: img.getAttribute('src'), naturalW: img.naturalWidth, naturalH: img.naturalHeight, w: r.width, h: r.height, complete: img.complete});
      });
      return out;
    }
    """)

    print("=== gallery ===")
    print(info["gallery"])
    print(f"=== items ({len(info['items'])}) ===")
    for it in info["items"]:
        print(it)
    print(f"=== imgs ({len(info['imgs'])}) ===")
    for im in info["imgs"]:
        print(im)
    print("=== failed requests ===")
    for f in failed:
        print(f)
    print("=== console ===")
    for m in console_msgs[-20:]:
        print(m)

    page.screenshot(path="albums_test.png", full_page=True)
    print("Screenshot saved -> albums_test.png")
    browser.close()
