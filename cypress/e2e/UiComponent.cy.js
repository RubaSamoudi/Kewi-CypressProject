/// <reference types="cypress" />
/// <reference path="../support/index.d.ts" />
beforeEach('open Applicaton',()=>{
    cy.LoginToApp()
})


it('Check Navigation Links', () => {
    const navLinks = [
        { name: 'Home',     tag: 'a'      },
        { name: 'Products', tag: 'a'      },
        { name: 'Orders',   tag: 'button' },
        { name: 'About',    tag: 'a'      },
    ]

    navLinks.forEach(link => {
        cy.visit('/')                          
        cy.contains(link.tag, link.name)
        
          .click()
    })
})
it('Products categories', () => {
    cy.contains('Product').click()
    cy.contains('span','Kéwi wallets').click()
    
});
it('Wallets Categories', () => {
    cy.contains('Product').click()
    cy.contains('span','Kéwi wallets').click()
    
    cy.get('button[role="combobox"]').first().click()
    cy.get('[role="option"]').contains('Medium').click()
    cy.get('button[role="combobox"]').first()
      .find('span')
      .should('contain.text', 'Medium')
});
