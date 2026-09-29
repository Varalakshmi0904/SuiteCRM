const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

setDefaultTimeout(30000);

Before({timeout: 50000}, async function () {
    this.browser = await chromium.launch({
        headless: false
    });

    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();

    await this.page.goto('https://suite8demo.suiteondemand.com/');

    await this.page.locator('input[name="username"]').fill('will');
    await this.page.locator('input[name="password"]').fill('will');
    await this.page.getByRole('button', { name: 'Log In' }).click();
});

After(async function () {
    await this.browser.close();
});