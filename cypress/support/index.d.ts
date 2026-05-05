declare namespace Cypress {
    interface Chainable {
        /**
         * Custom command to login to the application
         * @example cy.LoginToApp()
         */
        LoginToApp(): Chainable<void>

        /**
         * Custom command to add product to cart and place order
         * @example cy.AddToCart()
         */
        AddToCart(): Chainable<void>
    }
}