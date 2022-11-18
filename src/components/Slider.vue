<template>
  <div class="w-full">
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
      <carousel :items-to-show="1" class="rounded-3xl overflow-hidden">
        <slide
          v-for="(slide, i) in slides"
          :key="i"
          slideWidth="10"
          class="columns"
        >
          <div class="grid md:grid-cols-2 grid grid-cols-1 gap-20">
            <img
              :src="slide.img"
              :alt="slide.name"
              class="h-80 w-full object-cover rounded-3xl mr-4"
            />
            <Card>
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
import Card from "./Card.vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
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

<style lang="scss" scoped>
</style>