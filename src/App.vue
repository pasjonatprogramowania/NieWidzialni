<template>
  <div class="w-full bg-purple-prim">
    <Hero class="px-6" />
    <Support class="px-6" />
    <Content class="px-6" />
    <Slider class="px-6" />
    <Companies class="px-6" />
    <Gallery class="px-6 py-24" />
    <Footer />
  </div>
</template>

<script setup>
import Hero from "./components/Hero.vue";
import Support from "./components/Support.vue";
import Slider from "./components/Slider.vue";
import Content from "./components/Content.vue";
import Gallery from "./components/Gallery.vue";
import Companies from "./components/Companies.vue";
import Footer from "./components/Footer.vue";
</script>

<style lang="scss" scoped>
</style>