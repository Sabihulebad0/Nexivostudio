import { chromium } from 'playwright';

const dir = 'C:\\Users\\SABIHU~1\\AppData\\Local\\Temp\\claude\\screenshots';
const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });

const pages = [
  { url: 'http://localhost:3000/services/web-design',            file: 'svc-web-design.png' },
  { url: 'http://localhost:3000/services/web-development',       file: 'svc-web-dev.png' },
  { url: 'http://localhost:3000/services/social-media-marketing',file: 'svc-smm.png' },
  { url: 'http://localhost:3000/services/seo',                   file: 'svc-seo.png' },
];

for (const { url, file } of pages) {
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: `${dir}\\${file}` });
}

await browser.close();
console.log('Done.');
