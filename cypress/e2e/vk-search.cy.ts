describe('Тест', () => {
  it('Проверка на работу', () => {
    cy.visit('http://localhost:3000/')
    cy.get('input')
        .type('Nick')
        .clear()
        .type('Max')
        .clear()
        .type('adasdasdasd')
        .clear()
  })
})
