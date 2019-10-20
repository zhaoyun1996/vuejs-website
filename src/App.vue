<template>
  <div id="app">
    <nav-vertical></nav-vertical>
    <content-right></content-right>
  </div>
</template>

<script>
import NavVertical from "@/components/NavVertical.vue";
import ContentRight from "@/components/ContentRight.vue";
export default {
  components: {
    "nav-vertical": NavVertical,
    "content-right": ContentRight
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  display: flex;
}
</style>
