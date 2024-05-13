describe('Test Suite - Orange HRM', () => {

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })

  it('Logo principal visible', () => {
    cy.get('.orangehrm-login-branding > img').should('be.visible')
  })

  it('"txtUsername" visible', () => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
  })

  it('Version de la pagina visible', () => {
    cy.get('.orangehrm-copyright-wrapper > :nth-child(1)').should('be.visible')
  })

  it('boton de login visible', () => {
    cy.get('.oxd-button').should('be.visible')
  })
})