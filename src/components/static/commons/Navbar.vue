<template>
  <nav>
    <div class="nav__wrap">
      <div class="logo__title">
        <a href="/"><img src="../../../assets/logos/logonav.png" alt="logonav"></a>
      </div>
      <ul class="nav__list">
        <li class="nav__item">
          <router-link to="/beers">Bières</router-link>
        </li>
        <li class="nav__item">
          <router-link to="/contact">Contactez-nous</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
const axios = require('axios');

export default {
  name: "navbar",
  data() {
    return {
      breweryid: null,
      id: null,
    }
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/breweries?page=1")
      .then(response => (this.info = response.data["hydra:member"].forEach(r => {
        return r.name
      })))
  },
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
