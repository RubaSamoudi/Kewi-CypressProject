/// <reference types="cypress" />
beforeEach('open Applicaton',()=>{
    cy.LoginToApp()
})
it('Select Product',()=>{
    cy.contains('Product').click()
    cy.contains('Kéwi bags').click()
    //cy.contains('button', 'All brands').click()

    //cy.get('[role="listbox"]').contains('Chanel').click()
       

   // cy.contains('button', 'All brands').should('contain.text', 'Chanel')
   cy.contains('h3','COACH TOTEBAG').click()

     




    


    


})
