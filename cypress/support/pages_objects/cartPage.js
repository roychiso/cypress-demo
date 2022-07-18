export class CartPage {
  listOfProducts = '#tbodyid > tr'

  validateListSize(number) {
    cy.get(this.listOfProducts).should('have.length', number)
  }
}

export const onCartPage = new CartPage()
