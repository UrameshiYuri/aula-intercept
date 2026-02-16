// /// <reference types="cypress" />

// const { email, senha } = require('../fixtures/data.json')
// const { homePage } = require("../support/pages/home.page.js");

// describe('Environment Variables', () => {

//     beforeEach(() => {
//         cy.setCookie('ebacStoreVersion', Cypress.env('ebacStoreVersion'), { domain: 'lojaebac.ebaconline.art.br' })

//         cy.fixture(`${Cypress.env("MY_ENV")}/data.json`).then((data) => {
//             cy.log(data.email)
//         })

//     })

//     it('Deafault Env', () => {
//         cy.log(Cypress.env('MY_ENV'))
//         cy.log(Cypress.env('ebacStoreVersion'))
//         cy.wait(10000)
//         cy.visit("/")
//     })
//     it('Config test Env', {
//         env: {
//             MY_ENV: "local"
//         }
//     }, () => {
//         cy.log(Cypress.env('MY_ENV'))
//     })

// })