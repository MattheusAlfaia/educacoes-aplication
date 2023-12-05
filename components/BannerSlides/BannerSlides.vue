<template>
  <!-- {{ banners }} -->
  <Carousel :autoplay="4555" :wrap-around="true">
    <Slide class="slide" v-for="(slide, index) in banners" :key="index">
      <div v-if="slide.link_campanha">
        <a :href="slide.link_campanha">
          <img class="carousel__image" :src="slide.link_image" :alt="'Slide ' + (index + 1)" />
        </a>
      </div>
      <div v-else>
        <img class="carousel__image" :src="slide.link_image" :alt="'Slide ' + (index + 1)" />
      </div>
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

import { apiAdmStore, pinia } from "@/stores/getApiAdm";

export default defineComponent({
  name: "BannerSlides",
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  setup() {
    const myStore = apiAdmStore(pinia);
    const banners = ref([]);

    onMounted(async () => {
        await myStore.getBanners();
        banners.value = myStore.banners;
        JSON.parse(JSON.stringify(banners.value));
    });

    return {
      banners,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./BannerSlides.scss";
</style>
