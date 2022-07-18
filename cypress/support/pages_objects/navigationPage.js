export class NavigationPage {
  homeMenu = 'a[href="index.html"]:first-child'
  contactMenu = 'a[data-target="#exampleModal"]'
  aboutUsMenu = 'a[data-target="#videoModal"]'
  cartMenu = 'a[a[onclick="showcart()"]"]'
  loginMenu = '#login2'
  signUp = '#signin2'

  getHome() {
    return cy.get(this.homeMenu)
  }

  getContact() {
    return cy.get(this.contactMenu)
  }

  getAboutUs() {
    return cy.get(this.aboutUsMenu)
  }

  getCart() {
    return cy.get(this.cartMenu)
  }

  getLogin() {
    return cy.get(this.loginMenu)
  }

  getSignUp() {
    return cy.get(this.signUp)
  }

  clickHomeOption() {
    this.getHome().click()
  }

  clickContactOption() {
    this.getContact.click()
  }

  clickAboutUsOption() {
    this.getAboutUs.click()
  }

  clickCartOption() {
    cy.contains('Cart').click()
  }

  clickLogInOption() {
    this.getLogin.click()
  }

  clickSignUpOption() {
    this.getSignUp.click()
  }
}

export const navigateTo = new NavigationPage()
