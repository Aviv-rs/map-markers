<template>
  <header class="app-header">
    <h1>Map markers</h1>
    <div class="logo">
      <img src="@/assets/img/logo.png" alt="logo" />
    </div>
  </header>
</template>
<script>
export default {}
</script>

<style lang="scss">
.app-header {
  display: flex;
  text-align: center;
  border-bottom: 2px solid black;
  height: 60px;
  padding: 10px;
  gap: 10px;
  color: rgba($color: #fff, $alpha: 0.8);
  background-image: url('@/assets/img/header-background.webp');
}
</style>
