<template>
  <div id="image-container" ref="ref-image-container" class="image-container">
    <!-- <div v-for="(image, index) in images" :key="index" class="image-list">
      <img :src="image.src" :alt="index" :title="index" class="image" />
    </div>-->
    <div>
      <silentbox-group>
        <silentbox-item
          v-for="(image, index) in images"
          :key="index"
          :src="image.src"
          :description="image.caption"
        >
          <img :src="image.src" />
        </silentbox-item>
      </silentbox-group>
    </div>

    <!-- 
Or you could use template for only one single item.
    -->

    <!-- <silentbox-single
      src="https://www.youtube.com/watch?v=Mmwv94WKmnI"
      description="The Arctic Light by Terje Sorgjerd"
    >
      <img src="images/image007.jpg" width="200px" />
    </silentbox-single>

    <silentbox-single
      src="https://www.youtube.com/watch?v=Mmwv94WKmnI"
      description="The Arctic Light by Terje Sorgjerd"
    >-->
    <!-- If you leave this slot empty, thumbnail from vimeo or youtube will be used instead -->
    <!-- </silentbox-single> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      images: [],
      errors: [],
      user_id: "170029114@N04",
      api_key: "ca370d51a054836007519a00ff4ce59e",
      per_page: 10,
      bottom: false,
      page: 0
    };
  },
  watch: {
    bottom(bottom) {
      if (bottom) {
        this.addBeer();
      }
    }
  },
  created() {
    let me = this;
    me.addBeer();
  },
  mounted() {
    let me = this;
    this.$refs["ref-image-container"].addEventListener("scroll", () => {
      me.bottom = me.bottomVisible();
    });
  },
  methods: {
    bottomVisible() {
      const scrollY = this.$refs["ref-image-container"].scrollTop;
      const visible = this.$refs["ref-image-container"].clientHeight;
      const pageHeight = this.$refs["ref-image-container"].scrollHeight;
      const bottomOfPage = visible + scrollY >= pageHeight - 500;
      return bottomOfPage || pageHeight < visible;
    },
    async addBeer() {
      let me = this;
      me.$vs.loading();
      me.page++;
      await axios
        .get(
          "https://api.flickr.com/services/rest/?method=flickr.photos.search&user_id=" +
            this.user_id +
            "&api_key=" +
            this.api_key +
            "&page=" +
            this.page +
            "&per_page=" +
            this.per_page +
            "&format=json&nojsoncallback=1"
        )
        .then(response => {
          let dataArray = response.data.photos.photo;
          dataArray.forEach(element => {
            me.images.push({
              thumb:
                "http://farm" +
                element.farm +
                ".staticflickr.com/" +
                element.server +
                "/" +
                element.id +
                "_" +
                element.secret +
                ".jpg",
              src:
                "http://farm" +
                element.farm +
                ".staticflickr.com/" +
                element.server +
                "/" +
                element.id +
                "_" +
                element.secret +
                ".jpg",
              caption: "Ảnh " + element.id,
              // caption: 'caption to display. receive <html> <b>tag</b>', // Optional
              srcset: "..."
            });
            me.$vs.loading.close();
          });
        });
    }
  }
};
</script>

<style scoped>
#image-container {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding: 10px;
}

.image-list {
  width: 33.33333333%;
}

.image {
  width: 100%;
}

#filters {
  width: 500px;
  margin: 30px auto;
}

#filters span {
  margin: 15px;
}

img {
  margin: 20px;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.4s ease;
}

@media only screen and (max-width: 1024px){
  img {
    width: calc(100% - 40px);
    margin: 20px;
    border-radius: 3px;
    cursor: pointer;
    transition: all 0.4s ease;
  }
}
</style>
