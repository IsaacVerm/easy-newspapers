describe("articles saved", () => {
  beforeEach(() => {
    // make sure at least 1 article has been saved
    cy.visit("/articles/feed");

    cy.get("a")
      .first()
      .click();

    cy.get('[data-cy="save_article_form"]').submit();
  });

  it("open article detail", () => {
    cy.log("title");
    cy.get("h1")
      .should("contain", "Opgeslagen artikels")
      .should("have.css", "font-size", "54px");

    cy.log("article detail");
    cy.get("a")
      .first()
      .click();
    cy.url().should("contain", "dmf");
  });
});
