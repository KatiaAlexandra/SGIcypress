it('Actualiza los datos del asignado en la tabla', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes("Cannot read properties of null (reading 'addEventListener')")) {
      return false; // Ignora este error
    }
  });

  cy.visit('http://localhost:8080/SGI_war/')
  cy.get('#name').type('Daniel')
  cy.get('#email').type('20233tn175@utez.edu.mx')
  cy.get('#password').type('Daniel')
  cy.get('body > main > form > button').click()
  cy.url().should('include', 'http://localhost:8080/SGI_war/LoginServlet')
  cy.get('#accordionSidebar > li:nth-child(6) > a').click()
  cy.get('#articlesTable > tbody > tr:nth-child(1) > td:nth-child(5) > div > div > button.btn.btn-warning > i').click()
  cy.get('#actualizar').should('be.visible').screenshot()
  cy.get('#u_numEmpleado').should('be.visible')
  cy.get('#u_numEmpleado').clear();
  cy.get('#u_numEmpleado').type('33')
  cy.get('#actualizar').screenshot()
  cy.get('#actualizar > div > div > div.modal-body > form > div.modal-footer > button.btn.btn-success').click()
  cy.get('#articlesTable > tbody > tr:nth-child(1) > td:nth-child(1)')
  .should('contain', '33');
  cy.screenshot();
})