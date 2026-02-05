/// <reference types="cypress" />

const { email, senha } = require('../fixtures/data.json')
const { profilePage } = require("../support/pages/profile.page.js")
const { homePage } = require("../support/pages/home.page.js");

describe('Teste de Autenticação', () => {

  beforeEach(() => {
    cy.login(email, senha)

  })

  it('categories should be visible', () => {
    cy.intercept('GET', '**/public/getCategories', {fixture: 'categories.json'})
    homePage.openSearchProduct()
    homePage.openCategoriesFilter()
    homePage.categories().should('have.lengh.greaterThan', 1)
  })
    it('categories should be empty', () => {
    cy.intercept('GET', '**/public/getCategories', {fixture: 'noCategories.json'}).as('getCategoriesEmpty')
    homePage.openSearchProduct()
    homePage.openCategoriesFilter()
    homePage.categories().should('have.lengh.greaterThan', 1)
  })
})