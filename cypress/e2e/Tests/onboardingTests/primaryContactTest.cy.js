import loginPage from "../../PageObjects/loginPO/loginPage";
import dashboardPage from "../../PageObjects/onboardingPO/dashboardPage";
import { generateRandomAlphanumeric, getRandomCompanyName } from '../../../support/utils';
import companyDetailsPage from "../../PageObjects/onboardingPO/companyDetailsPage";
import companyAddressPage from "../../PageObjects/onboardingPO/companyAddressPage";
import profileOwnerPage from "../../PageObjects/onboardingPO/profileOwnerPage";
import primaryContactPage from "../../PageObjects/onboardingPO/primaryContactPage";
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
        profileOwnerPage.profileOwnerValidation(data.address.firstName, data.address.lastName, data.address.mobileNumber, data.address.emailAddress);
    })

    xit('Profile owner is same as primary contact validation', () => {
        primaryContactPage.sameAsProfileOwnerValidation();
        primaryContactPage.assertPrimaryContactModule();
    })

    xit('Primary contact validation', () => {
        primaryContactPage.primaryContactValidation(data.address.firstName, data.address.lastName, data.address.mobileNumber, data.address.emailAddress);
        primaryContactPage.assertPrimaryContactModule();
    })

    xit('Non-alpha first name validation', () => {
        primaryContactPage.primaryContactValidation(data.address.emailAddress, data.address.lastName, data.address.mobileNumber, data.address.emailAddress);
        primaryContactPage.assertNonAlphaFirstName('Enter Alpha characters only');
    })

    xit('Non-alpha last name validation', () => {
        primaryContactPage.primaryContactValidation(data.address.firstName, data.address.emailAddress, data.address.mobileNumber, data.address.emailAddress);
        primaryContactPage.assertNonAlphaLastName('Enter Alpha characters only');
    })

    xit('Non-numeric mobile number validation', () => {
        primaryContactPage.primaryContactValidation(data.address.firstName, data.address.lastName, data.address.firstName, data.address.emailAddress);
        primaryContactPage.assertNonNumericMobileNumber('Enter a Valid Mobile Number');
    })

    xit('Over 10 characters mobile number validation', () => {
        primaryContactPage.primaryContactValidation(data.address.firstName, data.address.lastName, data.address.mobileNumber1, data.address.emailAddress);
        primaryContactPage.assertOver10MobileNumber('should NOT be longer than 10 characters');
    })

    xit('Invalid email validation', () => {
        primaryContactPage.primaryContactValidation(data.address.firstName, data.address.lastName, data.address.mobileNumber, data.address.firstName);
        primaryContactPage.assertInvalidEmail('Enter a Valid Email Id');
    })

    it('Account manager validation', () => {
        primaryContactPage.sameAsProfileOwnerValidation();
        primaryContactPage.acctManagerValidation();
    })


})