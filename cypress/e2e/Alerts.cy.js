describe('Alerts',()=>{
    //normal Alert
    it.skip('Normal alert', function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsAlert()"]').click()
        cy.on('window:alert', (x)=>{
            expect(x).to.contains('I am a JS Alert')
        })
        cy.get('p#result').should('have.text', 'You successfully clicked an alert')
    })

    //confirmation Alert
    it('confirmation alert', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsConfirm()"]').click()
        cy.on('window:confirm', (y)=>{
            expect(y).to.contains('I am a JS Confirm')
        })
        
        cy.on('window:confirm', ()=>false)

        cy.get('p#result').should('have.contain', 'Cancel')

    } )
    //Javascript prompt Alert

    it('prompt Alerts', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('Namaste')
        })

        cy.get('button[onclick="jsPrompt()"]').click()
        cy.get('p#result').should('have.contain', 'Namaste')
    })

    //Authenticated alert parsing into the cy.visit method

    it('Authenticated Alert 1', ()=>{
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {auth:{
                                                                    username:'admin',
                                                                    password:'admin'
                                                                        }
                                                                    })
        cy.get('div.example>p').should('have.contain','Congratulations!')
    })

    //Authenticated alert injecting it to the URL

    it('Authenticated Alert 2', ()=>{
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get('div.example>p').should('have.contain','Congratulations!')
    })
})

