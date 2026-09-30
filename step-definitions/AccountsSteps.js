const { Given, When, Then } = require("@cucumber/cucumber");
const { AccountsPage } = require("../pages/AccountsPage");
const { ExcelReader } = require("../utils/ExcelReader");
const { expect } = require("playwright/test");
const logger = require("../utils/logger");

const excelReader = new ExcelReader("./utils/TestData.xlsx");

When('User creates a new account with mandatory fields using Excel test data {string}', { timeout: 50000 }, async function (testCase) {

    const data = excelReader.getTestData("AccountsData", testCase);
    await this.accountsPage.hoverOverAccountsMenu();
    await this.accountsPage.openCreateAccount();
    await this.accountsPage.enterAccountName(data.name);
    await this.accountsPage.saveAccount();

});

When('User creates a new account using Excel test data {string}', { timeout: 50000 }, async function (testCase) {

    const data = excelReader.getTestData("AccountsData", testCase);
    await this.accountsPage.hoverOverAccountsMenu();
    await this.accountsPage.openCreateAccount();
    await this.accountsPage.enterAccountName(data.name)
    await this.accountsPage.enterContactDetails(
        data.website,
        data.officePhone,
        data.emailAddress
    );
    await this.accountsPage.enterBillingAddress(
        data.billingStreet,
        data.billingPostalcode,
        data.billingCity,
        data.billingState,
        data.billingCountry
    );
    await this.accountsPage.enterShippingAddress(
        data.shippingStreet,
        data.shippingPostalcode,
        data.shippingCity,
        data.shippingState,
        data.shippingCountry
    )
    await this.accountsPage.enterDescription(data.description);
    await this.accountsPage.saveAccount();

});

Then('Account should be created successfully using Excel test data {string}', async function (testCase) {

    const data = excelReader.getTestData("AccountsData", testCase);
    await expect(this.page.locator('span.dynamic-label.ng-star-inserted')
        .filter({ hasText: data.name })).toBeVisible({ timeout: 30000 });
    logger.info(`Account creation test case: ${testCase} passed successfully`);
});
