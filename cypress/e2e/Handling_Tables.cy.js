describe('Handling tables', ()=>{
    beforeEach('login', ()=>{
        cy.visit('https://demo.opencart.com/') //login
        cy.get('input#input-username').type('demo')
        cy.get('#input-password').type('demo')
        cy.get('button[type="submit"]').click()
        
        //naviagte to customer table
        cy.get('li#menu-customer').click() 
        cy.get('ul#collapse-5>li:first-child').click()
    })

    it('validate no of rows and columns', ()=>{
        cy.get('tbody>tr').should('have.length', 10)
        cy.get('thead>tr>td').should('have.length', 6)
    })

    it('check cell data from specific row&column', ()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(2)>td:nth-child(3)")
            .should("have.text", '!121@gmail.com')
    })

    it('read all row and column data from current page', ()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
        .each(($row, index, $rows)=>{
            cy.wrap($row).within(()=>{
                cy.get('td').each(($col, index, $cols)=>{
                    cy.log($col.text())
                })
            })
        })
    })

    it('pagination', ()=>{
        //get total number of pages
        let totalPages
        cy.get('div.col-sm-6.text-end').then((n)=>{
            let p_text = n.text()
            totalPages = p_text.substring(p_text.indexOf('(')+1, p_text.indexOf('Pages')-1)
        })
        //use for loop to iterate through number of pages
        for(let p=1;p<=totalPages;p++){
            //set a condtion to execute only when totalpage is more than one
            if(totalPages>1){
                cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                .each(($row, index, $rows)=>{
                    cy.wrap($row).within(()=>{
                        cy.get('td:nth-child(3)').then((e)=>{
                            cy.log(e.text());
                        })
                    })
                })
            }
        }

    })

    
})
