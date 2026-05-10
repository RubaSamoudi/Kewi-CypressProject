/// <reference types="cypress" />
/// <reference path="../support/index.d.ts" />
const testData = [
  {
    phone: '0555',
    isValid: false,
    description: 'invalid phone - less than 10 digits'
  },
  {
    phone: '0599353520',
    isValid: true,
    description: 'valid phone - 10 digits'
  }
]
testData.forEach(data =>{
    it('Sign Up', () => {
        cy.visit('/')
        cy.get('button').find('svg.lucide-user').parent('button').click()
        cy.contains('a','Sign Up').click()
        cy.get('[placeholder="Enter your username"]').type('Roba')
        cy.get('[placeholder="Enter your phone number"]').type(data.phone)
        cy.get('[placeholder="Enter your password"]').type(Cypress.env('PASSWORD'))
        cy.contains('button','Sign Up').click()
        if (data.isValid) {
      cy.contains('shorter than the minimum allowed length').should('not.exist')
    } else {
      cy.contains('shorter than the minimum allowed length').should('be.visible')
    }
    })
        
})