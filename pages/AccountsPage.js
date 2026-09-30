class AccountsPage {

  constructor(page) {
      this.page = page;

      this.accountsMenu = page.locator('span').filter({ hasText: 'Accounts' }).first();
      this.createAccount = page.locator("//span[normalize-space()='Create Account']");

      this.accountName = page.locator('input[type="text"]').nth(1);
      this.website = page.locator('input[type="text"]').nth(2);
      this.officePhone = page.locator('input[type="text"]').nth(3);
      this.emailAddress = page.locator('input[type="text"]').nth(4);

      this.billingStreet = page.locator('textarea').first();
      this.billingPostalcode = page.locator('input[type="text"]').nth(5);
      this.billingCity = page.locator('input[type="text"]').nth(6);
      this.billingState = page.locator('input[type="text"]').nth(7);
      this.billingCountry = page.locator('input[type="text"]').nth(8);

      this.shippingStreet = page.locator('textarea').nth(1)
      this.shippingPostalcode = page.locator('input[type="text"]').nth(9);
      this.shippingCity = page.locator('input[type="text"]').nth(10);
      this.shippingState = page.locator('input[type="text"]').nth(11);
      this.shippingCountry = page.locator('input[type="text"]').nth(12);

      this.description = page.locator('textarea').last()

      this.saveButton = page.getByRole('button', { name: 'Save' });
      this.cancelButton = page.getByRole('button', { name: 'Cancel' });
  }

  async hoverOverAccountsMenu() {
      await this.accountsMenu.hover();
  }

  async openCreateAccount() {
      await this.createAccount.click();
  }

  async enterAccountName(name) {
      await this.accountName.fill(name);
  }

  async enterContactDetails(website, officePhone, emailAddress) {
      await this.website.fill(website);
      await this.officePhone.fill(officePhone);
      await this.emailAddress.fill(emailAddress);
  }

  async enterBillingAddress(street, postalcode, city, state, country) {
      await this.billingStreet.fill(street);
      await this.billingPostalcode.fill(String(postalcode));
      await this.billingCity.fill(city);
      await this.billingState.fill(state);
      await this.billingCountry.fill(country);
  }

  async enterShippingAddress(street, postalcode, city, state, country) {
      await this.shippingStreet.fill(street);
      await this.shippingPostalcode.fill(String(postalcode));
      await this.shippingCity.fill(city);
      await this.shippingState.fill(state);
      await this.shippingCountry.fill(country);
  }

  async enterDescription(description) {
      await this.description.fill(description);
  }

  async saveAccount() {
      await this.saveButton.click();
      await this.page.waitForTimeout(10000);
  }

  async cancelAccount() {
      await this.cancelButton.click();
  }
}

module.exports = { AccountsPage };