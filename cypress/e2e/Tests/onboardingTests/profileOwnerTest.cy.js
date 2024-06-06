import loginPage from "../../PageObjects/loginPO/loginPage";
import dashboardPage from "../../PageObjects/onboardingPO/dashboardPage";
import { generateRandomAlphanumeric, getRandomCompanyName } from '../../../support/utils';
import companyDetailsPage from "../../PageObjects/onboardingPO/companyDetailsPage";
import companyAddressPage from "../../PageObjects/onboardingPO/companyAddressPage";
import profileOwnerPage from "../../PageObjects/onboardingPO/profileOwnerPage";
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
        companyAddressPage.addressCheck(data.address.correct);
    })

    it('Profile owner validation', () => {
        profileOwnerPage.profileOwnerValidation(data.address.firstName, data.address.lastName, data.address.mobileNumber, data.address.emailAddress);
        profileOwnerPage.assertProfileOwnerModule()
    })

    it('Non-alpha first name validation', () => {
        profileOwnerPage.profileOwnerValidation(data.address.emailAddress, data.address.lastName, data.address.mobileNumber, data.address.emailAddress);
        profileOwnerPage.assertNonAlphaFirstName('Enter Alpha characters only');
    })

    it('Non-alpha last name validation', () => {
        profileOwnerPage.profileOwnerValidation(data.address.firstName, data.address.emailAddress, data.address.mobileNumber, data.address.emailAddress);
        profileOwnerPage.assertNonAlphaLastName('Enter Alpha characters only');
    })

    it('Non-numeric mobile number validation', () => {
        profileOwnerPage.profileOwnerValidation(data.address.firstName, data.address.lastName, data.address.firstName, data.address.emailAddress);
        profileOwnerPage.assertNonNumericMobileNumber('Enter a Valid Mobile Number');
    })

    it('Over 10 characters mobile number validation', () => {
        profileOwnerPage.profileOwnerValidation(data.address.firstName, data.address.lastName, data.address.mobileNumber1, data.address.emailAddress);
        profileOwnerPage.assertOver10MobileNumber('should NOT be longer than 10 characters');
    })

    it('Invalid email validation', () => {
        profileOwnerPage.profileOwnerValidation(data.address.firstName, data.address.lastName, data.address.mobileNumber, data.address.firstName);
        profileOwnerPage.assertInvalidEmail('Enter a Valid Email Id');
    })

})