import loginPage from "../../PageObjects/loginPO/loginPage";
import dashboardPage from "../../PageObjects/onboardingPO/dashboardPage";
import { generateRandomAlphanumeric, getRandomCompanyName } from '../../../support/utils';

context('Dashboard test', ()=>{

    const companyName = getRandomCompanyName();
    const regNumber = generateRandomAlphanumeric(10);
    
    beforeEach('login', () =>{
        cy.visit('')
        loginPage.login("uat_mtnn_user107", "tecnotree");
        loginPage.verifyLogin('https://bss-uat.mtn.com.ng/dclm-web-ui/dashboard');
    })

    it('dashboard', () => {
        cy.scrollTo('bottom');
        dashboardPage.dashboardInputs(companyName, regNumber);
        dashboardPage.verifyDashboardInputs('https://bss-uat.mtn.com.ng/dclm-web-ui/serviceRequest/CorporateRegistrationRequest?requestId', regNumber, companyName);    
    })

})