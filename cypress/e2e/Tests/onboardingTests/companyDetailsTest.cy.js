import loginPage from "../../PageObjects/loginPO/loginPage";
import dashboardPage from "../../PageObjects/onboardingPO/dashboardPage";
import { generateRandomAlphanumeric, getRandomCompanyName } from '../../../support/utils';
import companyDetailsPage from "../../PageObjects/onboardingPO/companyDetailsPage";


context('Company Details test', ()=>{

    const companyName = getRandomCompanyName();
    const regNumber = generateRandomAlphanumeric(10);
    
    beforeEach('login', () =>{
        cy.visit('')
        loginPage.login("uat_mtnn_user107", "tecnotree");
        loginPage.verifyLogin('https://bss-uat.mtn.com.ng/dclm-web-ui/dashboard');
        cy.scrollTo('bottom');
        dashboardPage.dashboardInputs(companyName, regNumber);
    })

    it('Company details check(corporate micro)', () => {
        const expectedSubCategory = "CORPORATE MICRO"
        companyDetailsPage.corporateMicro(expectedSubCategory);
    })

    it('Company details check(corporate small)', () => {
        const expectedSubCategory = "CORPORATE SMALL"
        companyDetailsPage.corporateSmall(expectedSubCategory);
    })

    it('Company details check(corporate medium)', () => {
        const expectedSubCategory = "CORPORATE MEDIUM"
        companyDetailsPage.corporateMedium(expectedSubCategory);
    })

    it('Company details check(corporate large)', () => {
        const expectedSubCategory = "CORPORATE CONSUMER"
        companyDetailsPage.corporateLarge(expectedSubCategory);
    })

})