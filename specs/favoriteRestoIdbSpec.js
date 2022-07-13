/* eslint-disable no-undef */
import FavoriteRestaurantIdb from "../src/scripts/data/favoriteresto-idb";
import { itActsAsFavoriteRestoModel } from "./contract/favoriteRestoContract";

describe("Favorite Restaurant Idb Contract Test Implementation", () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllResto()).forEach(async (data) => {
      await FavoriteRestaurantIdb.deleteResto(data.id);
    });
  });

  itActsAsFavoriteRestoModel(FavoriteRestaurantIdb);
});
