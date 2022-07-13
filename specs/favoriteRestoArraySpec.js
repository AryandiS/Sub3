/* eslint-disable no-undef */
/* eslint-disable no-return-assign */
/* eslint-disable no-prototype-builtins */
import { itActsAsFavoriteRestoModel } from "./contract/favoriteRestoContract";

let favoriteResto = [];

const FavoriteRestaurantArray = {
  getResto(id) {
    return favoriteResto.find((restaurant) => restaurant.id === id);
  },

  getAllResto() {
    return favoriteResto;
  },

  putResto(restaurant) {
    if (!restaurant.hasOwnProperty("id")) {
      return;
    }

    if (this.getResto(restaurant.id)) {
      return;
    }
    favoriteResto.push(restaurant);
  },

  deleteResto(id) {
    favoriteResto = favoriteResto.filter((restaurant) => restaurant.id !== id);
  },
};

describe("favorite Restaurant Array Contract Test Implementation", () => {
  afterEach(() => (favoriteResto = []));

  itActsAsFavoriteRestoModel(FavoriteRestaurantArray);
});
