<template>
  <section class="map-page flex column align-center">
    <MarkerAdd :position="currPos"></MarkerAdd>
    <Map @currPos="onChangePos($event)"></Map>
  </section>
</template>

<script>
import Map from "@/components/Map.vue";
import MarkerAdd from "../components/MarkerAdd.vue";

export default {
  data() {
    return {
      currPos: {},
    };
  },
  components: {
    Map,
    MarkerAdd,
  },
  methods: {
    onChangePos(pos) {
      this.currPos = pos;
    },
  },
};
</script>

<style>
.map-page {
  min-height: 100vh;
}
</style>
