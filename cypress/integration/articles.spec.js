describe("articles", () => {
  it("open articles newspaper", () => {
    cy.visit("/articles/ds/latest");

    cy.log("title");
    cy.get("h1")
      .should("contain", "Krantenkoppen")
      .should("have.css", "font-size", "32px");

    cy.log("articles");
    cy.get("table").should("exist");
    cy.get("tr").should("have.length.greaterThan", 5);
  });
});
