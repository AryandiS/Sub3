/* eslint-disable no-undef */
const assert = require("assert");

Feature("Liking Restaurants");

Before(({ I }) => {
  I.amOnPage("/#/like");
});

const messageText = "No favorite restaurant";

Scenario("showing empty liked restaurants", ({ I }) => {
  I.seeElement("#post-content");
  I.see(messageText, "#post-content");
});

Scenario("like and unlike a restaurant", async ({ I }) => {
  // like resto
  I.see(messageText, "#post-content");

  I.amOnPage("/");

  I.seeElement("#post-content");

  const firstResto = locate("a.item").first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/like");
  I.seeElement("#post-content");

  const likeRestoTitle = await I.grabTextFrom(locate("a.item").first());
  assert.strictEqual(firstRestoTitle, likeRestoTitle);

  // unlike resto
  I.amOnPage("/");
  I.click(firstResto);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/like");

  const FavoriteMessage = await I.grabTextFrom(".main__title");
  assert.strictEqual(FavoriteMessage, messageText);
});
