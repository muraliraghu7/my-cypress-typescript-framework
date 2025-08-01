import { LoginPage } from '../pages/LoginPage';

const loginPage = new LoginPage();

describe('Login Test', () => {
    beforeEach(function () {
        cy.fixture('user').then((data) => {
            this.user = data;  // save fixture data to test context
        });
    });
    it('should login', function () {
        loginPage.visit();
        loginPage.fillUsername(this.user?.username);
        loginPage.fillPassword(this.user?.password);
        loginPage.submit();
        cy.contains('You logged into a secure area!').should('be.visible');
    });
});
