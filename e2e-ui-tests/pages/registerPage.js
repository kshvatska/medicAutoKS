const { BasePage } = require("./basePage");
exports.RegisterPage = class RegisterPage extends BasePage {

    constructor(page) {
        super(page, '/sign-up');
        this.fullName = page.locator("[placeholder='Full name']");
        this.emailAddress = page.locator("[placeholder='Email address']");
        this.password = page.locator("[placeholder='Password']");
        this.registerButton = page.getByRole('button');
        this.signInLink = page.locator("[href='/sign-in']");
    }

    async register(userFullName, userEmail, userPassword) {
        await this.fullName.type(userFullName);
        await this.emailAddress.type(userEmail);
        await this.password.type(userPassword);
        await this.registerButton.click();
    }

    async openSignInPage() {
        await this.signInLink.click();
    }



}