<template>
  <form @submit.prevent="saveMarker()" class="marker-add">
    <h2>Save marker at current position</h2>
    <label for="name">
      <input
        v-model="marker.name"
        type="text"
        name="name"
        placeholder="Marker name"
      />
    </label>
    <button class="save">Save</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      marker: {
        position: this.$store.getters.currPos,
        name: '',
      },
    }
  },

  methods: {
    saveMarker() {
      this.marker.position = this.$store.getters.currPos
      this.$store.dispatch({ type: 'saveMarker', marker: { ...this.marker } })
      this.marker.name = ''
    },
  },
}
</script>

<style lang="scss">
.marker-add {
  margin-top: 1rem;
  margin-bottom: 10px;
}
</style>
