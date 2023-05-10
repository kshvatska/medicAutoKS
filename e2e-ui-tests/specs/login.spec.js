const { test, expect, request } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
//const { userData } = require('../../test-data/data');
const config = require("../../playwright.config");
const { users } = require('../../test-data/users');

const user = users[config.default.use.env].user;

let loginPage;
const env = config.default.use.env;



test.describe('Login tests', () => {

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.open();
    });

    test.only('Login with valid data as user', async ({ page }) => {
        await loginPage.login(user.email, user.password);
        //await expect(page.locator("[class='logo']")).toBeVisible;
        await expect(page).toHaveURL('http://omega-stage.qa.nolimit.school/vertical/default-dashboard');
    }); 

    test('Open Sign Up Page', async ({ page }) => {
        await loginPage.openSignUpPage();
        await expect(page).toHaveURL('http://omega-stage.qa.nolimit.school/sign-up');
    });

});

