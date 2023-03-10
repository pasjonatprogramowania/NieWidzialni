
<template>
  <div>
    <h1 class="px-6 sm:text-3xl text-4xl text-left py-10 font-bold text-white">
      Galeria
    </h1>
    <Carousel
      id="gallery"
      :breakpoints="breakpoints"
      :wrap-around="false"
      v-model="currentSlide"
      class="bg-blue-dark-prim w-full"
    >
      <Slide v-for="slide in gallery" :key="slide">
        <img
          :src="slide.src"
          class="carousel__item h-80 w-full object-contain"
        />
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script>
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
  data() {
    return {
      breakpoints: {
        // 700px and up
        700: {
          itemsToShow: 3.5,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 5,
          snapAlign: "start",
        },
      },
      gallery: [
        { src: "/gallery/1.png" },
        { src: "/gallery/2.png" },
        { src: "/gallery/3.png" },
        { src: "/gallery/4.png" },
        { src: "/gallery/5.png" },
        { src: "/gallery/6.png" },
        { src: "/gallery/7.png" },
        { src: "/gallery/8.png" },
        { src: "/gallery/9.png" },
        { src: "/gallery/10.png" },
        { src: "/gallery/11.png" },
        { src: "/gallery/12.png" },
        { src: "/gallery/13.png" },
        { src: "/gallery/14.png" },
        { src: "/gallery/15.png" },
        { src: "/gallery/16.png" },
        { src: "/gallery/17.png" },
        { src: "/gallery/18.png" },
        { src: "/gallery/19.png" },
        { src: "/gallery/20.png" },
      ],
      currentSlide: 0,
    };
  },
  methods: {
    slideTo(val) {
      this.currentSlide = val;
    },
  },
});
</script>
