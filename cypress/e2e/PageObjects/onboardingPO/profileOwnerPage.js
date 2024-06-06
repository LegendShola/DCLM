class profileOwnerPage{
    elements = {
        firstNameField: () => cy.get('[data-cy="givenName"] input').eq(0),
        lastNameField: () => cy.get('[data-cy="familyName"] input').eq(0),
        mobileNumberField: () => cy.get('[data-cy="mobile"] input').eq(0),
        emailField: () => cy.get("input[name='email']").eq(0),
        emailCheckBox: () => cy.xpath('//span[contains(text(), "Email")]').eq(0),
        smsCheckBox: () => cy.xpath('//span[contains(text(), "SMS")]').eq(0),
        
    }

    
    profileOwnerValidation(firstName, lastName, mobileNumber, email){

        this.elements.firstNameField().type(firstName);
        this.elements.lastNameField().type(lastName);
        this.elements.mobileNumberField().type(mobileNumber);
        this.elements.emailField().type(email);
        this.elements.emailCheckBox().click();
        cy.wait(2000);
        this.elements.emailCheckBox().click();
        this.elements.smsCheckBox().click();
        cy.wait(2000);
    }

    assertProfileOwnerModule(){
        cy.get('path[d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"]')
        .should('exist');
    }

    assertNonAlphaFirstName(character){
        cy.get('#root_givenName')
        .should('have.text', character);

    }

    assertNonAlphaLastName(character){
        cy.get('#root_familyName')
        .should('have.text', character);
    }

    assertNonNumericMobileNumber(character){
        cy.get('#root_mobile')
        .should('have.text', character);
    }

    assertOver10MobileNumber(character){
        cy.get('#root_mobile')
        .should('have.text', character);
    }

    assertInvalidEmail(character){
        cy.get('#root_email')
        .should('have.text', character);
    }

}

module.exports = new profileOwnerPage