<template>
  <div id="nav-vertical">
    <div id="logo" class="nav-logo">
      <div class="logo">
        <img class="nav-img" src="../assets/images/vk-logo.png" />
        <div class="nav-title">vvkiet</div>
      </div>
    </div>
    <div id="home" class="nav-item">
      <router-link class="link-disabled" to="/">Trang chủ</router-link>
    </div>
    <div id="image" class="nav-item">
      <router-link class="link-disabled" to="/image">Ảnh đẹp</router-link>
    </div>
    <div id="toeic" class="nav-item">
      <router-link class="link-disabled" to="/toeic">Toeic</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
        return {
          navId: ""
        }
    },
    methods: {
      /**
       * Hàm thực hiện add class active cho nav sau khi load trang lần đầu
       * Created: vvkiet - 20/10/2019
       */
      navActive(){
        var element = document.getElementById(this.navId);
        element.classList.add("nav-active");
      },
      /**
       * Hàm thực hiện add class active cho nav sau khi click vào từng item của nav
       * Created: vvkiet - 20/10/2019
       */
      clickNavItem(){
        var className = document.getElementsByClassName("nav-item");
        for (var i = 0; i < className.length; i++) {
          className[i].classList.remove("nav-active");
        }
        var navId = event.currentTarget.getAttribute("id");
        var element = document.getElementById(navId);
        element.classList.add("nav-active");
      }
    },
    mounted(){
      // Kiểm tra path của trang
      this.navId = window.location.pathname !== "/"?window.location.pathname.split('/')[1]:"home";
      // Gọi hàm active của nav lần đầu tiên
      this.navActive();
      // Lấy danh sách các nav-item
      var className = document.getElementsByClassName("nav-item");
      // Gán event active cho từng nav-item
      for (var i = 0; i < className.length; i++) {
        className[i].addEventListener("click", this.clickNavItem);
      }
    }
  }
</script>

<style scoped>
#nav-vertical {
  width: 200px;
  min-width: 200px;
  height: 100%;
  background-color: #041847;
  color: #fff;
}

#logo {
  width: 100%;
  height: 50px;
}

.nav-logo {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.nav-logo img {
  width: 32px;
  height: 32px;
  margin-left: 10px;
  border-radius: 50%;
}

.nav-logo .nav-title {
  font-weight: bold;
  margin-left: 5px;
}

.logo {
  display: flex;
  align-items: center;
}

.nav-item {
  height: 46px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.nav-item:hover {
  background-color: #293A62;
}

.nav-item > a{
  padding-left: 10px;
  width: 100%;
  line-height: 46px;
}

.link-disabled{
  color: #B4BAC8;
}

.nav-active {
  background-color: #293A62;
}

@media only screen and (max-width: 1024px){
  #nav-vertical{
      display: none;
  }
}
</style>