export class ProductPage {
  name = '[class=name]'
  price = '[class=price-container]'
  productDescription = '#more-information > p'
  addToCart = '[class="btn btn-success btn-lg"]'

  getName() {
    return cy.get(this.name)
  }

  getPrice() {
    return cy.get(this.price)
  }

  getDescription() {
    return cy.get(this.description)
  }ß

  getAddToCartButton() {
    return cy.get(this.addToCart)
  }

  clickAddToCart() {
    this.getAddToCartButton().click()
  }
}

export const onProductPage = new ProductPage()
