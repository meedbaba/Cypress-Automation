describe('first_test', () => {
  
  it('orange_test pos', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.title().should('eq', 'OrangeHRM')
  })

  it('orange_test neg', function() {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.title().should('eq', 'orange1233')
  }

  )
})