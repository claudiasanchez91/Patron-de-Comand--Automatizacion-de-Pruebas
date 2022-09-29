class locators
{
    visit()
    {
        return cy.visit('https://localhost:4200')
    }
    newclient()
    {
        return cy.get('.new-button > .mat-button > .mat-button-wrapper')
    }
    fillSharedkey()
    {
        return cy.get('input[placeholder="Shared key"]');

    }
    fillEmail()
    {
        return cy.get('input[placeholder="Email"]');   
    }
    fillBusinessID(){
        return cy.get('input[placeholder="Business Identifier"]');   
    }
    checkboxSendCode()
    {
        return cy.get('.mat-checkbox-inner-container"]'); 
    }
    buttonCreate(){
        return cy.get('button container > cwc-button >.mat button-wrapper')
    }
}
export default locators
