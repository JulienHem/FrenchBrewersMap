<template>
<div>
 <h1>{{ regionName }}</h1>
</div>
</template>

<script>
const axios = require('axios');

export default {
  name: "brewery_region",
  data () {
    return {
      brasserie: [],
      regionName: [],
    }
  },
  mounted () {

    axios
      .get("http://127.0.0.1:8000/api/breweries?region=" + this.$route.params.region )
      .then(response => (
          this.brasserie = response.data["hydra:member"].map(r => {
         this.regionName = r.region
          }))
      )
      .catch(e => {
        console.log(e)
      })

  },

}
</script>

<style scoped>

</style>
