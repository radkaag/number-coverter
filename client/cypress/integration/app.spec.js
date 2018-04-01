describe('Kiwi ', () => {
  it('should have correct page title', () => {
    cy.visit('http://localhost:3000');
    cy.title().should('include', 'Kiwi');
  });

  context('UI', () => {
    it('should have displayed both button Clear and Convert', () => {
      cy.get('.container--buttons').within(() => {
        cy.get('button:first').should('contain', 'Clear');
        cy.get('button:last').should('contain', 'Convert');
      });
    });

    it('should have displayed all 12 dial buttons', () => {
      cy
        .get('.container--dial')
        .find('.dial-button')
        .find('.dial-button__title')
        .should('have.length', 12);
    });

    it('should have displayed box for future output message with instruction text', () => {
      cy
        .get('.output')
        .should(
          'contain',
          'Please enter a number, which represents an word and press convert to see output.'
        );
    });
  });

  context('Functionality', () => {
    afterEach(() => {
      cy.get('button:first').click();
    });

    it('entry value of 1345 should be converted with value 345 and output failure message', () => {
      [1, 3, 4, 5].map(num => {
        cy
          .get('.container--dial')
          .find('.dial-button')
          .find('.dial-button__title')
          .contains(num)
          .click();
      });
      cy.get('button:last').click();
      cy
        .get('.output')
        .should(
          'contain',
          'No words from human body vocabulary matched value of 345'
        );
    });

    it('entry value of 35269 should be converted and output result', () => {
      [3, 5, 2, 6, 9].map(num => {
        cy
          .get('.container--dial')
          .find('.dial-button')
          .find('.dial-button__title')
          .contains(num)
          .click();
      });
      cy.get('button:last').click();
      cy.get('.output').should('contain', 'elbow');
    });
  });
});
