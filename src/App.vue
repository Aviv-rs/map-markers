<template>
  <header>
    <div class="wrapper">
      <NavBar />
      <RouterView />
    </div>
  </header>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  async created() {},
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
@import "@/assets/style/style.scss";
</style>
