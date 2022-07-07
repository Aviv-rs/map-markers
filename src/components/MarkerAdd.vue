<template>
  <form @submit.prevent="$emit('markerAdded', marker)" class="marker-add">
    <h3>Save marker at current position</h3>
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
import { markerService } from "../services/marker.service";
export default {
  data() {
    return {
      marker: markerService.getEmptyMarker(),
    };
  },
  props: {
    position: {
      required: false,
      type: Number,
    },
  },
};
</script>

<style></style>
