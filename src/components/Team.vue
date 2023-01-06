<template>
  <div>
    <div>
      <h1
        class="
          sm:text-3xl
          text-4xl text-left
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
          <div class="grid grid-cols-1 gap-5 sm:p-2 carousel__item">
            <img
              :src="slide.img"
              :alt="slide.name"
              class="h-80 object-cover rounded-lg"
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
import Card from "./Card.vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
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
const slides = [
  {
    img: "slider/1.jpg",
    name: "Martyna Muc",
    description:
      "W projekcie pełnię wiele ról, jednak jedną z ważniejszych jest prowadzenie social mediów, a konkretnie TikToka.",
  },
  {
    img: "slider/2.jpg",
    name: "Wiktoria Peryt",
    description:
      "Razem z Sylwią dbamy o to, żeby wszystko było jednocześnie dopracowane nie tylko merytorycznie, ale i estetycznie.",
  },
  {
    img: "slider/3.jpg",
    name: "Kornelia Zgorzelak",
    description:
      "W czasie wolnym pracuję oraz pomagam w schronisku. W projekcie zajmuję się researchem, kontaktem z instytucjami oraz prowadzeniem TikToka.",
  },
  {
    img: "slider/4.jpg",
    name: "Livia Purgał",
    description:
      "W projekcie jestem odpowiedzialna za podtrzymywanie ducha: robię memy na social media. W wolnym czasie (którego nie ma) szydełkuję i rysuję.",
  },
  {
    img: "slider/5.jpg",
    name: "Lena Duszyk",
    description:
      "Hej, jestem liderką projektu. Zajmuję się niedociągnięciami, kontaktem z instytucjami i partnerami, pilnuję terminów",
  },
  {
    img: "slider/6.jpg",
    name: "Paweł Szewczyk",
    description:
      "W chwili wolnej działam nad stroną projektu zmieniając design czy dodając nowe opcje, jak na matematycznego i informatycznego świra przystało.",
  },
  {
    img: "slider/7.jpg",
    name: "Sylwia Nachyła",
    description:
      "Wygląd social mediów, posty, tła relacji czy kolarze, a nawet logo: razem z Wiktorią każdego dnia staramy się nadać projektowi więcej profesjonalizmu",
  },
  {
    img: "slider/8.jpg",
    name: "Laura Moniakowska",
    description:
      "Uwielbiam jeździć na nartach oraz grać w tenisa. W projekcie zajmuję się researchem, social mediami, a także pomagam przy grafice.",
  },
  {
    img: "slider/9.jpg",
    name: "Wiktoria Lożyńska",
    description:
      "W chwili wolnej chętnie zajmuję się swoimi zainteresowaniami. Poezja, gra w tenisa. W projekcie zajmuję się researchem.",
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