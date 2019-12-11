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
    cy.log("title");
    cy.get("h1")
      .should("contain", titleFirstArticleFeed)
      .should("have.css", "font-size", "54px");

    cy.log("description");
    cy.get("p")
      .should("exist")
      .should("not.contain", "<P>")
      .should("not.contain", "<p>");
  });
  it("go back to articles feed", () => {
    cy.get('[data-cy="feed_hyperlink"]').click();
    cy.url().should("contain", "feed");
  });
  it("save article", () => {
    cy.get('[data-cy="save_article_form"]').submit();
    cy.url().should("contain", "saved");
    cy.get("a").should("contain", "Calvo over De Wever");
  });
});
