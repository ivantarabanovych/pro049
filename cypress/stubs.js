describe('Заглушка API запиту', () => {
    it('повинна обробляти фіктивні відповіді', () => {
      cy.server()
      cy.route('GET', '/api/user', { name: 'testUser', id: 1 }).as('getUser') 
  
      cy.visit('/dashboard') 
      cy.wait('@getUser') 
      cy.contains('testUser') 
    })
  })
  