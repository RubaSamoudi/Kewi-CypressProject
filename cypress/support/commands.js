// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('LoginToApp', () => { 
    cy.session('user',()=>{
        cy.visit('/')
        cy.get('button').find('svg.lucide-user').parent('button').click()
        cy.get('[placeholder="Enter your phone number"]').type('+972595709083')
        cy.get('[placeholder="Enter your password"]').type('12345678900#')
        cy.contains('button','Login').click()
    })
cy.visit('/')
 })
 Cypress.Commands.add('AddToCart',()=>{
    cy.get('button').find('svg.lucide-shopping-cart').first().parent('button').click()
    cy.contains('button','Checkout').click()
    cy.get('#name').type('Roba')
    cy.get('#phone').type('+972595709083')
    cy.get('#city').type('Jenin')
    cy.contains('Region').parent().find('select')
    .select('West Bank')  



 })