/* eslint-disable linebreak-style */
import RestaurantSource from "../../data/restaurant-source";
import { createRestaurantItemTemplate } from "../templates/template-creator";

const Home = {
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
  <div class="menu-content">
    <h1>Explore Restaurant</h1>
    <div class="list" id="post-content"></div>
  </div>
</section>
      `;
  },

  async afterRender() {
    const restosContainer = document.querySelector("#post-content");
    const data = await RestaurantSource.getRestaurantList();
    data.restaurants.forEach((restaurant) => {
      restosContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
