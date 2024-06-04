import loginPage from "../../PageObjects/loginPO/loginPage";
import dashboardPage from "../../PageObjects/onboardingPO/dashboardPage";
import { generateRandomAlphanumeric, getRandomCompanyName } from '../../../support/utils';
import companyDetailsPage from "../../PageObjects/onboardingPO/companyDetailsPage";
import companyAddressPage from "../../PageObjects/onboardingPO/companyAddressPage";
const data = require('../../../fixtures/testData.json')



context('Company Address test', ()=>{

    const companyName = getRandomCompanyName();
    const regNumber = generateRandomAlphanumeric(10);
    
    beforeEach('login', () =>{
        cy.visit('')
        loginPage.login("uat_mtnn_user107", "tecnotree");
        loginPage.verifyLogin('https://bss-uat.mtn.com.ng/dclm-web-ui/dashboard');
        cy.scrollTo('bottom');
        dashboardPage.dashboardInputs(companyName, regNumber);
        const expectedSubCategory = "CORPORATE MICRO";
        companyDetailsPage.corporateMicro(expectedSubCategory);
        cy.scrollTo('top');
    })

    xit('Company address validation', () => {
        companyAddressPage.addressCheck(data.address.correct);
    })

    it('Non alphanumeric character in address', () => {
        companyAddressPage.addressCheck(data.address.wrong);
        companyAddressPage.assertAddressCheck(data.address.nonAphanumeric);
    })

    xit('validate empty address field', () => {
        companyAddressPage.emptyAddressCheck();
        companyAddressPage.assertAddressCheck(data.address.emptyAddress);
    })

})