<template>
  <Carousel :autoplay="2555" :wrap-around="true">
    <Slide class="slide" v-for="(slide, index) in slides" :key="index">
      <img class="carousel__image" :src="slide.image" :alt="'Slide ' + (index + 1)" />
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>
  
<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

import slide1 from '@/assets/images/slides/slide1.png';
import slide2 from '@/assets/images/slides/slide2.png';
import slide3 from '@/assets/images/slides/slide3.png';

export default defineComponent({
  name: 'BannerSlides',
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      slides: [
        { image: slide1 },
        { image: slide2 },
        { image: slide3 },
      ],
    };
  },
})
</script>
  
<style lang="scss" scoped>
@import "./BannerSlides.scss";
</style>
  