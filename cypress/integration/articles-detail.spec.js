describe("articles detail", () => {
  before(() => {
    // we use a permalink so the test data remains valid
    cy.visit("/articles/dmf20191210_04759850");
  });

  it("open articles detail", () => {
    cy.log("title");
    cy.get("h1")
      .should("contain", "Calvo over De Wever")
      .should("have.css", "font-size", "32px");

    cy.log("description");
    cy.get("p")
      .should("exist")
      .should("not.contain", "<P>");
  });
  it("go back to articles feed", () => {
    cy.get('[data-cy="feed_hyperlink"]').click();
    cy.url().should("contain", "feed");
  });
});
