<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
    <lefooter></lefooter>
  </div>
</template>

<script>
import navbar from "./components/static/commons/Navbar";
import lefooter from "./components/static/commons/Footer";

export default {
  name: 'App',
  components: {
    lefooter,
    navbar
  }
}
</script>

<style>
#app {
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
  font-family: 'Raleway', sans-serif;
}

html, body {
  margin : 0;
  background-color: #f5f5f5;

}
ul{
  list-style: none;
}
a{
  text-decoration: none;
}
</style>
