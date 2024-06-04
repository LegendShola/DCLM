class loginPage{
    elements = {
        usernameField: () => cy.get('#username'),
        passwordField: () => cy.get('#password'), 
        loginBtn: () => cy.get("#submit"),
    }

    login(username, password){
        this.elements.usernameField().type(username);
        this.elements.passwordField().type(password);
        this.elements.loginBtn().click();
    }


    verifyLogin(url){
        cy.url().should('eq', url);
    }

    verifyFailedLoginEmail(){
        cy.contains('#notistack-snackbar', 'Transient Failure').should('be.visible');
    }

    verifyFailedLoginPassword(){
        cy.contains('#notistack-snackbar', 'Incorrect Username/Password.').should('be.visible');
    }

    verifyPasswordEmpty(){
        cy.get(':nth-child(2) > .MuiFormHelperText-root').should('contain', 'Please provide your password');
    }

    verifyEmailEmpty(){
        cy.get(':nth-child(1) > .MuiFormHelperText-root').should('contain', 'Please provide a valid email address');
    }
    

}

module.exports = new loginPage