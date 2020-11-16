<template>
  <div>

    <div class="banner__wrapper breweries__img banner__wrapper--headline banner__wrapper__headline--landing">
      <h1 class="banner__title">LA BRASSERIE</h1>
    </div>

    <div class="img__block">
      <h1 class="brewery__title">La Débauche</h1>
      <img src="../../assets/brewerslogo/débauche__logo2.png" alt="LogoBrasserie">
    </div>

    <div class="blocks__wrapper">
      <div class="block__cards">
        <div class="blocks__title"></div>
        <div class="blacks__content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolorum ducimus impedit ipsum libero neque nisi
          officia optio, quibusdam quos recusandae rem sint? At eos et mollitia numquam officia porro!
        </div>
      </div>

      <div class="block__cards">
        <div class="block_title"></div>
        <div class="blocks_content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam autem
          commodi cum dolor eaque excepturi incidunt laboriosam laborum libero maiores natus porro, quam quas
          repellendus sit unde vitae voluptatibus.
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
export default {
  name: "breweries_details",
  data() {
    return {
      beers: 10
    }
  }
}
</script>

<style scoped>
.breweries__img {
  background-image: url("../../../../brewersmap/src/assets/home/breweriesbanner.png");
}

.banner__wrapper {
  width: 100%;
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
  width: 450px;
  height: auto;
}

.blocks__wrapper {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
}

.block__cards {
  background-color: white;
  min-height: 300px;
  max-width: 400px;
  border-top: solid 1px #5FC85C;
  border-bottom: solid 1px #5FC85C;
  box-shadow: 0px 3px 5px 0px rgba(161, 161, 161, 0.5);
}

.selectedBeers__wrapper {
  text-align: center;
}
.select__beer__box{
  border-top: solid 1px #5FC85C;
  border-bottom: solid 1px #5FC85C;
  box-shadow: 0px 3px 5px 0px rgba(161, 161, 161, 0.5);

}
.beer__list {
  display: inline;
  margin-right: 10px;
}
.beer__list__title {
  font-size: 60px;
}


</style>
