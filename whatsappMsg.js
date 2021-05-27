const puppeteer = require("puppeteer");
(async function () {
    const browser = await puppeteer.launch({ headless: false ,defaultViewport : null , args: ["--start-maximized"] });
    const page = await browser.newPage();
    await page.goto("https://web.whatsapp.com/");
    await page.waitForSelector('span[data-testid="search"]', { visible: true });
    await page.click('span[data-testid="search"]')
    await page.type("._2_1wd.copyable-text.selectable-text", "contact name");//put name of the contact
    await page.keyboard.press("Enter");
    await page.waitForSelector('div[data-tab="6"]', { visible: true })
    const inp = await page.$('div[data-tab="6"]');
    for (let i = 0; i < 2; i++) {
        await inp.type("magic")
        await page.keyboard.press("Enter")
    }
    console.log("message sent!!")


})();
