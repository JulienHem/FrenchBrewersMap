<template>
  <div>

    <div class="banner__wrapper breweries__img banner__wrapper--headline banner__wrapper__headline--landing">
      <h1 class="banner__title">LA BRASSERIE</h1>
    </div>

    <div>

      <div class="img__block">
        <img :src="brasserie.detailsImg" alt="imageofbrewery">
      </div>

      <div class="description__wrapper">

        <div class="description__box">
          <div class="brewery__name">{{ brasserie.name }}</div>
          <h3 class="about__brewery">A propos de la brasserie</h3>
          <div class="description__content__landing">
            <div class="description__content__one">
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aspernatur atque consectetur delectus distinctio dolor eius ex impedit iste itaque nemo nihil nisi non nostrum, placeat recusandae suscipit unde veniam.</span>
            </div>
            <div class="description__content__two">
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad blanditiis delectus distinctio dolor eos expedita hic incidunt reiciendis repellat. Consequatur, delectus et explicabo laborum nam nobis sequi sit ut veritatis.
        </span>
            </div>
          </div>
        </div>

        <div class="brewery__picture">
          <img src="../../assets/breweries/ladébauche.png" alt="brewerypic" height="450px">
        </div>


      </div>
    </div>


    <div class="selectedBeers__wrapper">
      <h1 class="beer__list__title">Bières de la brasserie</h1>
      <div class="select__beer__box">
        <div class="beer__list" v-for="n in beers">
          <img :src="'https://picsum.photos/id/' + n + '/100/200'" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require('axios');

export default {
  name: "breweries_details",
  data() {
    return {
      beers: 10,
      brasserie: [],
      imgs: "",
    }
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8000" + this.$route.params.id)
      .then(response => (this.brasserie = response.data)
      )
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

.img__block {
  text-align: center;
  font-size: 25px;
}

.img__block img {
  height: 150px;
  width: auto;
  margin-top: 50px;
}

.beer__list__title {
  font-size: 60px;
}

.description__wrapper {
  display: flex;
  flex-direction: row;
  padding: 50px 100px 20px 150px;
  font-family: 'Playfair Display', serif;
}

.brewery__picture {
  padding: 50px 0 20px 100px;
}

.description__box {
  padding-right: 100px;
}

.brewery__name {
  text-transform: uppercase;
  font-weight: 90;
  font-size: 80px;
}

.brewery__name {
  margin-bottom: 0;
  margin-top: 0;
}

.about__brewery {
  margin-top: 0;
  letter-spacing: 4px;
}

.description__content__landing {
  display: flex;
  flex-direction: row;
  text-align: start;
  padding-top: 100px;
}

.description__content__one {
  max-width: 400px;
  padding-right: 60px;
}

.description__content__two {
  max-width: 400px;
}

.selectedBeers__wrapper {
  text-align: center;
}

.select__beer__box {
  border-top: solid 1px #5FC85C;
  border-bottom: solid 1px #5FC85C;
  box-shadow: 0px 3px 5px 0px rgba(161, 161, 161, 0.5);
}

.beer__list {
  display: inline;
  margin-right: 10px;
}

.beer__list__title {
  font-weight: 90;
  font-family: 'Playfair Display', serif;

}

</style>
