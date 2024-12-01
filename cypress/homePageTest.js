describe('Головна сторінка', () => {
    it('повинна завантажуватися без помилок', () => {
      cy.visit('/') 
      cy.contains('Завантаження сторінки успішне') 
    })
  
    it('повинна мати ключові елементи', () => {
      cy.get('button').should('exist') 
      cy.get('form').should('exist') 
      cy.get('nav').should('exist') 
    })
  })