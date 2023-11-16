<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" :to="{name: 'Home'}">
      Yeswon
    </router-link>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-link" :to="{name: 'Todos'}">
            Todos
          </router-link>
        </li>
      </ul>
  </nav>
  <div class="container">
    <router-view/>
  </div>
  <ToastComponent 
    v-if="showToast"
    :message="toastMessage"
    :type="toastAlertType"
  />
</template>

<script>
import ToastComponent from './components/ToastComponent.vue';
import { useToast } from './composables/toast';
export default {
  components: {
    ToastComponent
  },
  setup() {
    const { 
      toastMessage,
      toastAlertType,
      showToast,
      triggerToast
    } = useToast();

    console.log(showToast.value);

    return {
      toastMessage,
      toastAlertType,
      showToast,
      triggerToast
    }
  }
}
</script>

<style scoped>

</style>