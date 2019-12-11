describe("articles feed", () => {
  beforeEach(() => {
    cy.visit("/articles/feed");
  });

  it("open articles feed", () => {
    cy.get("h1").should("have.css", "font-size", "54px");

    cy.get("a").should("have.length.greaterThan", 5);
  });

  it("open article detail", () => {
    cy.get("a")
      .first()
      .invoke("text")
      .then(titleOverview => {
        cy.get("a")
          .first()
          .click();
        cy.url().should("contain", "dmf");
        cy.get("h1")
          .invoke("text")
          .should("eq", titleOverview);
      });

    cy.url().should("contain", "dmf");
  });

  it("go back to index", () => {
    cy.get('[data-cy="back_to_index"]').click();
    cy.url().should("match", /articles\/$/);
  });
});
