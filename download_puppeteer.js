const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const urls = [
    { url: 'https://tempsdance.fr/wp-content/uploads/2021/12/slider-img-01-50x100.jpg', local: 'public/slider/assets/content/uploads/2021/12/slider-img-01-50x100.jpg' },
    { url: 'https://tempsdance.fr/wp-content/uploads/2021/12/slider-img-01.jpg', local: 'public/slider/assets/content/uploads/2021/12/slider-img-01.jpg' },
    { url: 'https://tempsdance.fr/wp-content/uploads/2022/03/man-and-woman-dancing-salsa-noir-scaled-50x100.jpg', local: 'public/slider/assets/content/uploads/2022/03/man-and-woman-dancing-salsa-noir-scaled-50x100.jpg' },
    { url: 'https://tempsdance.fr/wp-content/uploads/2022/03/man-and-woman-dancing-salsa-noir-scaled.jpg', local: 'public/slider/assets/content/uploads/2022/03/man-and-woman-dancing-salsa-noir-scaled.jpg' }
];

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    for (const item of urls) {
        try {
            console.log(`Navigating to ${item.url}...`);
            const viewSource = await page.goto(item.url);
            const buffer = await viewSource.buffer();
            
            const localPath = path.resolve(__dirname, item.local);
            fs.mkdirSync(path.dirname(localPath), { recursive: true });
            fs.writeFileSync(localPath, buffer);
            console.log(`Saved ${item.local}`);
        } catch (e) {
            console.error(`Failed to download ${item.url}:`, e);
        }
    }
    
    await browser.close();
    
    // Also fix the index.html references
    const indexPath = path.resolve(__dirname, 'public/slider/index.html');
    let content = fs.readFileSync(indexPath, 'utf-8');
    content = content.replace(/\/\/tempsdance\.fr\/content\/uploads\//g, 'assets/content/uploads/');
    content = content.replace(/https:\/\/tempsdance\.fr\/content\/uploads\//g, 'assets/content/uploads/');
    fs.writeFileSync(indexPath, content);
    console.log("Updated index.html");
})();
