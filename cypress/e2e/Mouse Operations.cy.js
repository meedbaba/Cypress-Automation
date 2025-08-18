import 'cypress-iframe'
require('@4tw/cypress-drag-drop')
describe('mouse operations', ()=>{

    Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
    });

     it('mouse hover', ()=>{
        cy.visit('https://www.konga.com/?srsltid=AfmBOop8gwh5Ozrd4gSDC7rn7qkj-vuz5evSAsgb_k2MDxFawbofyPuy')
        cy.get('div[class="DesktopNavigation_dropdown__ISRZJ"]>ul>li').should('not.be.visible')
        cy.get('div[class="DesktopNavigation_dropdown__ISRZJ"]>a').trigger('mouseover', {force:true})
        cy.wait(5000)
        cy.get('div[class="DesktopNavigation_dropdown__ISRZJ"]>ul>li').should('be.visible')
     })

     it('right click', ()=>{
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/')
        cy.get('div[class="wy-menu wy-menu-vertical affix"]>ul>li:first-child>ul>li:last-child').click()

        //Approach 1
        //cy.get('span.context-menu-one.btn.btn-neutral').trigger('contextmenu')
        //cy.get('.context-menu-icon-paste > span').should('be.visible');

        //Approach 2
        cy.get('span.context-menu-one.btn.btn-neutral').rightclick()
        cy.get('.context-menu-icon-paste > span').should('be.visible');
     })

     it('Double click', ()=>{
         cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')
         cy.frameLoaded('#iframeResult')
      //Approach 1
         //cy.iframe('#iframeResult').find('button[ondblclick="myFunction()"]').trigger('dblclick')
         //cy.iframe('#iframeResult').find('input#field2').contains('Hello World!')

      //Approach 2
         cy.iframe('#iframeResult').find('button[ondblclick="myFunction()"]').dblclick()
         cy.iframe('#iframeResult').find('input#field2').shadow('have.value','Hello World!')
     })

     it('Drag&Drop', ()=>{
         cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
         cy.get('#box6').should('be.visible')
         cy.get('#box106').should('be.visible')

         cy.wait(3000)
         cy.get('#box6').drop('#box106', {force:true})
     })

     it.only('scrolling page', ()=>{
         cy.visit('https://astqb.org/get-certified/why-choose-astqb-for-your-istqb-certification-exam/?campaign=9731344521&gad_source=1&gad_campaignid=9731344521&gbraid=0AAAAAD8OwsGZlcRg7axJD9FurvnVsM7Dg&gclid=Cj0KCQjwnovFBhDnARIsAO4V7mBUgptMn2YqgYmbO5EkP1rJB8TJmBXqqJBIp0ueji16tDCfehlu4m8aAkt5EALw_wcB')
         cy.get('#custom_html-27 > .textwidget > .c-tile').scrollIntoView({duration:3000})
         cy.get('#custom_html-27 > .textwidget > .c-tile').should('be.visible')
         cy.get('.c-sidebar_section > .c-button').scrollIntoView({duration:2000})
         cy.get('.c-sidebar_section > .c-button').should('be.visible')
     })

})