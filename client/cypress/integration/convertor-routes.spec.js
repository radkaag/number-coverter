describe('convertor API', () => {
  it('should send back body with corresponding word', () => {
    cy
      .request('http://localhost:3000/convertor?value=393')
      .its('body')
      .should('contain', 'eye');
  });

  it('should send back body with failure message', () => {
    cy
      .request('http://localhost:3000/convertor?value=34567')
      .its('body')
      .should(
        'contain',
        'No words from human body vocabulary matched value of 34567'
      );
  });
});
