import { chromium } from 'playwright';

const dir = 'C:\\Users\\SABIHU~1\\AppData\\Local\\Temp\\claude\\screenshots';
const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
await page.waitForTimeout(2000);

// Hover over Services nav link to open mega menu
await page.hover('button:has-text("Services")');
await page.waitForTimeout(600);
await page.screenshot({ path: `${dir}\\mega-menu.png` });

// Services section
await page.evaluate(() => document.getElementById('services')?.scrollIntoView({ behavior: 'instant' }));
await page.waitForTimeout(1200);
await page.screenshot({ path: `${dir}\\services-cards.png` });

await browser.close();
console.log('Done.');
