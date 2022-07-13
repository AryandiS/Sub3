/* eslint-disable import/prefer-default-export */
import FavoriteRestaurantIdb from "../../src/scripts/data/favoriteresto-idb";
import LikeButtonInitiator from "../../src/scripts/utils/like-button-initiator";

const createLikeButtonPresenterWithResto = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector("#likeButtonContainer"),
    FavoriteResto: FavoriteRestaurantIdb,
    restaurant,
  });
};

export { createLikeButtonPresenterWithResto };
