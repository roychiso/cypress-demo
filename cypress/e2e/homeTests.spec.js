import { navigateTo } from '../support/pages_objects/navigationPage'
import { onHomePage } from '../support/pages_objects/homePage'

describe('Home Tests', () => {
  beforeEach('Code for every test', () => {
    cy.visit('/')
  })

  it('Verify Home Link', () => {
    navigateTo.clickHomeOption()
    cy.url().should('include', '/index.html')
  })

  it('Verify Navigation Menu is displayed', () => {
    expect(navigateTo.getHome).to.exist
    expect(navigateTo.getContact).to.exist
    expect(navigateTo.getAboutUs).to.exist
    expect(navigateTo.getCart).to.exist
    expect(navigateTo.getLogin).to.exist
    expect(navigateTo.getSignUp).to.exist
  })

  it('Verify Phones Category', () => {
    expect(onHomePage.getPhonesCategory()).to.exist
    onHomePage.clickPhonesCategory()
    onHomePage.validateListSize(7)
  })

  it('Verify Laptops Category', () => {
    expect(onHomePage.getLaptopsCategory()).to.exist
    onHomePage.clickLaptopsCategory()
    onHomePage.validateListSize(6)
  })

  it('Verify Monitors Category', () => {
    expect(onHomePage.getMonitorsCategory()).to.exist
    onHomePage.clickMonitorsCategory()
    onHomePage.validateListSize(2)
  })
})
