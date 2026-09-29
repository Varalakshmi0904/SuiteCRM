class LeadsPage {

    constructor(page) {
        this.page = page;

        this.leadsMenu = page.locator('span').filter({ hasText: 'Leads' }).first();
        this.createLead = page.locator("//span[normalize-space()='Create Lead']");

        this.title = page.locator('select').first();

        this.firstName = page.getByRole('textbox').nth(1);
        this.lastName = page.getByRole('textbox').nth(2);
        this.jobTitle = page.getByRole('textbox').nth(3);
        this.mobile = page.getByRole('textbox').nth(4);
        this.department = page.getByRole('textbox').nth(5);
        
        this.officePhone = page.getByRole('textbox').nth(6);
        this.accountName = page.getByRole('textbox').nth(7);
        this.website = page.getByRole('textbox').nth(8);
        this.primaryAddressStreet = page.getByRole('textbox').nth(9);
        this.primaryAddressPostalcode = page.getByRole('textbox').nth(10);
        
        this.emailAddress = page.getByLabel('Email Address');
        this.primaryEmail = page.getByLabel('Primary');
        this.optOut = page.getByLabel('Opt Out');
        this.invalidEmail = page.getByLabel('Invalid');


        this.primaryAddressCity = page.getByRole('textbox').nth(11);
        this.primaryAddressState = page.getByRole('textbox').nth(12);
        this.primaryAddressCountry = page.getByRole('textbox').nth(13);

        this.altAddressStreet = page.getByRole('textbox').nth(14);
        this.altAddressPostalcode = page.getByRole('textbox').nth(15);
        this.altAddressCity = page.getByLabel('Alt Address City');
        this.altAddressState = page.getByLabel('Alt Address State');
        this.altAddressCountry = page.getByLabel('Alt Address Country');

        this.description = page.getByLabel('Description');

        this.saveButton = page.getByRole('button', { name: 'Save' });
        this.cancelButton = page.getByRole('button', { name: 'Cancel' });
    }

    async hoverOverLeadsMenu() {
        await this.leadsMenu.hover();
    }

    async openCreateLead() {
        await this.createLead.click();
    }

    async selectTitle(title) {
        await this.title.selectOption({ label: title });
    }

    async enterFName(firstName) {
        await this.firstName.fill(firstName);

    }
    async enterLName(lastName){
        await this.lastName.fill(lastName);
    }

    async enterJobDetails(jobTitle, department, accountName) {
        await this.jobTitle.fill(jobTitle);
        await this.department.fill(department);
        await this.accountName.fill(accountName);
    }

    async enterContactDetails(mobile, officePhone, website) {
        await this.mobile.fill(mobile);
        await this.officePhone.fill(officePhone);
        await this.website.fill(website);
    }

    async enterEmail(email) {
        await this.emailAddress.fill(email);
    }

    async selectPrimaryEmail() {
        await this.primaryEmail.check();
    }

    async selectOptOut() {
        await this.optOut.check();
    }

    async markEmailInvalid() {
        await this.invalidEmail.check();
    }

    async enterPrimaryAddress(street, postalcode, city, state, country) {
        await this.primaryAddressStreet.fill(street);
        await this.primaryAddressPostalcode.fill(postalcode);
        await this.primaryAddressCity.fill(city);
        await this.primaryAddressState.fill(state);
        await this.primaryAddressCountry.fill(country);
    }

    async enterAlternateAddress(street, postalcode, city, state, country) {
        await this.altAddressStreet.fill(street);
        await this.altAddressPostalcode.fill(postalcode);
        await this.altAddressCity.fill(city);
        await this.altAddressState.fill(state);
        await this.altAddressCountry.fill(country);
    }

    async enterDescription(description) {
        await this.description.fill(description);
    }

    async saveLead() {
        await this.saveButton.click();
       
    }

    async cancelLead() {
        await this.cancelButton.click();
    }
}

module.exports = { LeadsPage };