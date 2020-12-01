<template>
  <div>
    <div class="banner__wrapper breweries__img banner__wrapper--headline banner__wrapper__headline--landing">
      <h1 class="banner__title">LES BRASSERIES</h1>
    </div>

    <h1 class="region__breweries__title">Brasseries par région</h1>

    <div class="region__wrapper">
      <h2>Hauts-De-France</h2>
      <div v-if="breweryRegion === 'Hauts-de-France'">
        <ul>
          <li>{{ breweryName }}</li>
        </ul>
      </div>

      <h2>Ile-de-France</h2>


      <h2>Normandie</h2>


      <h2>Bretagne</h2>


      <h2>Grand Est</h2>


      <h2>Pays de la Loire</h2>


      <h2>Centre-Val de Loire</h2>


      <h2>Bourgogne</h2>


      <h2>Nouvelle Aquitaine</h2>


      <h2>Auvergne-Rhônes-Alpes</h2>


      <h2>Occitanie</h2>


      <h2>Provence-Alpes-Côte d'Azur</h2>


    </div>
  </div>

</template>

<script>
const axios = require('axios')

export default {
  name: "breweries_home",
  data() {
    return {
      region: "",
      brasserieDetails: [],
      breweryName: [],
      breweryRegion: [],
    }
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/breweries")
      .then(response => this.brasserieDetails = response)
      .catch(e => {
        console.log(e)
      })
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');

.breweries__img {
  background-image: url("../../assets/static/breweriesbanner.png");
}

.banner__wrapper {
  width: 100%;
}

.banner__wrapper--headline {
  overflow: hidden;
  display: flex;
  justify-content: center;
  background-size: cover;
  position: relative;
}

.banner__wrapper__headline--landing {
  display: flex;
  justify-content: center;
  height: 720px;
}

.banner__title {
  display: flex;
  align-items: center;
  color: white;
  font-size: 85px;
}

.region__breweries__title {
  text-align: center;
  font-size: 65px;
  font-weight: 50;
  font-family: 'Playfair Display', serif;
}

h2 {
  text-align: center;
}

</style>
