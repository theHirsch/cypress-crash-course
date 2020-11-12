describe('Site loads without problems',() => {
    it('Loads the home page', () => {
        cy.visit('http://localhost:3000' )
    })

    it('Displays header element', () => {
        cy.get('[data-cy=header]')
            .should('be.visible')
    })
    it('Displays logo element', () => {
        cy.get('[data-cy=logo]')
            .should('be.visible')
    })

})