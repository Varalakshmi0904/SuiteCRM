const { Given, When, Then } = require("@cucumber/cucumber");
const { AccountsPage } = require("../pages/AccountsPage");
const { ExcelReader } = require("../utils/ExcelReader");
const { expect } = require("playwright/test");

const excelReader = new ExcelReader("./utils/TestData.xlsx");

// Given("User is logged in to SuiteCRM", async function () {
//   this.accountsPage = new AccountsPage(this.page);
// });

When('User creates a new account using Excel test data {string}', { timeout: 50000 }, async function (testCase) {

    const data = excelReader.getTestData("AccountsData", testCase);

    await this.accountsPage.hoverOverAccountsMenu();
    await this.accountsPage.openCreateAccount();
    await this.accountsPage.enterName(data.name);

    await this.accountsPage.saveAccounts();

});

// Then('Account should be created successfully using Excel test data {string}', async function (testCase) {
//   const data=excelReader.getTestData("AccountsData", testCase);
    
//     await expect(this.page.getByText(data.name, { exact: true }).first()).toBeVisible({timeout: 20000});
//     console.log(`Account created successfully for: ${data.name}`);
//   });

  Then('Account should be created successfully using Excel test data {string}', async function (testCase) {

    const data = excelReader.getTestData("AccountsData", testCase);

    await expect(this.page.locator('span.dynamic-label.ng-star-inserted')
    .filter({ hasText: data.name })).toBeVisible({ timeout: 30000 });

    console.log(`Account created successfully for: ${data.name}`);

});
