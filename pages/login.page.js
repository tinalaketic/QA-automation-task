export class LoginPage {

    visit() {
        cy.visit('/') 
    }

    login(username, password) {
        this.getUsernameInput().type(username)
        this.getPasswordInput().type(password)
        this.getLoginButton().click()
    }

    getUsernameInput() {
        return cy.get('[data-test="username"]')
    }

    getPasswordInput(password) {
        return cy.get('[data-test="password"]')
    }

    getLoginButton() {
        return cy.get('[data-test="login-button"]')
    }

    getErrorMessageLabel() {
        return cy.get('[data-test="error"]')
    }
}