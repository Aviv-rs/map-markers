<template>
  <div class="map">
    <GMapMap
      :center="center"
      :zoom="7"
      map-type-id="terrain"
      style="width: 50vw; height: 600px"
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
  data() {
    return {
      center: { lat: 32.0749831, lng: 34.9120554 },
      marker: { position: { lat: 32.0749831, lng: 34.9120554 } },
      markers: [
        // {
        //   position: {
        //     lat: 32.0749831,
        //     lng: 34.9120554,
        //   },
        // },
      ],
    };
  },
  methods: {
    changeMarkerPos(ev) {
      this.marker.position = ev.latLng;
      this.$emit("currPos", ev.latLng);
    },
  },
};
</script>

<style></style>
