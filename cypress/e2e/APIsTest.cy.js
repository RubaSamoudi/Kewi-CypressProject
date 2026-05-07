/// <reference types="cypress" />
/// <reference path="../support/index.d.ts" />


it('ADDitem', () => {
     cy.visit('/')
     cy.contains('a','Products').click()
    cy.intercept('GET', '**/products', { fixture: 'products.json' })
    cy.intercept('GET', '**/categories*', { fixture: 'categories.json' })
    
});

