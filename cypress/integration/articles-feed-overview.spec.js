describe("articles", () => {
  before(() => {
    cy.visit("/articles/ds/latest");
  });

  it("open articles from newspaper feed", () => {
    cy.log("title");
    cy.get("h1")
      .should("contain", "Krantenkoppen")
      .should("have.css", "font-size", "32px");

    cy.log("articles");
    cy.get("a")
      .should("have.length.greaterThan", 5)
      .should("have.attr", "href");
  });

  it("open details article", () => {
    cy.log("select first article");
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
    cy.get("p").should("exist");
  });
});
