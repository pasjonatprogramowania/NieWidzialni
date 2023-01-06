
<template>
  <div>
    <h1 class="sm:text-3xl text-4xl text-left font-bold text-white">Galeria</h1>
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
        { src: "/NieWidzialni/gallery/1.png" },
        { src: "/NieWidzialni/gallery/2.png" },
        { src: "/NieWidzialni/gallery/3.png" },
        { src: "/NieWidzialni/gallery/4.png" },
        { src: "/NieWidzialni/gallery/5.png" },
        { src: "/NieWidzialni/gallery/6.png" },
        { src: "/NieWidzialni/gallery/7.png" },
        { src: "/NieWidzialni/gallery/8.png" },
        { src: "/NieWidzialni/gallery/9.png" },
        { src: "/NieWidzialni/gallery/10.png" },
        { src: "/NieWidzialni/gallery/11.png" },
        { src: "/NieWidzialni/gallery/12.png" },
        { src: "/NieWidzialni/gallery/13.png" },
        { src: "/NieWidzialni/gallery/14.png" },
        { src: "/NieWidzialni/gallery/15.png" },
        { src: "/NieWidzialni/gallery/16.png" },
        { src: "/NieWidzialni/gallery/17.png" },
        { src: "/NieWidzialni/gallery/18.png" },
        { src: "/NieWidzialni/gallery/19.png" },
        { src: "/NieWidzialni/gallery/20.png" },
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
