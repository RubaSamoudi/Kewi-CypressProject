/// <reference types="cypress" />
/// <reference path="../support/index.d.ts" />

beforeEach('open Application', () => {
    cy.LoginToApp()
})
it('Multi Product Order', () => {
    cy.contains('Product').should('be.visible').click()

    cy.contains('Kéwi bags').should('be.visible').click()
    cy.get('[placeholder="Search in this category..."]')
      .should('be.visible')
      .click()
      .type('Lady Dior')
      cy.contains('h3', 'Lady Dior').first()
      .should('be.visible').click()
      cy.contains('button', 'Add to Cart')
      .should('be.visible')
      .and('be.enabled')
      .click()
cy.contains('button', 'Back to Products').click()
 cy.contains('span','Kéwi wallets').click()
  cy.contains('h3', 'LV wallet 12').click()
  cy.contains('button', 'Add to Cart')
      .should('be.visible')
      .and('be.enabled')
      .click()
      
cy.AddToCart()
    
    
});