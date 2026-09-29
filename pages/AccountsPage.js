class AccountsPage {
  constructor(page) {
    this.page = page;
    this.AccountsMenu = page
      .locator("span")
      .filter({ hasText: "Accounts" })
      .first();
    this.createAccount = page.locator(
      "//span[normalize-space()='Create Account']"
    );

    this.accountName = page.locator('input[type="text"]').nth(1);

    this.saveButton = page.getByText("Save");
  }

  async hoverOverAccountsMenu() {
    await this.AccountsMenu.hover();
  }
  async openCreateAccount() {
    await this.createAccount.click();
  }
  async enterName(name){
    await this.accountName.fill(name);
}

  async saveAccounts() {
    await this.saveButton.click();
  }
}
module.exports = { AccountsPage };
