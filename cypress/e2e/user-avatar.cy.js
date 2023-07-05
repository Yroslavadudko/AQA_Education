describe("Авторизація", () => {
  it("Успішний вхід", () => {
    cy.visit("https://kapusta-qa.netlify.app/login");

    cy.get('input[name="email"]').type("dudkomykola@icloud.com");
    cy.get('input[name="password"]').type("Mclarenmls32");

    cy.get('button[type="submit"]').click();

    cy.get(".user-avatar").should("be.visible");

    // Додаткові дії після авторизації
    cy.visit("https://kapusta-qa.netlify.app/dashboard");
    // Виконайте інші перевірки або дії на сторінці панелі керування
  });

  // Решта коду...
});
