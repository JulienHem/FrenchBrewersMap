<template>
  <div>
    <div class="beer_banner_img beer__wrapper beer__wrapper--headline beer__wrapper__headline--landing">
      <h1 class="beer__title">LES BIERES</h1>
    </div>

    <div class="row">
      <div class="right__column">
        <div class="right__column__content">
          <h1 class="style__title">Styles</h1>
          <ul>
            <li class="list__content">Triple</li>
            <li class="list__content">Quadruple</li>
            <li class="list__content">Pills</li>
            <li class="list__content">IPA</li>
            <li class="list__content">New England IPA</li>
            <li class="list__content">Stout</li>
            <li class="list__content">Stout - Imperial</li>
            <li class="list__content">Sour</li>
          </ul>
          <h1 class="">Régions</h1>
          <ul>
            <li class="list__content">Hauts-De-France</li>
            <li class="list__content">Ile-de-France</li>
            <li class="list__content">Normandie</li>
            <li class="list__content">Bretagne</li>
            <li class="list__content">Grand Est</li>
            <li class="list__content">Pays de la Loire</li>
            <li class="list__content">Centre-Val de Loire</li>
            <li class="list__content">Bourgogne</li>
            <li class="list__content">Nouvelle Aquitaine</li>
            <li class="list__content">Auvergne-Rhônes-Alpes</li>
            <li class="list__content">Occitanie</li>
            <li class="list__content">Provence-Alpes-Côte d'Azur</li>
          </ul>
          <h1 class="right__column__title">Couleurs</h1>
          <ul>
            <li class="list__content">Ambrée</li>
            <li class="list__content">Blanche</li>
            <li class="list__content">Blonde</li>
            <li class="list__content">Brune</li>
            <li class="list__content">Rosée</li>
            <li class="list__content">Rouge</li>
          </ul>
        </div>
      </div>


      <div class="details__wrapper">
        <div class="details__header">
          <h1 class="details__title">
            <span>La Sélection</span>
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "beers_details.vue"
}
</script>

<style scoped>
.beer_banner_img {
  background-image: url("../../../../brewersmap/src/assets/home/beer_shop_banner.png");
}
.beer__wrapper {
  width: 100%;
}
li, ul {
  padding: 0;
  margin: 0;
}
.beer__wrapper--headline {
  overflow: hidden;
  display: flex;
  justify-content: center;
  background-size: cover;
  position: relative;
}
.beer__wrapper__headline--landing {
  height: 720px;
}
.beer__title {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 85px;
}
.row {
  display: flex;
  flex-wrap: wrap;
}
.right__column {
  box-shadow: 3px 0 7px -4px rgba(0, 0, 0, 0.49);
  display: flex;
  flex: 0 0 20%;
  max-width: 20%;
  height: 1600px;
  margin-bottom: 0;
}
.right__column__title {
  margin-top: 50px;
}
.right__column__content {
  display: flex;
  align-items: start;
  flex-direction: column;
  padding-left: 100px;
  margin-top: 80px;
}
.list__content {
  margin-top: 5px;
}
.details__wrapper {
  display: flex;
  justify-content: center;
  flex: 0 0 80%;
  max-width: 80%;
}
.details__header{
  box-sizing: border-box;
  width: 100%;
}
.details__title::before{
  content: "";
  display: block;
  border-bottom: solid 1px rgba(0,0,0,.5);
  flex: 1;
}
.details__title {
  display: flex;
  text-align: center;
  justify-content: space-between;
  text-transform: uppercase;
  flex-flow: row wrap;
  align-items: center;
  margin-top: 100px;
  margin-left: 10px;
  margin-right: 10px;
}
.details__title::after{
  content: "";
  display: block;
  border-bottom: solid 1px rgba(0,0,0,.5);
  flex: 1;
}
.details__title span {
  margin-left: 5px;
  margin-right: 5px;
}

</style>
