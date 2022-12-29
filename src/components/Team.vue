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
          <div class="grid grid-cols-1 gap-5 sm:p-2 carousel__item">
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
import Card from "./Card.vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import i1 from "../assets/slider/1.jpg";
import i2 from "../assets/slider/2.jpg";
import i3 from "../assets/slider/3.jpg";
import i4 from "../assets/slider/4.jpg";
import i5 from "../assets/slider/5.jpg";
import i6 from "../assets/slider/6.jpg";
import i7 from "../assets/slider/7.jpg";
import i8 from "../assets/slider/8.jpg";
import i9 from "../assets/slider/9.jpg";
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
    img: i1,
    name: "Martyna Muc",
    description:
      "Na tygodniu uczennica VI LO, profilu humanistycznego. Interesuję się wszystkim, co związane z moim profilem: kulturą, muzyką, a przede wszystkim teatrem. Kolejną z moich pasji są języki obce. W projekcie pełnię wiele ról, jednak jedną z ważniejszych jest prowadzenie social mediów, a konkretnie TikToka.",
  },
  {
    img: i2,
    name: "Wiktoria Peryt",
    description:
      "Jak na uczennicę ZSP przystało, interesuję się szeroko pojętą sztuką, w szczególności rzeźbienia oraz tatuażu. W zespole pełnię rolę grafika: posty, relacje, plakaty, ulotki; razem z Sylwią dbamy o to, żeby wszystko było jednocześnie dopracowane nie tylko merytorycznie, ale i estetycznie.",
  },
  {
    img: i3,
    name: "Kornelia Zgorzelak",
    description:
      "Za dnia uczennica profilu biochemicznego z rozszerzoną matematyką, zaś w czasie wolnym pracuję oraz pomagam w schronisku. Jedną z moich ogromnych pasji na zawsze pozostanie gimnastyka. W projekcie zajmuję się researchem, kontaktem z instytucjami oraz prowadzeniem TikToka.",
  },
  {
    img: i4,
    name: "Livia Purgał",
    description:
      "W projekcie jestem odpowiedzialna za podtrzymywanie ducha: jeśli reszta ma załamanie nerwowe przez ogrom naszego przedsięwzięcia i z ich oczu leci wodospad łez, robię memy. W wolnym czasie (którego nie ma) szydełkuję i rysuję.",
  },
  {
    img: i5,
    name: "Lena Duszyk",
    description:
      "Hej, jestem liderką projektu. Zajmuję się niedociągnięciami, kontaktem z instytucjami i partnerami, pilnuję terminów i dbam, żeby wszystko miało ręce i nogi. Innymi słowy, odwalam spory kawał czarnej roboty.",
  },
  {
    img: i6,
    name: "Paweł Szewczyk",
    description:
      "Jedyny student i chłopak w zespole. Na codzień jestem uczniem WATu, w chwili wolnej działam nad stroną projektu zmieniając design czy dodając nowe opcje, jak na matematycznego i informatycznego świra przystało.",
  },
  {
    img: i7,
    name: "Sylwia Nachyła",
    description:
      "Kolejna uczennica ZSP, oprócz tego profesjonalna harcerka. Pasjonuję się grafiką; wygląd social mediów, posty, tła relacji czy kolarze, a nawet logo: razem z Wiktorią każdego dnia staramy się nadać projektowi więcej profesjonalizmu i unikalnego wyglądu.",
  },
  {
    img: i8,
    name: "Laura Moniakowska",
    description:
      "Kolejny przypadek, kiedy liczba zainteresowań przekracza zdecydowanie ilość wolnego czasu. Piszę wiersze, opowiadania, a także hobbystycznie zajmuję się grafiką. Oprócz tego uwielbiam jeździć na nartach oraz grać w tenisa. W projekcie zajmuję się researchem, social mediami, a także pomagam przy grafice.",
  },
  {
    img: i9,
    name: "Wiktoria Lożyńska",
    description:
      "Na codzień uczennica na profilu matematyczno-informatycznym, jednak w chwili wolnej chętnie zajmuję się swoimi zainteresowaniami, których jest więcej niż mogłabym zliczyć. Poezja, pisanie, kryminologia, a nawet gra w tenisa; a także wiele, wiele innych. W projekcie natomiast zajmuję się researchem.",
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