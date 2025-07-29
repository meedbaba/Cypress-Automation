describe('Handling Tabs', ()=>{

    it('Approach 1', ()=>{
        cy.visit('https://the-internet.herokuapp.com/windows');
        cy.get('div.example>a').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')
        cy.go('back')
    })

    it('Approach 2', ()=>{
        cy.visit('https://the-internet.herokuapp.com/windows');
        cy.get('div.example>a').then((x)=>{
            let url = x.prop('href')
            cy.visit(url)
            cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')
            cy.go('back')
        })
    })
})