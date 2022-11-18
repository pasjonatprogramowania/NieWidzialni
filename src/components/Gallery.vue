
<template>
  <div>
    <h1 class="sm:text-4xl text-left text-5xl py-10 font-bold text-white px-6">
      Galeria
    </h1>
    <Carousel
      id="gallery"
      :items-to-show="1"
      :wrap-around="false"
      v-model="currentSlide"
      class="bg-blue-dark-prim w-full"
    >
      <Slide v-for="slide in gallery" :key="slide">
        <img :src="slide" class="carousel__item h-80 w-full object-contain" />
      </Slide>
    </Carousel>

    <Carousel
      id="thumbnails"
      :items-to-show="4"
      :wrap-around="true"
      v-model="currentSlide"
      ref="carousel"
    >
      <Slide v-for="slide in gallery" :key="slide">
        <img
          :src="slide"
          class="carousel__item h-20 w-full object-cover"
          @click="slideTo(slide - 1)"
        />
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import i1 from "../assets/slider/1.jpg";
import i2 from "../assets/slider/2.jpg";
import i3 from "../assets/slider/3.jpg";
import i4 from "../assets/slider/4.jpg";

import { defineComponent } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Gallery",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    gallery: [i1, i2, i3, i4],
    currentSlide: 0,
  }),
  methods: {
    slideTo(val) {
      this.currentSlide = val;
    },
  },
});
</script>
