describe('a',()=>{

it('afd',()=>{
cy.visit('/')
    cy.get('#username').type('agente');
    cy.get('#password').type('Cloud2021*');
    cy.get('.btn > span').click({ force: true });
    cy.getCookies().should('have.length', 0)
})




})


