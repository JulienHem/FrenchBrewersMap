<template>
  <div class="carousel">
    <slot></slot>
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
      slides: []
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
      if (this.index >= this.slidesCount) {
        this.index = 0
      }
    },
    prev() {
      this.index--
      if (this.index < 0) {
        this.index = this.slidesCount - 1
      }
    }
  },

}
</script>

<style scoped>
.carousel {
  position: relative;
}

.carousel__nav {
  position: absolute;
  top: 50%;
  margin-top: -31px;
  left: 10px;
  width: 63px;
  height: 63px;
  cursor: pointer;
}

.carousel__nav.carousel__next {
  right: 10px;
  left: auto;
}
</style>
