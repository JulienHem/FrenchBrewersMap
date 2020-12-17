<template>
  <div>

    <div class="beer__banner beer__wrapper beer__wrapper--headline beer__wrapper__headline--landing">
      <h1 class="beer__title">{{ regionName }}</h1>
    </div>

    <h1>BRASSERIE DE LA REGION</h1>


    <Carousel>
      <carousel-slides>
        <div v-for="logos in breweryLogos.slice(0,5)">
          <img :src="logos">
        </div>
      </carousel-slides>
      <carousel-slides>
        <div v-for="logos in breweryLogos.slice(5,10)">
          <img :src="logos">
        </div>
      </carousel-slides>
      <carousel-slides>
        <div v-for="logos in breweryLogos.slice(10,15)">
          <img :src="logos">
        </div>
      </carousel-slides>
      <carousel-slides>
        <div v-for="logos in breweryLogos.slice(15,20)">
          <img :src="logos">
        </div>
      </carousel-slides>
    </Carousel>

    <div class="region__container">
      <div v-for="names in breweryName">
         {{ names }}
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "../carousel/Carousel";
import CarouselSlides from "../carousel/CarouselSlides";
const axios = require('axios');

export default {
  name: "brewery_region",
  components: {
    Carousel,
    CarouselSlides
  },
  data() {
    return {
      brasserie: [],
      regionName: [],
      breweryName: [],
      breweryLogos: [],
    }
  },
  mounted() {

    axios
      .get("http://127.0.0.1:8000/api/breweries?region=" + this.$route.params.region)
      .then(response => (
        this.brasserie = response.data["hydra:member"].map(r => {
          this.regionName = r.region
          this.breweryName.push(r.name)
          this.breweryLogos.push(r.breweryImg)
        }))
      )
      .catch(e => {
        console.log(e)
      })

  },

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');

.region__container {
  margin-top: 50px;
}

.beer__banner {
  background-image: url("../../assets/static/breweriesbanner.png");
}

.beer__wrapper {
  width: 100%;
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
  text-transform: uppercase;
}

</style>
