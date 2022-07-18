export class HomePage {
  phonesCategory = '[class=list-group-item]:nth-child(2)'
  laptopsCategory = '[class=list-group-item]:nth-child(3)'
  monitorsCategory = '[class=list-group-item]:nth-child(4)'
  carousel = 'div[class=carousel-inner]'
  listOfProducts = '#tbodyid > div'

  getPhonesCategory() {
    return cy.get(this.phonesCategory)
  }

  getLaptopsCategory() {
    return cy.get(this.laptopsCategory)
  }

  getMonitorsCategory() {
    return cy.get(this.monitorsCategory)
  }

  getListOfProducts() {
    return cy.get(this.listOfProducts)
  }

  clickPhonesCategory() {
    this.getPhonesCategory().click()
  }

  clickLaptopsCategory() {
    this.getLaptopsCategory().click()
  }

  clickMonitorsCategory() {
    this.getMonitorsCategory().click()
  }

  validateListSize(number) {
    cy.get(this.listOfProducts).should('have.length', number)
  }

  selectFirstProduct() {
    cy.contains('Samsung galaxy s6').click()
  }
}

export const onHomePage = new HomePage()
