export class DashboardPage {

    logout() {
        this.getBurgerMenuButton().click()
        this.getLogoutButton().click()
    }

    getBurgerMenuButton() {
        return cy.get('#react-burger-menu-btn')
    }

    getLogoutButton() {
        return cy.get('#logout_sidebar_link')
    }
    
    getShoppingCartButton() {
        return cy.get('.shopping_cart_link')
    }

    selectSortHighToLow() {
        return cy.get('[data-test="product_sort_container"]').select('hilo')
    }

    selectSortLowToHigh() {
        return cy.get('[data-test="product_sort_container"]').select('lohi')
    }

    addFirstProductToCart() {
        return cy.get('.btn').contains('Add to cart').first().click()
    }

    clickOnShoppingCartButton() {
        return cy.get('.shopping_cart_link').click()
    }
}