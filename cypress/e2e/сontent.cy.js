describe("My First Test", () => {
  it('finds the content "type"', () => {
    cy.visit("https://kapusta-qa.netlify.app/");

    cy.contains("type").click("registration");


    cy.url("https://kapusta-qa.netlify.app/").should("include", "/commands/actions");

    cy.get(".action-email").type("dudkomykola@icloud.com");

    cy.get(".action-password").type("Mclarenmls32");
  });
});
