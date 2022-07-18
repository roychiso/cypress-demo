import { onProductPage } from '../support/pages_objects/productPage'
import { onHomePage } from '../support/pages_objects/homePage'
import { onCartPage } from '../support/pages_objects/cartPage'
import { navigateTo } from '../support/pages_objects//navigationPage'

describe('Product Details Page tests', () => {
  beforeEach('Code for every test', () => {
    cy.visit('/')
    onHomePage.selectFirstProduct()
    onProductPage.clickAddToCart()
    navigateTo.clickCartOption()
  })

  it.only('Validate Product is added into the car', () => {
    onCartPage.validateListSize(1)
  })
})
