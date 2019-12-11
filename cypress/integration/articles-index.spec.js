describe("articles index", () => {
  it("open articles index", () => {
    cy.visit("/articles");

    cy.log("title");
    cy.get("h1").should("have.css", "font-size", "54px");

    cy.log("options");
    cy.get("a")
      .should("contain", "nieuwe artikels")
      .should("contain", "opgeslagen artikels");
  });
});
