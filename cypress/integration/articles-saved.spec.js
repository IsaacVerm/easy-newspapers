describe("articles saved", () => {
  beforeEach(() => {
    // make sure there's at least 1 article
    cy.visit("/articles/dmf20191210_04759850");
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
  });
});
