
<template>
  <div>
    <h1 class="sm:text-3xl text-left text-xl py-10 font-bold text-white px-6">
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
        <img :src="slide" class="carousel__item h-80 w-full object-contain" />
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
        "/gallery/gallery_1.png",
        "/gallery/gallery_2.png",
        "/gallery/gallery_3.png",
        "/gallery/gallery_4.png",
        "/gallery/gallery_5.png",
        "/gallery/gallery_6.png",
        "/gallery/gallery_7.png",
        "/gallery/gallery_8.png",
        "/gallery/gallery_9.png",
        "/gallery/gallery_10.png",
        "/gallery/gallery_11.png",
        "/gallery/gallery_12.png",
        "/gallery/gallery_13.png",
        "/gallery/gallery_14.png",
        "/gallery/gallery_15.png",
        "/gallery/gallery_16.png",
        "/gallery/gallery_17.png",
        "/gallery/gallery_18.png",
        "/gallery/gallery_19.png",
        "/gallery/gallery_20.png",
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
