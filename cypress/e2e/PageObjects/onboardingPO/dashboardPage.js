class dashboardPage{
    elements = {
        companyNameField: () => cy.get('input[name="companyName"]'),
        regNumberField: () => cy.get('[data-cy="registrationNumber"]'), 
        proceedBtn: () => cy.xpath("(//span[@class='MuiTypography-root MuiTypography-button'][normalize-space()='Proceed'])[2]"),
    }

    
    dashboardInputs(companyName, regNumber){

        this.elements.companyNameField().type(companyName);
        this.elements.regNumberField().click();
        this.elements.regNumberField().type(regNumber);
        this.elements.proceedBtn().dblclick();
        cy.wait
    }

    verifyDashboardInputs(url, expectedRegNumber, expectedCompanyName) {
        cy.url().should('contain', url);
        cy.get('input[name="registrationNumber"]')
        .should('be.visible')
        .and('have.value', expectedRegNumber);
        cy.get('input[name="companyName"]')
        .should('be.visible')
        .and('have.value', expectedCompanyName);
    }
  

}

module.exports = new dashboardPage