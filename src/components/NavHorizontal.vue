<template>
  <div id="nav-horizontal">
    <div class="nav-left">
      <div class="bar-container" @click="changeMenuIcon">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
    </div>
    <div class="nav-right">
      <div class="user">
        <div class="user-name">vvkiet</div>
        <img class="user-image" src="../assets/images/vk-logo.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeMenuIcon() {
      var className = event.currentTarget.getAttribute("class");
      var element = document.getElementsByClassName(className);
      element[0].classList.toggle("change");
      document.getElementById('nav-vertical').style.display === "block"?
      document.getElementById('nav-vertical').style.display = "none":
      document.getElementById('nav-vertical').style.display = "block";
    }
  }
};
</script>

<style scoped>
#nav-horizontal {
  width: 100%;
  height: 50px;
  display: flex;
  position: relative;
  border-bottom: 1px solid #ccc;
}

/* Start nav-left */

.nav-left {
  width: 40%;
  height: 100%;
  position: absolute;
  align-items: center;
  display: flex;
  padding-left: 10px;
}

.bar-container{
  display: none;
  /* display: inline-block; */
  cursor: pointer;
}

@media only screen and (max-width: 1024px){
  .bar-container{
    display: inline-block;
    cursor: pointer;
  }
}

.bar1,
.bar2,
.bar3 {
  width: 35px;
  height: 5px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
}

.change .bar1 {
  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
  transform: rotate(-45deg) translate(-9px, 6px);
}

.change .bar2 {
  opacity: 0;
}

.change .bar3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}
/* End nav-left */

.nav-right {
  width: 60%;
  height: 100%;
  position: absolute;
  right: 0px;
}

.user {
  width: 100px;
  min-width: 100px;
  float: right;
  height: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.user-image {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-left: 10px;
}
</style>
