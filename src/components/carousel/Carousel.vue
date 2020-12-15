<template>
  <div class="carousel_box">

  <div class="carousel__container">
    <slot></slot>
  </div>

  <ArrowRightIcon
      class="carousel__nav carousel__next"
      @click.prevent="next"
    />
    <ArrowLeftIcon
      class="carousel__nav carousel__prev"
      @click.prevent="prev"
    />
  </div>

</template>

<script>
import ArrowRightIcon from 'vue-material-design-icons/ArrowRight.vue';
import ArrowLeftIcon from 'vue-material-design-icons/ArrowLeft.vue';

export default {
  name: "carousel",
  components: {
    ArrowLeftIcon,
    ArrowRightIcon
  },
  data() {
    return {
      index: 0,
      slides: [],
      direction: null,
    }
  },
  computed: {
    slidesCount() {
      return this.slides.length
    }
  },
  mounted() {
    this.slides = this.$children
    this.slides.forEach((slide, i) => {
      slide.index = i
    })
  },
  methods: {
    next() {
      this.index++
      this.direction = 'right'
      if( this.index >= this.slidesCount) {
        this.index = 0
      }

    },
    prev() {
      this.index--
      this.direction = 'left'
    if(this.index < 0) {
      this.index = this.slidesCount - 1
    }
    }
  },

}
</script>

<style scoped>
.carousel__container{
  margin-right: auto;
  margin-left: auto;
  max-width: 1250px;
  overflow: hidden;
  position: relative;
}

.carousel__nav {
  position: absolute;
  top: 50%;
  margin-top: -31px;
  width: 63px;
  height: 63px;
  cursor: pointer;
}
.carousel__nav.carousel__next {
  right: 10px;
  left: auto;
}
.carousel__next {
  margin-right: 230px;
}
.carousel__prev {
  margin-left: 270px;
}

.carousel_box{
  position: relative;
}
</style>
