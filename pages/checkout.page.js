export class CheckoutPage {
    
    checkout(firstName, lastName, postalCode) {
        this.getFirstNameInput().type(firstName)
        this.getLastNameInput().type(lastName)
        this.getPostalCodeInput().type(postalCode)
        this.getContinueCheckoutButton().click()
        this.getFinishCheckoutButton().click()
    }

    getFirstNameInput() {
        return cy.get('[data-test="firstName"]')
    }

    getLastNameInput() {
        return cy.get('[data-test="lastName"]')
    }

    getPostalCodeInput() {
        return cy.get('[data-test="postalCode"]')
    }

    getContinueCheckoutButton() {
        return cy.get('[data-test="continue"]')
    }

    getFinishCheckoutButton() {
        return cy.get('[data-test="finish"]')
    }

    getCompleteOrderTitle() {
        return cy.get('.complete-header').contains('THANK YOU FOR YOUR ORDER')
    }

    getBackHomeButton() {
        return cy.get('[data-test="back-to-products"]')
    }
}