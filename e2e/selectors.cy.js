describe('css_selector', function() {
    
    it("selector1", ()=>{
        cy.visit('https://www.amazon.com')
        cy.get('input#twotabsearchtextbox').type('t-shirt')
        cy.get('#nav-search-submit-button').click()
        cy.get('.a-color-state').contains('"t-shirt"')
    })
}

)