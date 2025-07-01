describe('xpath count', function(){
    it('test_item_no', () => {
        cy.visit("https://www.amazon.com")
        cy.xpath("//div[@id='gw-card-layout']/div").should("have.length", 9)
    })
}
)