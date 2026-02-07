import { homePage } from "../pages/home.page"
import { loginPage } from '../pages'

Cypress.Commands.add('login', (email, senha) => {
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
    cy.visit("/")
    cy.wait(10000)
    homePage.openMenu('Account')
    loginPage.login(email, senha)
    //homePage.openMenu('Account')
})
