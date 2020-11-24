<template>
  <nav>
    <div class="nav__wrap">
      <div class="logo__title">
        <a href="/"><img src="../../../assets/logos/logonav.png" alt="logonav" ></a>
      </div>
      <ul class="nav__list">
        <li class="nav__item"><router-link to="/beers">Bières</router-link></li>
        <li class="nav__item"><router-link to="/breweries">Brasseries</router-link></li>
        <li class="nav__item"><router-link  to="/contact">Contact</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
const axios = require('axios');

export default {
  name: "navbar",
  data () {
    return {
      breweryid: 0,
    }
  },
  mounted() {
    axios.get('https://api.untappd.com/v4/search/brewery?q=france&client_id=E0C207E437A71ED9F2DA223641373A625AC7CA76&client_secret=3D25A234D553B4A7D9167199CA555D2216FF7F2C')
      .then(response => (response.data.response.brewery.items.forEach(r => {
        this.breweryid = r.brewery.brewery_id
      }))
    )
  }
}
</script>

<style scoped>
a {
  padding: 0 12px;
  color: white;
}
nav {
  background-color: #ffffff;
}
.nav__wrap {
  height: 71px;
  margin-right: 460px;
  margin-left: 400px;
  line-height: 35px;
}
.nav__list {
  position: relative;
  display: inline-block;
  top: inherit;
  left: inherit;
  right: inherit;
  bottom: inherit;
  overflow-y: inherit;
  float: right;
}

.logo__title {
  color: #5fc85c;
  display: inline-block;
}

.nav__item {
  display: inline-block;
  color: #5FC85C;
}
a {
  color: #5FC85C;
}



</style>
