import { onHomePage } from '../support/pages_objects/homePage'
import { onProductPage } from '../support/pages_objects/productPage'

describe('Product Details Page tests', () => {
  beforeEach('Code for every test', () => {
    cy.visit('/')
    onHomePage.selectFirstProduct()
  })

  it('Validate Texts in the page', () => {
    // Different types of validations
    onProductPage.getName().should('contain', 'Samsung galaxy s6')

    onProductPage.getPrice().then((label) => {
      expect(label.text()).to.contains('$360')
    })

    expect(onProductPage.getDescription).to.exist
  })
})
