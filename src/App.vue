<template>
  <header>
    <div class="wrapper">
      <AppHeader />
      <RouterView />
    </div>
  </header>
</template>

<script>
import AppHeader from './components/AppHeader.vue'

export default {
  async created() {},
  components: {
    AppHeader,
  },
}
</script>

<style lang="scss">
@import '@/assets/style/style.scss';
</style>
