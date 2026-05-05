/// <reference types="cypress" />
/// <reference path="../support/index.d.ts" />

beforeEach('open Applicaton',()=>{
    cy.LoginToApp()
})
it('Select Product',()=>{
    cy.contains('Product').click()
    cy.contains('Kéwi bags').click()
    //cy.contains('button', 'All brands').click()

    //cy.get('[role="listbox"]').contains('Chanel').click()
       


   // cy.contains('button', 'All brands').should('contain.text', 'Chanel')
   cy.get('[placeholder="Search in this category..."]').click().type('COACH TOTEBAG')
   cy.contains('h3','COACH TOTEBAG').click()
   cy.contains('button','Add to Cart').click()
   cy.AddToCart()
   


     




    


    


})
