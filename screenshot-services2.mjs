import { chromium } from 'playwright';

const dir = 'C:\\Users\\SABIHU~1\\AppData\\Local\\Temp\\claude\\screenshots';
const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });

await page.goto('http://localhost:3000/services/web-design', { waitUntil: 'networkidle' });
await page.waitForTimeout(2000);

// Scroll to children grid
await page.evaluate(() => window.scrollBy(0, 700));
await page.waitForTimeout(1000);
await page.screenshot({ path: `${dir}\\svc-children.png` });

// Scroll to CTA
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await page.waitForTimeout(800);
await page.screenshot({ path: `${dir}\\svc-cta.png` });

await browser.close();
console.log('Done.');
