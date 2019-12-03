describe("articles", () => {
  before;

  it("open overview", () => {
    cy.visit("/articles");
    cy.get("h1")
      .should("exist")
      .should("have.css", "font-size", "32px");
    cy.get("table").should("exist");
  });
});
