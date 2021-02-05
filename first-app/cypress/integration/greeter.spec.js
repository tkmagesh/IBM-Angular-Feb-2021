describe('Greeter', () => {
    
    beforeEach(() => {
        cy.visit('http://localhost:4200');
        cy.get('input[value="Greeter"]')
            .click();
    });


    it('should greet the user', () => {
        //Arrange
        

        //Act
        cy.get('input[type="text"]')
            .type('Magesh')

        cy.get('input[value="Greet"]')
            .click()

        //Assert
        cy.get('div.highlight')
            .should('contain', 'Hi Magesh, Have a nice day!');
    })

    it('should greet the user', () => {
        //Arrange
        

        //Act
        cy.get('input[type="text"]')
            .type('Suresh')

        cy.get('input[value="Greet"]')
            .click()

        //Assert
        cy.get('div.highlight')
            .should('contain', 'Hi Suresh, Have a nice day!');
    })
})