<template>
  <header>
    <div>
      <nav class="nav-bar">Map markers</nav>
    </div>
  </header>
</template>
<script>
import { RouterLink, RouterView } from "vue-router";
import { sessionService } from "../services/session.service";

export default {
  data() {
    return {
      user: "",
    };
  },
  async created() {
    this.user = await sessionService.loadFromStorage("currUser");
  },
};
</script>

<style lang="scss">
.nav-bar {
  display: flex;
  text-align: center;
  border-bottom: 2px solid black;
  justify-content: space-around;
  margin-bottom: 10px;
}
</style>
