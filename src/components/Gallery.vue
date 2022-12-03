
<template>
  <div>
    <h1 class="sm:text-4xl text-left text-5xl py-10 font-bold text-white px-6">
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
import g1 from "../assets/gallery/gallery_1.png";
import g2 from "../assets/gallery/gallery_2.png";
import g3 from "../assets/gallery/gallery_3.png";
import g4 from "../assets/gallery/gallery_4.png";
import g5 from "../assets/gallery/gallery_5.png";
import g6 from "../assets/gallery/gallery_6.png";
import g7 from "../assets/gallery/gallery_7.png";
import g8 from "../assets/gallery/gallery_8.png";
import g9 from "../assets/gallery/gallery_9.png";
import g10 from "../assets/gallery/gallery_10.png";
import g11 from "../assets/gallery/gallery_11.png";
import g12 from "../assets/gallery/gallery_12.png";
import g13 from "../assets/gallery/gallery_13.png";
import g14 from "../assets/gallery/gallery_14.png";
import g15 from "../assets/gallery/gallery_15.png";
import g16 from "../assets/gallery/gallery_16.png";
import g17 from "../assets/gallery/gallery_17.png";
import g18 from "../assets/gallery/gallery_18.png";
import g19 from "../assets/gallery/gallery_19.png";
import g20 from "../assets/gallery/gallery_20.png";
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
        g1,
        g2,
        g3,
        g4,
        g5,
        g6,
        g7,
        g8,
        g9,
        g10,
        g11,
        g12,
        g13,
        g14,
        g15,
        g16,
        g17,
        g18,
        g19,
        g20,
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
