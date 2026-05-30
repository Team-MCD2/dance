const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    
    // Listen for console logs
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('requestfailed', request => {
        console.log(`FAILED REQUEST: ${request.url()} ${request.response()?.status()}`);
    });

    try {
        await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0', timeout: 30000 });
        await page.screenshot({ path: 'screenshot_home.png', fullPage: true });
        console.log('Screenshot of home page saved to screenshot_home.png');
    } catch (error) {
        console.error('Error taking screenshot:', error);
    } finally {
        await browser.close();
    }
})();
