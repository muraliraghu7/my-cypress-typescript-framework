export class LoginPage {
  visit() {
    cy.visit('/login');
  }
  fillUsername(username: string) {
    cy.get('#username').type(username);
  }
  fillPassword(password: string) {
    cy.get('#password').type(password);
  }
  submit() {
    cy.get('button[type=submit]').click();
  }
}
