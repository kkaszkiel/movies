describe('template spec', () => {
  it('Should find "Matrix" in the body after "Movies List" appears', () => {
    // Open the page
    cy.visit('http://localhost:3000');

    // Wait for the "Movies List" text to appear in the body
    cy.contains('Movies List').should('exist', { timeout: 10000 });

    // Use a selector to find the text in the body
    cy.get('body').should('contain.text', 'The Matrix');
  });


})