
import { Given, When } from "@badeball/cypress-cucumber-preprocessor"

const url = "https://www.webdriveruniversity.com/";

Given("I navigate to the WebdriverUniversity homepage", () => {
    cy.visit(url);
})

When("I click on contact us button", () => {
    // kill target="_blank" from our <a> element so that clicking on the link
    // does not open a new tab
    cy.get("#contact-us").invoke("removeAttr", "target").click();

})




