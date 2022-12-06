export class ShoppingCartPage {
    
    getCheckoutButton() {
        return cy.get('[data-test="checkout"]')
    }
}