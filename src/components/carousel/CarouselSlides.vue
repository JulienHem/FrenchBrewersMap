<template>
  <transition :name="transition">
    <div  v-show="visible">
        <div class="slides__row">
          <div class="slide__list">
            <slot></slot>
          </div>
        </div>
    </div>
  </transition>
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
    transition () {
      if(this.$parent.direction) {
        return 'slide-' + this.$parent.direction

      }
    },
    visible() {
      return this.index === this.$parent.index
    }
  }
}
</script>

<style scoped>
.slides__container{
  margin-right: auto;
  margin-left: auto;
  max-width: 1250px;
}

.slides__row{
  display: flex;
  width: 100%;
}
.slide__list {
  display: flex;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
.slide-right-enter-active {
  animation: slideRightIn .5s;
  justify-content: center;
  position: absolute;
  top: 0;

}

.slide-right-leave-active {
  animation: slideRightOut .5s;
  justify-content: center;
  top: 0;

}

@keyframes slideRightIn {
  from { transform: translateX(100%) }
  to { transform: translateX(0) }
}

@keyframes slideRightOut {
  from { transform: translateX(0) }
  to { transform: translateX(-100%) }
}

.slide-left-enter-active {
  animation: slideLeftIn .5s;
  position: absolute;
  top: 0;

}

.slide-left-leave-active {
  animation: slideLeftOut .5s;
}

@keyframes slideLeftIn {
  from { transform: translateX(-100%) }
  to { transform: translateX(0) }
}

@keyframes slideLeftOut {
  from { transform: translateX(0) }
  to { transform: translateX(100%) }
}

</style>
