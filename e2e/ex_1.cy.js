
///<reference types='Cypress'/>
describe("This is the first Test Case",(err,runnable)=>{
    Cypress.on('Cypress:uncaught',()=>{
        return false;
    })
beforeEach(()=>{
    cy.visit("https://supersimple.dev/project/amazon/")
})
beforeEach(() => {
    cy.window().then((win) => {
      win.sessionStorage.clear();
    });
  });
  
it('This test is related to search the product',()=>{

    cy.get('.js-search-bar.search-bar').type("football");
    cy.get(".js-search-button.search-button").click();
    cy.go('back');
cy.wait(5000);

//it("test case no.2",()=>{
    cy.contains("Men's Full-Zip Hooded Fleece Sweatshirt").scrollIntoView({timeout:20000});
   //cy.get(".js-quantity-selector").contains('3').select();
   cy.get('[data-testid="quantity-selector"].js-quantity-selector').last().select('3');
    //cy.contains("Add to Cart").click({enter});
        cy.contains("Add to Cart").focus().type('{enter}');
        cy.get(".cart-link.header-link").click();
       // cy.get('[type="radio"]').should('be.visible').click({multiple:true});
       cy.get('[data-delivery-option-id="6e2dd65a-6665-4f24-bcdc-f2ecdbc6e156"]').click({multiple:true});
    cy.get('[data-testid="place-order-button"]').click();
    cy.contains(" Track package ").click();
    cy.get('[href="orders.html"]').click();

})

})