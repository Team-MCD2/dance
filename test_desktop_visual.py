from playwright.sync_api import sync_playwright
import os

CHROME = r"C:\Users\PC\AppData\Local\ms-playwright\chromium-1217\chrome-win64\chrome.exe"
OUT = os.path.join(os.path.dirname(__file__), "screenshots")
os.makedirs(OUT, exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=CHROME, headless=False)
    ctx = browser.new_context(viewport={"width": 1500, "height": 900})
    page = ctx.new_page()

    # 1. Load homepage
    page.goto("http://localhost:8000/", wait_until="networkidle")
    page.wait_for_timeout(2000)
    page.screenshot(path=os.path.join(OUT, "01_desktop_init.png"), full_page=False)
    print("01 - Desktop initial: OK")

    # 2. Hover each menu item using JS to get text first
    menu_texts = page.evaluate("""
        Array.from(document.querySelectorAll('#menu-menu > li > a')).map(a => a.textContent.trim())
    """)
    print(f"Found {len(menu_texts)} menu items: {menu_texts}")

    for i, text in enumerate(menu_texts):
        link = page.query_selector(f"#menu-menu > li:nth-child({i+1}) > a")
        if link:
            link.hover()
            page.wait_for_timeout(400)
            safe_name = text.replace(" ", "_").replace("'", "").replace(".", "")
            page.screenshot(path=os.path.join(OUT, f"02_hover_{i}_{safe_name}.png"), full_page=False)
            print(f"02 - Hover '{text}': OK")

    # 3. Click "Nos Cours" - navigate to that page
    page.click("#menu-menu > li:nth-child(2) > a")
    page.wait_for_timeout(3000)
    page.screenshot(path=os.path.join(OUT, "03_page_nos_cours.png"), full_page=False)
    print(f"03 - Clicked 'Nos Cours', URL: {page.url}")

    # 4. Click "Contact" on the new page
    page.click("#menu-menu > li:nth-child(8) > a")
    page.wait_for_timeout(3000)
    page.screenshot(path=os.path.join(OUT, "04_page_contact.png"), full_page=False)
    print(f"04 - Clicked 'Contact', URL: {page.url}")

    # 5. Click "Accueil" to go back to homepage
    page.click("#menu-menu > li:nth-child(1) > a")
    page.wait_for_timeout(3000)
    page.screenshot(path=os.path.join(OUT, "05_back_accueil.png"), full_page=False)
    print(f"05 - Back to Accueil, URL: {page.url}")

    # 6. Scroll down to test sticky
    page.evaluate("window.scrollTo(0, 600)")
    page.wait_for_timeout(1000)
    page.screenshot(path=os.path.join(OUT, "06_sticky_scrolled.png"), full_page=False)
    print("06 - Sticky after scroll: OK")

    # 7. Scroll deeper
    page.evaluate("window.scrollTo(0, 1200)")
    page.wait_for_timeout(1000)
    page.screenshot(path=os.path.join(OUT, "07_sticky_deep_scroll.png"), full_page=False)
    print("07 - Deep scroll sticky: OK")

    # 8. Back to top
    page.evaluate("window.scrollTo(0, 0)")
    page.wait_for_timeout(500)
    page.screenshot(path=os.path.join(OUT, "08_back_to_top.png"), full_page=False)
    print("08 - Back to top: OK")

    browser.close()
    print("\nAll desktop navbar tests completed successfully!")
