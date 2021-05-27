const puppeteer = require("puppeteer");
async function scrape(url) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForSelector('span[data-testid="search"]', { visible: true });
    await page.click('span[data-testid="search"]')
    await page.type("._2_1wd.copyable-text.selectable-text", "name of the contact");//put name of the contact
    await page.keyboard.press("Enter");
    await page.waitForSelector('div[data-tab="6"]', { visible: true })
    const inp = await page.$('div[data-tab="6"]');
    for (let i = 0; i < 50; i++) {
        await inp.type("magic")
        await page.keyboard.press("Enter")
    }


}
scrape("https://web.whatsapp.com/")