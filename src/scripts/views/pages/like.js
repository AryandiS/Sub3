/* eslint-disable no-alert */
import FavoriteRestoIdb from "../../data/favoriteresto-idb";
import { createRestaurantItemTemplate } from "../templates/template-creator";

const Like = {
  async render() {
    return `
    <section class="welcome_container">
      <img src="./images/heros/hero-image_2.jpg" alt="" />
      <div class="filter"></div>
      <div class="welcome">
        <h2 align="center">Welcome to RestLoc</h2>
        <h5 align="center">Let's explore the restaurant with us.</h5>
      </div>
    </section>
    
    <section class="content">
        <div class="latest">
            <h1>Favorite Restaurants</h1>
            <div class="list" id="post-content"></div>
        </div>
    </section>
    `;
  },

  async afterRender() {
    try {
    const restaurant = await FavoriteRestoIdb.getAllResto();
    const restoContainer = document.querySelector("#post-content");
    restoContainer.innerHTML = "";
    restaurant.forEach((restos) => {
      restoContainer.innerHTML += createRestaurantItemTemplate(restos);
    });
    restoContainer.innerHTML = '<p class="main__title">No favorite restaurant</p>';
  } catch (error) {
    alert(error.message);
  }
  },
};

export default Like;
