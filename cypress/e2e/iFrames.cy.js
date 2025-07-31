import 'cypress-iframe'

describe('dealing iframes', ()=>{
    it('approach 1', ()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        const iframe =  cy.get('iframe#mce_0_ifr')
                        .its('0.contentDocumennt.body')
                        .should('be.visible')
                        .then(cy.wrap);
            iframe.clear().type('welcome {ctrl a}')
        cy.get('span.tox-icon>svg').click()
    })

    it('approach 2 - using custom command', ()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')

        cy.getFrame('iframe#mce_0_ifr').clear().type('welcome {ctrl a}')
        cy.get('span.tox-icon>svg').click()
    })

    it('approach 3- cypress iframe pluggin', ()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.frameLoaded('iframe#mce_0_ifr')
        cy.iframe().clear().type('welcome {ctrl a}')

    })
})      