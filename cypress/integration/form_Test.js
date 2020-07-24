describe('add text', () => {
    it('can navigate to site', () => {
        cy.visit('http://localhost:3001/pizza')
        cy.url().should('include', 'localhost')
    })

    it('find name and enter text', () => {
        cy.get('input[name="name"]')
        .type('tiffany')
        .should('have.value', 'tiffany')
    })
    
})

describe('select multiple toppings', () => {
    it('can select first toppings', () => {
        cy.get('input[name="pepperoni"]').click()   
    })
    it('select a second toppong', () => {
        cy.get('input[name="mushrooms"]').click()
    })
    it('select a third toppong', () => {
        cy.get('input[name="onions"]').click()
})
})

describe('test the submit', () => {
    it('can find submit and click', () => {
        cy.get('.submitButton').click()
    })
})