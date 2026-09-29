class LoginPage {
  constructor(page) {
    this.page = page;

    this.username = page.locator('input[name="username"]');
    this.password = page.locator('input[name="password"]');
    this.loginButton = page.getByRole("button", { name: "Log In" });
    this.loginError = page.locator("//div[@role='alert']");
    //this.loginError = page.getByText('Login credentials incorrect, please try again.');
  }

  async open() {
    await this.page.goto("https://suite8demo.suiteondemand.com/");
  }

  async login(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }

  async isDashboardDisplayed() {
    await this.page
      .locator("#tab0")
      .waitFor({ state: "visible", timeout: 30000 });
    return true;
  }

  async isLoginErrorDisplayed() {
    await this.loginError.waitFor({ state: "visible", timeout: 30000 });
    return true;
  }
}

module.exports = { LoginPage };
