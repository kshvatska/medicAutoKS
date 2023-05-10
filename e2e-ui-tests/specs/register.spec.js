const { test, expect, request } = require('@playwright/test');
const { RegisterPage } = require('../pages/registerPage');
const { users } = require('../../test-data/users');
const { userData } = require('../../test-data/data');
const config = require("../../playwright.config");

const user = users[config.default.use.env].user

let registerPage;
const env = config.default.use.env;


test.describe('Register tests', () => {

    test.beforeEach(async ({ page }) => {
        registerPage = new RegisterPage(page);
        await registerPage.open();
    });
    
    test.only('Register with valid data', async ({ page }) => {
        await registerPage.register(userData.generatedFullName, userData.generatedEmail, userData.password);
        await expect(page).toHaveURL('http://omega-stage.qa.nolimit.school/sign-in');
    });

    test('Open Sign In Page', async ({ page }) => {
        await registerPage.openSignInPage();
        await expect(page).toHaveURL('http://omega-stage.qa.nolimit.school/sign-in');
    });

})

    