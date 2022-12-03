<template>
  <div>
    <div>
      <h1
        class="
          sm:text-4xl
          text-left text-5xl
          sm:py-20
          py-20
          font-bold
          text-white
        "
      >
        Widzialny zespół
      </h1>
      <carousel :transition="500" :breakpoints="breakpoints" :wrapAround="true">
        <slide v-for="(slide, i) in slides" :key="i">
          <div class="grid grid-cols-1 gap-5 p-12 carousel__item">
            <img
              :src="slide.img"
              :alt="slide.name"
              class="h-80 w-full object-cover rounded-lg"
            />
            <Card class="rounded-lg">
              <template #header>{{ slide.name }}</template>
              <template #description>{{ slide.description }}</template>
            </Card>
          </div>
        </slide>
        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>
  </div>
</template>

<script setup>
const breakpoints = {
  700: {
    itemsToShow: 1,
    snapAlign: "center",
  },
  // 1024 and up
  1024: {
    itemsToShow: 2,
    snapAlign: "start",
  },
  1400: {
    itemsToShow: 3,
    snapAlign: "start",
  },
};
import Card from "./Card.vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import i1 from "../assets/slider/1.jpg";
import i2 from "../assets/slider/2.jpg";
import i3 from "../assets/slider/3.jpg";
import i4 from "../assets/slider/4.jpg";
const slides = [
  {
    img: i1,
    name: "siema",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet perspiciatis vel cumque eligendi numquam hic modi, facilis aliquam omnis ratione, fugit quam, id illum cum aspernatur deleniti? Sint, voluptate quas!",
  },
  {
    img: i2,
    name: "siema",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet perspiciatis vel cumque eligendi numquam hic modi, facilis aliquam omnis ratione, fugit quam, id illum cum aspernatur deleniti? Sint, voluptate quas!",
  },
  {
    img: i3,
    name: "siema",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet perspiciatis vel cumque eligendi numquam hic modi, facilis aliquam omnis ratione, fugit quam, id illum cum aspernatur deleniti? Sint, voluptate quas!",
  },
  {
    img: i4,
    name: "siema",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet perspiciatis vel cumque eligendi numquam hic modi, facilis aliquam omnis ratione, fugit quam, id illum cum aspernatur deleniti? Sint, voluptate quas!",
  },
];
</script>

<style scoped>
@media screen and (min-width: 1400px) {
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
  .carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95);
  }

  .carousel__slide--next {
    opacity: 1;
    transform: rotateY(0) scale(1.1);
  }
  .carousel__slide--next ~ .carousel__slide {
    transform: rotateY(20deg) scale(0.9);
  }

  .carousel__slide--active {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
  }
}
</style>