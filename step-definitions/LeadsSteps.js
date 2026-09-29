const { Given, When, Then } = require("@cucumber/cucumber");
const { LeadsPage } = require("../pages/LeadsPage");
const { AccountsPage } = require("../pages/AccountsPage");
const { ExcelReader } = require("../utils/ExcelReader");
const { expect } = require("playwright/test");

const excelReader = new ExcelReader("./utils/TestData.xlsx");

Given("User is logged in to SuiteCRM", async function () {
  this.leadsPage = new LeadsPage(this.page);
  this.accountsPage = new AccountsPage(this.page);
});

When("User logs in using Excel test data {string}", async function (testCase) {
  const data = excelReader.getTestData("LoginData", testCase);

  await this.loginPage.login(data.username, data.password);
});

When(
  "User creates a new lead using Excel test data {string}",
  { timeout: 50000 },
  async function (testCase) {
    const data = excelReader.getTestData("LeadsData", testCase);
    //console.log(data);

    await this.leadsPage.hoverOverLeadsMenu();
    await this.leadsPage.openCreateLead();

    //await this.leadsPage.enterFName(data.firstName);
    await this.leadsPage.enterLName(data.lastName);

    await this.leadsPage.saveLead();
    await this.page.waitForTimeout(10000);
  }
);

// When("User creates a new lead", { timeout: 50000 }, async function () {
//   const data = excelReader.getTestData("LeadsData", "TC001");

//   await this.leadsPage.openLeadsMenu();

//   await this.leadsPage.openCreateLead();

//   await this.leadsPage.selectTitle(data.title);

//   await this.leadsPage.enterName(data.firstName, data.lastName);

//   await this.leadsPage.enterJobDetails(
//     data.jobTitle,
//     data.department,
//     data.accountName
//   );

//   await this.leadsPage.enterContactDetails(
//     data.mobile,
//     data.officePhone,
//     data.website
//   );

//   await this.leadsPage.enterEmail(data.email);

//   await this.leadsPage.enterPrimaryAddress(
//     data.primaryStreet,
//     data.primaryPostalcode,
//     data.primaryCity,
//     data.primaryState,
//     data.primaryCountry
//   );

//   await this.leadsPage.enterAlternateAddress(
//     data.altStreet,
//     data.altPostalcode,
//     data.altCity,
//     data.altState,
//     data.altCountry
//   );

//   await this.leadsPage.enterDescription(data.description);

//   await this.leadsPage.saveLead();
// });

Then(
  "Lead should be created successfully using Excel test data {string}",
  async function (testCase) {
    const data = excelReader.getTestData("LeadsData", testCase);

    await expect(
      this.page.getByRole('tabpanel', { name: 'OVERVIEW' })
          .getByText(data.lastName, { exact: true })
  ).toBeVisible({ timeout: 20000 });


    console.log(`Lead created successfully for Last Name: ${data.lastName}`);
  }
);
