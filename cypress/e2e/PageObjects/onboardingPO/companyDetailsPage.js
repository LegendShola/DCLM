class companyDetailsPage{
    elements = {
        footPrintField: () => cy.get("#footPrint"),
        footPrintSelect: () => cy.get("#footPrint-option-1"),
        staffStrengthField: () => cy.get("#staffStrength"),
        corporateMicro: () => cy.get("#staffStrength-option-1"),
        corporateSmall: () => cy.get("#staffStrength-option-2"),
        corporateMedium: () => cy.get("#staffStrength-option-3"),
        corporateLarge: () => cy.get("#staffStrength-option-4"),
        industryDropDown: () => cy.get("#industry"),
        agriculture: () => cy.get("#industry-option-1"),
        aviation: () => cy.get("#industry-option-3"),
        companyDetailsCheck: () => cy.get("cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .MuiPaper-root > .undefined > :nth-child(1) > .MuiGrid-justify-content-xs-space-between > :nth-child(1) > .MuiGrid-root > .MuiSvgIcon-root')"),
    }

    
    corporateMicro(expectedSubcategory){

        this.elements.footPrintField().click();
        this.elements.footPrintSelect().click();
        this.elements.staffStrengthField().click();
        this.elements.corporateMicro().click();
        this.elements.industryDropDown().click();
        this.elements.agriculture().click();
        cy.get("#customerSubCategory")
        .should('be.visible')
        .and('have.value', expectedSubcategory);

    }

    corporateSmall(expectedSubcategory){

        this.elements.footPrintField().click();
        this.elements.footPrintSelect().click();
        this.elements.staffStrengthField().click();
        this.elements.corporateSmall().click();
        this.elements.industryDropDown().click();
        this.elements.agriculture().click();
        cy.get("#customerSubCategory")
        .should('be.visible')
        .and('have.value', expectedSubcategory);

    }

    corporateMedium(expectedSubcategory){

        this.elements.footPrintField().click();
        this.elements.footPrintSelect().click();
        this.elements.staffStrengthField().click();
        this.elements.corporateMedium().click();
        this.elements.industryDropDown().click();
        this.elements.agriculture().click();
        cy.get("#customerSubCategory")
        .should('be.visible')
        .and('have.value', expectedSubcategory);

    }

    corporateLarge(expectedSubcategory){

        this.elements.footPrintField().click();
        this.elements.footPrintSelect().click();
        this.elements.staffStrengthField().click();
        this.elements.corporateLarge().click();
        this.elements.industryDropDown().click();
        this.elements.agriculture().click();
        cy.get("#customerSubCategory")
        .should('be.visible')
        .and('have.value', expectedSubcategory);

    }
  

}

module.exports = new companyDetailsPage