/// <reference types="cypress" />
/// <reference path="../support/index.d.ts" />

beforeEach('open Applicaton',()=>{
    cy.LoginToApp()
})
it('ADDitem', () => {
    cy.intercept('GET', '**/products', { fixture: 'products.json' })
    cy.intercept('GET', '**/categories*', { fixture: 'categories.json' })
});
