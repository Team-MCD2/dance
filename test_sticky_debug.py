from playwright.sync_api import sync_playwright
import os, json

CHROME = r"C:\Users\PC\AppData\Local\ms-playwright\chromium-1217\chrome-win64\chrome.exe"

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=CHROME, headless=False)
    ctx = browser.new_context(viewport={"width": 1500, "height": 900})
    page = ctx.new_page()
    page.goto("http://localhost:8000/", wait_until="networkidle")
    page.wait_for_timeout(2000)

    # Check layout before scroll
    print("=== BEFORE SCROLL ===")
    data = page.evaluate("""() => {
        const nav = document.getElementById('site-navigation');
        const navMenu = nav.querySelector('.nav-menu');
        const pinkBlock = nav.querySelector('.tm-header-text-area');
        const headerMain = document.querySelector('.site-header-main');
        const stickable = document.querySelector('.tm-stickable-header');
        return {
            nav: { class: nav.className, w: nav.offsetWidth, h: nav.offsetHeight, style: nav.getAttribute('style') },
            navMenu: { w: navMenu.offsetWidth, h: navMenu.offsetHeight, display: getComputedStyle(navMenu).display, flexWrap: getComputedStyle(navMenu).flexWrap },
            pinkBlock: { w: pinkBlock.offsetWidth, h: pinkBlock.offsetHeight },
            headerMain: { class: headerMain.className, w: headerMain.offsetWidth, h: headerMain.offsetHeight, flexWrap: getComputedStyle(headerMain).flexWrap, style: headerMain.getAttribute('style') },
            stickable: { class: stickable ? stickable.className : 'N/A', style: stickable ? stickable.getAttribute('style') : 'N/A' },
            totalMenuWidth: Array.from(document.querySelectorAll('#menu-menu > li')).reduce((s, li) => s + li.offsetWidth, 0)
        };
    }""")
    print(json.dumps(data, indent=2))

    # Scroll down
    page.evaluate("window.scrollTo(0, 600)")
    page.wait_for_timeout(1500)

    print("\n=== AFTER SCROLL (STICKY) ===")
    data2 = page.evaluate("""() => {
        const nav = document.getElementById('site-navigation');
        const navMenu = nav.querySelector('.nav-menu');
        const pinkBlock = nav.querySelector('.tm-header-text-area');
        const headerMain = document.querySelector('.site-header-main');
        const stickable = document.querySelector('.tm-stickable-header');
        return {
            nav: { class: nav.className, w: nav.offsetWidth, h: nav.offsetHeight, style: nav.getAttribute('style'), flexWrap: getComputedStyle(nav).flexWrap },
            navMenu: { w: navMenu.offsetWidth, h: navMenu.offsetHeight, display: getComputedStyle(navMenu).display, flexWrap: getComputedStyle(navMenu).flexWrap },
            pinkBlock: { w: pinkBlock.offsetWidth, h: pinkBlock.offsetHeight },
            headerMain: { class: headerMain.className, w: headerMain.offsetWidth, h: headerMain.offsetHeight, flexWrap: getComputedStyle(headerMain).flexWrap, display: getComputedStyle(headerMain).display, style: headerMain.getAttribute('style') },
            stickable: { class: stickable ? stickable.className : 'N/A', w: stickable ? stickable.offsetWidth : 0, style: stickable ? stickable.getAttribute('style') : 'N/A', flexWrap: stickable ? getComputedStyle(stickable).flexWrap : 'N/A' },
            totalMenuWidth: Array.from(document.querySelectorAll('#menu-menu > li')).reduce((s, li) => s + li.offsetWidth, 0),
            siteHeaderMenu: (() => { const el = document.getElementById('site-header-menu'); return { w: el.offsetWidth, h: el.offsetHeight, flexWrap: getComputedStyle(el).flexWrap, display: getComputedStyle(el).display }; })()
        };
    }""")
    print(json.dumps(data2, indent=2))

    browser.close()
