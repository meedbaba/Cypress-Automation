describe('Explicit_Assertions', ()=>{
    it('Verify_profile_name', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.xpath("//button[normalize-space()='Login']").click()
        
        let Not_expName = 'Kuwait'
        let expName = 'Nikita01 Ganvir01'
        //get actual name and store in the variable actName:
        cy.get('.oxd-userdropdown-name').then((x)=>{
            let actName = x.text()
            
            //BDD Assertions
            expect(expName).to.equal(actName)
            expect(Not_expName).to.not.equal(actName)

            //TDD Assertions
            assert.equal(expName,actName)
            assert.notEqual(Not_expName,actName)
        })

    })
})