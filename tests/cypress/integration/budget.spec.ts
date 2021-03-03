/// <reference types="cypress" />
/// <reference path="../support/index.d.ts" />

describe('Budget and limits', () => {
  before(() => {
    cy.waitInCIEnv()
  })

  beforeEach(() => {
    cy.deleteMyUserIfExists()
    cy.registerUserbyAPI()
    cy.visit('/')
    cy.manualLogin()
  })

  // it('edits limit with input', () => {
  // })

  it('edits limit with setter (drag and drop)', () => {
    cy.getBySel('limit-button')
      .first()
      .click()
    cy.getBySel('limit-setter')
      .first()
      .then($limit => {
        const limit = $limit.attr('data-value')
        cy.get('.limit[data-automation-id="limit-hover"][data-name="current"]')
          .first()
          .trigger('mouseover')
        cy.getBySel('limit-setter')
          .first()
          .trigger('mousedown', { button: 0 })
          .trigger('mousemove', { clientX: 500 })
          .trigger('mouseup')
          .should('have.attr', 'data-value')
          .and('not.equal', limit)
      })
  })

  it('creates a budget for category', () => {
    cy.getBySel('unbudgeted-categories', { timeout: 80000 }).click()
    cy.contains('Unbudgeted').should('not.exist')
    cy.getBySel('category-title-unbudgeted')
      .contains('Travels')
      .click()
    cy.getBySel('category-title-budgeted')
      .contains('Travels')
      .should('be.visible')
    cy.percySnapshot('new category budget')
  })

  // it('deletes a budget for category', () => {
  // })

  // it('shows a budget info from previous month', () => {
  // })
})
