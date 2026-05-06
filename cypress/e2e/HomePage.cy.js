/// <reference types="cypress" />
/// <reference path="../support/index.d.ts" />

beforeEach('open Application', () => {
    cy.LoginToApp()
})

it('Select Product', () => {
    cy.contains('Product').should('be.visible').click()

    cy.contains('Kéwi bags').should('be.visible').click()

    cy.get('[placeholder="Search in this category..."]')
      .should('be.visible')
      .click()
      .type('COACH TOTEBAG')

    cy.contains('h3', 'COACH TOTEBAG')
      .should('be.visible')
      .click()

    cy.contains('COACH TOTEBAG').should('be.visible')
    cy.contains('button', 'Add to Cart')
      .should('be.visible')
      .and('be.enabled')
      .click()


    cy.AddToCart()
})