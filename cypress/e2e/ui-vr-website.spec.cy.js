describe('accessing the vr website', () => {
    before(() => {
      
      //realiza o acesso ao site da VR
      cy.visitPage();
    });
  
    it('Validate  map visible - Where use my card VR', () => {
      
      //topMenu - ao trocar o nome do contains você pode acessar outros menus
      cy.topMenu().contains('Pra Você').click()

      //valida se a url está correta
      cy.url().should('contain', 'onde-aceita.htm')


      //###### scrollPage - deixo como opção - para realizar um scroll na página, fica mais livre para navegar 
      //apenas passando os parametros up e down
      //cy.scrollPage(0, 6300)

      //Realiza o click no botão
      cy.botãoMeuCartão().click()
      
      //mapSection - valida o titulo
      cy.mapSection().contains('Rede credenciada')
      
      //ValidMap - Valida especificamente se o mapa está visivel na tela
      cy.validMap().should('be.visible')
     
      
    });
    
  });