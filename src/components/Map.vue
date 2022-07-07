<template>
  <div class="map">
    <GMapMap
      :center="center"
      :zoom="7"
      map-type-id="terrain"
      style="width: 60vw; height: 550px"
      @click="changeMarkerPos($event)"
    >
      <GMapCluster>
        <GMapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center = m.position"
          :title="m.name"
        />
      </GMapCluster>
      <GMapCluster>
        <GMapMarker
          :position="marker.position"
          :draggable="true"
          :icon="'https://developers.google.com/maps/documentation/javascript/examples/full/images/info-i_maps.png'"
          @click="center = marker.position"
        />
      </GMapCluster>
    </GMapMap>
  </div>
</template>

<script>
export default {
  beforeMount() {
    this.$store.commit({
      type: 'setCurrPos',
      pos: this.center,
    })
    this.markers = this.$store.getters.markers
  },
  data() {
    return {
      center: { lat: 32.0749831, lng: 34.9120554 },
      marker: { position: { lat: 32.0749831, lng: 34.9120554 } },
      markers: [],
    }
  },
  methods: {
    changeMarkerPos(ev) {
      this.marker.position = ev.latLng
      this.$store.commit({
        type: 'setCurrPos',
        pos: ev.latLng,
      })
    },
  },
}
</script>

<style></style>
