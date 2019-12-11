describe("articles index", () => {
  it("open articles index", () => {
    cy.visit("/articles");
    cy.get("a")
      .should("contain", "nieuwe artikels")
      .should("contain", "opgeslagen artikels");
  });
});
