import loginPage from "../../PageObjects/loginPO/loginPage";
// const data = require('../../../fixtures/loginParameters.json')

context('Login test', ()=>{
    
    it('successful login', () =>{
        cy.visit('')
        loginPage.login("uat_mtnn_user107", "tecnotree");
        loginPage.verifyLogin('https://bss-uat.mtn.com.ng/dclm-web-ui/dashboard');
    })

    // it('Failed login(Wrong password)', () =>{
    //     cy.visit('')
    //     loginPage.typeUsername(data.Test26.email);
    //     loginPage.typePassword(data.Wrong.currentPassword);
    //     loginPage.clickLogin();
    //     loginPage.verifyFailedLoginPassword();
    // })

    // it('Failed login(Wrong email)', () =>{
    //     cy.visit('')
    //     loginPage.typeUsername(data.Wrong.email);
    //     loginPage.typePassword(data.Test26.currentPassword);
    //     loginPage.clickLogin();
    //     loginPage.verifyFailedLoginEmail();
    // })

    // it('Empty Password field', () =>{
    //     cy.visit('')
    //     loginPage.typeUsername(data.Wrong.email);
    //     loginPage.clickLogin();
    //     loginPage.verifyPasswordEmpty();
    // })

    // it('Empty Email field', () =>{
    //     cy.visit('')
    //     loginPage.typePassword(data.Wrong.email);
    //     loginPage.clickLogin();
    //     loginPage.verifyEmailEmpty();
    // })
})