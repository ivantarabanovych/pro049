describe('Функція входу', () => {
    it('повинна дозволяти користувачу увійти', () => {
      cy.visit('/login') 
  
      cy.get('input[name="username"]').type('testUser')
      cy.get('input[name="password"]').type('password123')
  
      cy.get('form').submit()
  
      cy.url().should('include', '/dashboard') 
      cy.contains('Ласкаво просимо, testUser!') 
    })
  })
  