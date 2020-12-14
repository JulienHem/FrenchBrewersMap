<template>
<div class="slides__wrapper" v-show="visible">
  <slot ></slot>
</div>
</template>

<script>
export default {
  name: "carouselslides",
  data() {
    return {
      index: 0
    }
  },
  computed: {
    visible () {
      return this.index === this.$parent.index
    }
  }
}
</script>

<style scoped>
.slides__wrapper{
  display: flex;
}

</style>
