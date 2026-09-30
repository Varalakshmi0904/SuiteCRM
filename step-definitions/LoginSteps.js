const { Given, When, Then } = require("@cucumber/cucumber");
const { LoginPage } = require("../pages/LoginPage");
const { ExcelReader } = require("../utils/ExcelReader");

const excelReader = new ExcelReader("./utils/TestData.xlsx");

Given("User is on the SuiteCRM login page", async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.open();
});

When("User logs in using Excel test data {string}", async function (testCase) {
  const data = excelReader.getTestData("LoginData", testCase);

  await this.loginPage.login(data.username, data.password);
});

When("User logs in to CRM using {string} and {string}",{timeout: 50000},async function (username, password) {
    await this.loginPage.login(username, password);
  }
);
// Then('User should see the SuiteCRM dashboard', async function () {
//     const dashboardDisplayed = await this.loginPage.isDashboardDisplayed();

//     if (!dashboardDisplayed) {
//         throw new Error('SuiteCRM dashboard is not displayed');
//     }
// });
Then(
  "User should see the SuiteCRM dashboard",async function () {
    await expect(this.page).toHaveURL('https://suite8demo.suiteondemand.com/#/home');
    console.log("Valid login completed successfully");
  }
);

Then("User should see the login error message", async function () {
  const errorDisplayed = await this.loginPage.isLoginErrorDisplayed();

  if (!errorDisplayed) {
    throw new Error("Login error message is not displayed");
  }
});
