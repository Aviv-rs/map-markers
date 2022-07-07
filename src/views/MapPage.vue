<template>
  <section class="map-page flex column align-center">
    <MarkerAdd></MarkerAdd>
    <Map v-if="!isLoadingMarkers"></Map>
  </section>
</template>

<script>
import Map from '@/components/Map.vue'
import MarkerAdd from '../components/MarkerAdd.vue'

export default {
  async created() {
    await this.$store.dispatch({ type: 'loadMarkers' })
    this.isLoadingMarkers = false
  },
  data() {
    return {
      isLoadingMarkers: true,
    }
  },
  components: {
    Map,
    MarkerAdd,
  },
}
</script>

<style>
.map-page {
  min-height: 100vh;
  background: linear-gradient(to right, #00467f, #a5cc82);
}
</style>
