const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  try {
    await page.goto('http://localhost:3000/les-professeurs', { waitUntil: 'networkidle2' });
    await page.setViewport({ width: 1200, height: 1000 });
    await page.screenshot({ path: 'local-screenshot.png' });
    const result = await page.evaluate(() => {
      const fonts = [];
      document.querySelectorAll('*').forEach(el => {
          if (el.textContent && el.textContent.includes('Alexis Sabatier')) {
              fonts.push({
                 tag: el.tagName,
                 fontFamily: window.getComputedStyle(el).fontFamily
              });
          }
      });
      return fonts;
    });
    console.log('Result:', result);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await browser.close();
  }
})();
