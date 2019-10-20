import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueSilentbox from "vue-silentbox";
import Vuesax from "vuesax";

import "vuesax/dist/vuesax.css";

Vue.use(Vuesax);
Vue.use(VueSilentbox);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
