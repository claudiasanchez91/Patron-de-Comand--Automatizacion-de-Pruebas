import locators from '.pageObjects/locators'
import locators from './locators'

Cypress.Commands.add("createClient",(sharedkey, businessID,email) => {
    const locators = new locators()

    cy.visit(Cypress.env('url'))
    locators.newClient().click();
    locators.fillSharedkey().clear();
    locators.fillSharedkey().type(sharedkey);
    locators.fillEmail().clear();
    locators.fillEmail().type(email);
    locators.fillBusinessId().clear();
    locators.fillBusinessId().type(businessId);
    locators.checkboxSendCode().click()
    locators.buttonCreate().click()
})

