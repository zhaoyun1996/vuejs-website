<template>
  <div id="content-right">
    <nav-horizontal></nav-horizontal>
    <container></container>
  </div>
</template>

<script>
import NavHorizontal from "@/components/NavHorizontal.vue";
import Container from "@/components/Container.vue";
export default {
  components: {
    "nav-horizontal": NavHorizontal,
    "container": Container
  }
};
</script>

<style scoped>
#content-right {
  width: calc(100% - 200px);
  height: 100%;
}


@media only screen and (max-width: 1024px){
  #content-right{
    width: 100%;
  }
}
</style>
