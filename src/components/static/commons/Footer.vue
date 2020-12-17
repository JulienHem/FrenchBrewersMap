<template>
  <div class="footer--wrapper">
    <div class="na-footer">
      <div class="footer__wrapper--1">
        <div class="footer_container">
          <div class="footer_tagline">
            <h1>LA FRENCH BREWERS MAP</h1>
            <p class="footer__subtext">Une carte faite par des passionnés</p>
          </div>
          <div class="footer_tagline">
            <h3>Nous recensons à ce jour</h3>
            <p>{{ brewery }} brasseries</p>
          </div>
          <div class="footer_tagline">
            <h3>Dans nos</h3>
            <p>13 régions</p>
          </div>
        </div>
      </div>

      <div class="footer__wrapper--2">
        <div class="footer_container">
          <div class="footer_tagline">
            <h1>LA FRENCH BREWERS MAP</h1>
            <p class="footer__subtext">Une carte faite par des passionnés</p>
          </div>
          <div class="footer_tagline">
            <h3>Pour nous contacter c'est simple</h3>
            <p>Remplissez ce formulaire</p>
          </div>
          <div class="footer_tagline">
            <h3>Dans nos</h3>
            <p>13 régions</p>
          </div>
        </div>
      </div>

      <div class=" footer__wrapper--1">
        <div class="footer_container">
          <div class="footer_tagline">
            <h1>LA FRENCH BREWERS MAP</h1>
            <p class="footer__subtext">Une carte faite par des passionnés</p>
          </div>
          <div class="footer_tagline">
            <h3>Nous recensons à ce jour</h3>
            <p>{{ brewery }} brasseries</p>
          </div>
          <div class="footer_tagline">
            <h3>Dans nos</h3>
            <p>13 régions</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
const axios = require('axios');

export default {
  name: "lefooter",
  data() {
    return {
      brewery: null,
      breweryRegion: []
    }
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/breweries")
      .then(response => (this.brewery = response.data["hydra:totalItems"]))

    axios
      .get("http://127.0.0.1:8000/api/breweries")
      .then(response => (this.brewery = response.data["hydra:member"].map(r => {
        this.brewery.push(r.region)
      })))
  }
}
</script>

<style scoped>
.footer--wrapper {
  height: 180px;
  overflow: hidden;
}

.na-footer {
  transition: all 300ms ease;
  animation-name: slideshow;
  animation-iteration-count: infinite;
  animation-duration: 10s;
  animation-timing-function: ease-in-out;
}

@keyframes slideshow {
  0% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-180px);
  }
  90% {
    transform: translateY(-180px);
  }
  100% {
    transform: translateY(-360px);
  }
}
.footer__wrapper--1 {
  background-image: url("../../../assets/static/footerbanner1.png");
}

.footer_container {
  display: flex;
  justify-content: space-around;
  height: 180px;
  flex-direction: row;
  align-items: center;
}

.footer__subtext {
  margin: 0;
  color: white;
}

.footer__wrapper--2 {
  background-image: url("../../../assets/static/footerbanner2.png");

}

h1 {
  color: white;
  margin: 0;
  padding: 0;
}

h3 {
  margin: 0;
  padding: 0;
  color: white;
}

p {
  color: white;
  margin: 0;
  padding: 0;
}

li {
  display: inline-block;
}

</style>
