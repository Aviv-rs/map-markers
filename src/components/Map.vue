<template>
  <div class="map">
    <GMapMap
      :center="center"
      :zoom="7"
      map-type-id="terrain"
      style="width: 50vw; height: 50vw"
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
    </GMapMap>
  </div>
</template>

<script>
export default {
  data() {
    return {
      center: { lat: 32.0749831, lng: 34.9120554 },
      markers: [
        {
          position: {
            lat: 32.0749831,
            lng: 34.9120554,
          },
        }, // Along list of clusters
      ],
    };
  },
};
</script>

<style></style>
