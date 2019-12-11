describe("articles index", () => {
  beforeEach(() => {
    cy.visit("/articles");
  });

  it("open articles index", () => {
    cy.get("h1").should("have.css", "font-size", "54px");
  });

  it("open articles feed", () => {
    cy.get('[data-cy="go_to_feed"]').click();

    cy.url().should("contain", "feed");
  });

  it("open saved articles", () => {
    cy.get('[data-cy="go_to_saved_articles"]').click();

    cy.url().should("contain", "saved");
  });
});
