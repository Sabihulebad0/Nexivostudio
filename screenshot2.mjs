import { chromium } from 'playwright';

const dir = 'C:\\Users\\SABIHU~1\\AppData\\Local\\Temp\\claude\\screenshots';
const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
await page.waitForTimeout(3000);

// Hero section — top of page
await page.screenshot({ path: `${dir}\\hero-bg.png`, clip: { x: 0, y: 0, width: 1440, height: 900 } });

await browser.close();
console.log('Done.');
