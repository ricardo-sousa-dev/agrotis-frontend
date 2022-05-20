describe('Testa página do formulário de cadastro', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Verifica se a página possui o título correto', () => {
    cy.get('h1').should('contain', 'Cadastro')
  })

  it('Deve preencher o formulário corretamente', () => {
    cy.get('[data-cy=input-nome]').type('João da Silva')
    cy.get('[data-cy=input-dataInicial]').click('right')
    cy.get(".owl-calendar-year span:nth-child(15)").click();
    // cy.get('[data-cy=input-dataFinal]').type('12122021')
    cy.get('[data-cy=input-idPropriedade]').type('12345')
    cy.get('[data-cy=input-nomePropriedade]').type('Fazenda Paraíso')
    cy.get('[data-cy=input-cnpj]').type('27505101010101')
    cy.get('[data-cy=input-idLaboratorio]').type('1234')
    cy.get('[data-cy=input-nomeLaboratorio]').type('Laboratório de Testes')
    cy.get('[data-cy=input-observacoes]').type('Observações')
    cy.get('[data-cy=button-enviar]').should('to.have.length', 1)
  })
})