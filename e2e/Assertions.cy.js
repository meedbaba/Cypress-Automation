describe('implicit assertions', () =>{
    cy.visit()
    
    it("verify_url", function() {
        
        cy.url().should('include',"orangehrm")
       .and('not.eq','https://opensource-demo.orangehrmlive.com/')
       .and('contain','opensource-demo')

    }
)
    it('verify_title', ()=>{    

        cy.title().should('eq', 'OrangeHRM')
        .and('not.contain','kuwait')
    }
)
    it('verify_logo', ()=>{
         cy.xpath("//img[@alt='company-branding']").should('be.visible')
        .and("exist")
    }
)
    it('verify_links', () => {
        cy.xpath('//a').should("have.length", 5)
    }
)
    it("verify_input_text", () =>{
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Username']").should("have.value","Admin")
    }
)
}
)