describe("Авторизація", () => {
  it("Успішний вхід", () => {
    cy.visit("https://kapusta-qa.netlify.app/login");

    cy.get('input[name="email"]').type("dudkomykola@icloud.com");
    cy.get('input[name="password"]').type("Mclarenmls32");

    cy.get('button[type="submit"]').click();

    cy.get(".user-avatar").should("be.visible");
  });

  it("Неуспішний вхід з невірними даними", () => {
    cy.visit("https://kapusta-qa.netlify.app/login");

    cy.get('input[name="email"]').type("wr@example.com");
    cy.get('input[name="password"]').type("ord");

    cy.get('button[type="submit"]').click();

    cy.get(".error-message").should("be.visible");
  });
});
