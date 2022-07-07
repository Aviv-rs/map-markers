<template>
  <section class="map-page flex justify-center align-center">
    <Map></Map>
  </section>
</template>

<script>
import Map from "@/components/Map.vue";
export default {
  components: {
    Map,
  },
};
</script>

<style>
.map-page {
  min-height: 100vh;
}
</style>
