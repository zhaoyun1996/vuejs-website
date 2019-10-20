<template>
  <div id="container" ref="ref-container" class="container">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#container {
  width: 100%;
  height: calc(100% - 50px);
}
</style>
