/* eslint-disable no-undef */
describe('Login Component', () => {

    beforeEach(() => {
        cy.visit("/")
    })

    it("should login and show the welcome message", () => {
        // here I will verify if the name field exists and type a user in it
        cy.get("input[name='name']")
        .should("be.visible")
        .type("Test User")

        // here I do the same but with the password field
        cy.get("input[name='password']")
        .should("be.visible")
        .type("testuser123")

        // here I target the login button, verify its visibility and submit the form
        cy.get("button[type='submit']")
        .contains("Login")
        .should("be.visible")
        .click()


        // here I verify if the welcome message is displayed correctly 
        cy.get(".welcome-card h1").contains("Welcome, Test User!")
        .should("be.visible")

        // here I make sure the LoginForm is not being rendered
        cy.get(".login-form-container").should("not.exist")
    })

}) 