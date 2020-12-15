<template>
  <div>

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
    </Carousel>
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
.carousel__imgs{
  margin-right: 10px;
}
</style>
