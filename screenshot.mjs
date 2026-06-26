import { chromium } from 'playwright';

const screenshotDir = 'C:\\Users\\SABIHU~1\\AppData\\Local\\Temp\\claude\\screenshots';
const url = 'http://localhost:3000';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });

await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(2500);

await page.screenshot({ path: `${screenshotDir}\\nexivo-hero.png` });

await page.evaluate(() => {
  const el = document.getElementById('services');
  if (el) el.scrollIntoView({ behavior: 'instant' });
});
await page.waitForTimeout(1000);
await page.screenshot({ path: `${screenshotDir}\\nexivo-services.png` });

await page.evaluate(() => {
  const el = document.getElementById('portfolio');
  if (el) el.scrollIntoView({ behavior: 'instant' });
});
await page.waitForTimeout(1000);
await page.screenshot({ path: `${screenshotDir}\\nexivo-portfolio.png` });

await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await page.waitForTimeout(1000);
await page.screenshot({ path: `${screenshotDir}\\nexivo-footer.png` });

await browser.close();
console.log('Done.');
