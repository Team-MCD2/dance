const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36');
  
  try {
    await page.goto('https://tempsdance.fr/lesprofesseurs', { waitUntil: 'networkidle2' });
    
    const result = await page.evaluate(() => {
      let info = {};
      const els = Array.from(document.querySelectorAll('a'));
      for(const el of els) {
          if(el.textContent && el.textContent.includes('Alexis Sabatier')) {
              if (window.getComputedStyle(el).fontFamily.includes('Abuget')) {
                  // Get the full card HTML (up to 4 levels)
                  let parent = el.parentElement;
                  if (parent) parent = parent.parentElement;
                  if (parent) parent = parent.parentElement;
                  if (parent) parent = parent.parentElement;
                  info = {
                      html: parent ? parent.outerHTML : el.outerHTML,
                  };
              }
          }
      }
      return info;
    });
    console.log('Result:', result);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await browser.close();
  }
})();
