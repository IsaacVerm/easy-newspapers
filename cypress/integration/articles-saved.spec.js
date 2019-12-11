describe("articles saved", () => {
  beforeEach(() => {
    // make sure at least 1 article has been saved
    cy.visit("/articles/feed");

    cy.get("a")
      .first()
      .click();

    cy.get('[data-cy="save_article_form"]').submit();

    cy.visit("/articles/saved");
  });

  it("open articles saved", () => {
    cy.get("h1").should("have.css", "font-size", "54px");
  });

  it("go back to index", () => {
    cy.get('[data-cy="back_to_index"]').click();
    cy.url().should("match", /articles\/$/);
  });

  it("open article detail", () => {
    cy.get("a")
      .first()
      .click();
    cy.url().should("contain", "dmf");
  });
});
