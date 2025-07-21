
describe("dropdowns", ()=>{
    it.skip("Select     dropdown", function(){
        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get("#zcf_address_country").select("Guam")
        cy.get("#zcf_address_country").should("have.value", 'Guam')
    })

    it.skip("bootstrap dropdown", ()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get("#select2-billing_state-container").click()
        cy.get("input.select2-search__field").type("nasa{enter}")
        cy.get("#select2-billing_state-container").should("have.text",'Nasarawa')
    })

    it.skip("auto_suggested dropdown", ()=>{
        cy.visit("https://www.wikipedia.org/")
        cy.get("input#searchInput").click().type("delh")
        cy.get(".suggestion-link").should('have.length',6)
        cy.get(".suggestion-link").contains('Delhi University').click()
        cy.origin('https://en.wikipedia.org', ()=>{
            cy.get(".mw-page-title-main").contains('Delhi University')
            cy.url().should('include', 'Delhi_University')
        })
    })

    it('dynamic dropdown', ()=>{
        cy.visit('https://www.google.com/')
        cy.get('.gLFyf[jsname="yZiJbe"]').type('cypress auto')
        cy.get('ul.G43f7e[jsname="bw4e9b"]>li').should('have.length', 10)
        cy.wait(5000)
        cy.get('div.wM6W7d>span').each(($el, index, $list)=>{
            if($el.text() == 'cypress automation tutorial')
            {
                cy.wrap($el).click()
            }
        })
        cy.get('textarea.gLFyf').should('have.text', 'cypress automation tutorial')
    })
})