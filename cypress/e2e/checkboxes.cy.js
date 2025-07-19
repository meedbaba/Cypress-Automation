describe("checkboxes and Radios", ()=> {
    it("verify_radio_button", ()=> {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("input#male").should("exist")
        cy.get("#male").should("be.visible")
        cy.get("input#male").check().should("be.checked")
        cy.get("input#female").should("be.visible")
        cy.get("input#female").check().should("be.checked")
        cy.get("input#male").should("not.be.checked")
    })

    it("verify_checkboxes", ()=> {
        cy.visit("https://testautomationpractice.blogspot.com/")
        //individual checks
        cy.get('#sunday').should("exist")
        cy.get("#monday").check().should("be.checked")
        cy.get("#sunday").check().should("be.checked")
        cy.get("#tuesday").should("not.be.checked")
        //individual unchecks
        cy.get("#sunday").uncheck().should("not.be.checked")
        cy.get("#monday").uncheck().should("not.be.checked")
        //multiple checks
        cy.get("input.form-check-input[type='checkbox']").should('have.length', 7)
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')
        cy.get("input.form-check-input[type='checkbox']").first().check()
        cy.get("#sunday").should("be.checked")
    })
})