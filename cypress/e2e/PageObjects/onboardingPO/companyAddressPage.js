class companyAddressPage{
    elements = {
        addressLine1: () => cy.get("input[name='addressLine1']"),
        stateDropDown: () => cy.get("#stateOrProvince"),
        stateSelect: () => cy.get("#stateOrProvince-option-25"),
        lgaDropDown: () => cy.get("#city"),
        lgaSelect: () => cy.get("#city-option-5"),
        companyAddressCheck: () => cy.get("cy.get(':nth-child(2) > :nth-child(1) > .MuiBox-root > .MuiPaper-root > .undefined > :nth-child(1) > .MuiGrid-justify-content-xs-space-between > :nth-child(1) > .MuiGrid-root > .MuiSvgIcon-root')"),

    }

    
    addressCheck(address){

        this.elements.addressLine1().type(address);
        this.elements.stateDropDown().click({force: true});
        this.elements.stateSelect().click({force: true});
        this.elements.lgaDropDown().click({force: true});
        this.elements.lgaSelect().click({force: true});
    }

    emptyAddressCheck(address){

        this.elements.addressLine1().click();
        this.elements.stateDropDown().click();
        this.elements.stateSelect().click();
        this.elements.lgaDropDown().click();
        this.elements.lgaSelect().click();
    }

    assertAddressCheck(character){

        cy.get("p=Enter AlphaNumeric characters only")
        .should
        // ('be.visible')
        // .and
        ('contain', character);
    }

}

module.exports = new companyAddressPage