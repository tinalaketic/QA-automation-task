import { LoginPage } from "../../pages/login.page"
import { DashboardPage} from "../../pages/dashboard.page"
import { ShoppingCartPage } from "../../pages/shoppingCart.page"
import { CheckoutPage } from "../../pages/checkout.page"

describe('Swag labs app testing', function() {

    beforeEach(function() {
        this.loginPage = new LoginPage()
        this.dashboardPage = new DashboardPage()
        this.shoppingCartPage = new ShoppingCartPage()
        this.checkoutPage = new CheckoutPage()
        cy.fixture('login.json').as('loginData')
        cy.fixture('checkout.json').as('checkoutData')
        this.loginPage.visit()
    })

    it('should login successfully as standard_user', function() {

        // Login as standard_user 
        this.loginPage.login(this.loginData.standardUserUsername, this.loginData.password)

        // Assert that user is successfully logged in
        this.dashboardPage.getShoppingCartButton().should('be.visible')

        // Logout
        // * This wait is added because burger menu takes some time to fully load, so test can fail without it *
        cy.wait(1000)
        this.dashboardPage.logout()
    })

    it('should login successfully as performance_glitch_user', function() {

        // Login as performance_glitch_user
        this.loginPage.login(this.loginData.performanceGlitchUserUsername, this.loginData.password)

        // Assert that user is successfully logged in
        this.dashboardPage.getShoppingCartButton().should('be.visible')

        // Logout
        // * This wait is added because burger menu takes some time to fully load, so test can fail without it 
        cy.wait(1000)
        this.dashboardPage.logout()
    })

    it('should try to login with invalid credentials', function() {

        const invalidUsername = 'invalid_username'
        const invalidPassword = 'invalid_password'

        // Try to login with invalid credentials
        this.loginPage.login(invalidUsername, invalidPassword)

        // Assert that error message is visible
        this.loginPage.getErrorMessageLabel().should('be.visible')
    })

    it('should add the most exspensive product to cart and successfully checkout as standard_user', function() {
     
        // Login as standard_user
        this.loginPage.login(this.loginData.standardUserUsername, this.loginData.password)

        // Assert that user is successfully logged in
        this.dashboardPage.getShoppingCartButton().should('be.visible')

        // Adding the most exspensive product to cart
        this.dashboardPage.selectSortHighToLow()
        this.dashboardPage.addFirstProductToCart()

        // Complete the checkout 
        this.dashboardPage.clickOnShoppingCartButton()
        this.shoppingCartPage.getCheckoutButton().click()
        this.checkoutPage.checkout(this.checkoutData.firstName, this.checkoutData.lastName, this.checkoutData.postalCode)

        // Assert that checkout proccess is successfully completed
        this.checkoutPage.getCompleteOrderTitle().should('be.visible')

        // Logout
        this.checkoutPage.getBackHomeButton().click()
        this.dashboardPage.logout()
    })

    it('should add the most exspensive product to cart and successfully checkout as performance_glitch_user', function() {
     
        // Login as performance_glitch_user 
        this.loginPage.login(this.loginData.performanceGlitchUserUsername, this.loginData.password)

        // Assert that user is successfully logged in
        this.dashboardPage.getShoppingCartButton().should('be.visible')

        // Adding the most exspensive product to cart
        this.dashboardPage.selectSortHighToLow()
        this.dashboardPage.addFirstProductToCart()

        // Complete the checkout 
        this.dashboardPage.clickOnShoppingCartButton()
        this.shoppingCartPage.getCheckoutButton().click()
        this.checkoutPage.checkout(this.checkoutData.firstName, this.checkoutData.lastName, this.checkoutData.postalCode)

        // Assert that checkout proccess is successfully completed
        this.checkoutPage.getCompleteOrderTitle().should('be.visible')

        // Logout
        this.checkoutPage.getBackHomeButton().click()
        this.dashboardPage.logout()
    })

    it('should add the cheapest product to cart and successfully checkout as standard_user', function() {
     
        // Login as standard_user
        this.loginPage.login(this.loginData.standardUserUsername, this.loginData.password)

        // Assert that user is successfully logged in
        this.dashboardPage.getShoppingCartButton().should('be.visible')

        // Adding the cheapest product to cart
        this.dashboardPage.selectSortLowToHigh()
        this.dashboardPage.addFirstProductToCart()

        // Complete the checkout 
        this.dashboardPage.clickOnShoppingCartButton()
        this.shoppingCartPage.getCheckoutButton().click()
        this.checkoutPage.checkout(this.checkoutData.firstName, this.checkoutData.lastName, this.checkoutData.postalCode)

        // Assert that checkout proccess is successfully completed
        this.checkoutPage.getCompleteOrderTitle().should('be.visible')

        // Logout
        this.checkoutPage.getBackHomeButton().click()
        this.dashboardPage.logout()
    })

    it('should add the cheapest product to cart and successfully checkout as performance_glitch_user', function() {
     
        // Login as performance_glitch_user
        this.loginPage.login(this.loginData.performanceGlitchUserUsername, this.loginData.password)

        // Assert that user is successfully logged in
        this.dashboardPage.getShoppingCartButton().should('be.visible')

        // Adding the cheapest product to cart
        this.dashboardPage.selectSortLowToHigh()
        this.dashboardPage.addFirstProductToCart()

        // Complete the checkout 
        this.dashboardPage.clickOnShoppingCartButton()
        this.shoppingCartPage.getCheckoutButton().click()
        this.checkoutPage.checkout(this.checkoutData.firstName, this.checkoutData.lastName, this.checkoutData.postalCode)

        // Assert that checkout proccess is successfully completed
        this.checkoutPage.getCompleteOrderTitle().should('be.visible')

        // Logout
        this.checkoutPage.getBackHomeButton().click()
        this.dashboardPage.logout()
    })

    it('should logout as standard_user', function() {

        // Login as standard_user
        this.loginPage.login(this.loginData.standardUserUsername, this.loginData.password)

        // Assert that user is sucessfully logged im
        this.dashboardPage.getShoppingCartButton().should('be.visible')

        // Logout
        // * This wait is added because burger menu takes some time to fully load, so test can fail without it *
        cy.wait(1000)
        this.dashboardPage.logout()

        // Assert that user is succesfully logged out
        this.loginPage.getUsernameInput().should('be.visible')
    })

})