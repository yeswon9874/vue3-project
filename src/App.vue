<template>
  <NavbarComponent/>
  <div class="container">
    <router-view/>
  </div>
  <transition name="slide">
    <ToastComponent/>
  </transition>
</template>

<script>
import ToastComponent from './components/ToastComponent.vue';
import NavbarComponent from './components/NavbarComponent.vue';
export default {
  components: {
    ToastComponent,
    NavbarComponent,
  },
 
}
</script>

<style scoped>
  .slide-enter-active,
    .slide-leave-active {
      transition: all 0.5s ease;
    }

    .slide-enter-from,
    .slide-leave-to {
      opacity: 0;
      transform: translateY(-30px);
    }

    .slide-enter-to,
    .slide-leave-from {
      opacity: 1;
      transform: translateY(0px);
    }
</style>