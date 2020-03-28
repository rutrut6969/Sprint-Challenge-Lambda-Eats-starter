describe('Testing inputs', function() {
  beforeEach(() => {
    cy.visit('http://localhost:3000/form');
  });
  it('Adds values to form', function() {
    cy.get('input[name="name"]')
      .type('Isaac')
      .should('have.value', 'Isaac');
    cy.get('select[name="size"]')
      .select('Large')
      .should('have.value', 'Large');
    cy.get('input[name="bbq"]')
      .click()
      .should('have.value', 'bbq');
    cy.get('input[name="pepperoni"]')
      .click()
      .should('have.value', 'pepperoni');
    cy.get('input[name="triple"]')
      .click()
      .should('have.value', 'tripcheese');
    cy.get('input[name="glutefree"]')
      .click()
      .should('have.value', 'on');
    cy.get('textarea')
      .type('No, no special instructions thank you')
      .should('have.value', 'No, no special instructions thank you');
    cy.get('button[type="submit"]').click();
  });
});
