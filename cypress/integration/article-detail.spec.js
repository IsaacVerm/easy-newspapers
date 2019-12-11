describe("article detail", () => {
  let titleFirstArticleFeed;

  beforeEach(() => {
    cy.visit("/articles/feed");
    cy.get("a")
      .first()
      .then(title => {
        titleFirstArticleFeed = title.text();
        cy.get("a")
          .first()
          .click();
      });
  });

  it("open article detail", () => {
    cy.get("h1")
      .should("contain", titleFirstArticleFeed)
      .should("have.css", "font-size", "54px");

    cy.get("p")
      .should("exist")
      .should("not.contain", "<P>")
      .should("not.contain", "<p>");

    cy.url().should("contain", "dmf");
  });
  it("go back to index", () => {
    cy.get('[data-cy="back_to_index"]').click();
    cy.url().should("match", /articles\/$/);
  });
  it("save article", () => {
    cy.get('[data-cy="save_article_form"]').submit();
    cy.url().should("contain", "saved");
    cy.get("a").should("contain", titleFirstArticleFeed);
  });
});
