describe('Teste de Login', () => {
  it('Login com falha', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('123')
    cy.get('[data-test="login-button"]').click()
    cy.get('h3').contains('Epic sadface: Username and password do not match any user in this service')
  })

  it('Login com sucesso', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="title"]').contains('Products')
  })
})