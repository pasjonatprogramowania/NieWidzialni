<template>
  <div class="w-full rounded-3xl">
    <h1
      class="sm:text-4xl text-left text-5xl sm:py-20 py-20 font-bold text-white"
    >
      Zdjecia z projektu
    </h1>
    <Carousel :wrapAround="true" :breakpoints="breakpoints" :transition="500">
      <Slide v-for="(g, i) in gallery" :key="i" slideWidth="10" class="columns">
        <img :src="g" class="h-80 w-full object-cover" />
      </Slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import i1 from "../assets/slider/1.jpg";
import i2 from "../assets/slider/2.jpg";
import i3 from "../assets/slider/3.jpg";
import i4 from "../assets/slider/4.jpg";
const gallery = [i1, i2, i3, i4];
const breakpoints = {
  // 700px and up
  700: {
    itemsToShow: 1,
  },
  // 1024 and up
  1024: {
    itemsToShow: 2.5,
  },
};
</script>

<style scoped>
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>