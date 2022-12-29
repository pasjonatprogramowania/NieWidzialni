<template>
  <div class="w-full bg-purple-prim">
    <HeroTop class="px-6" />
    <Support class="px-6" />
    <Team class="px-6" />
    <AboutProject class="px-6" />
    <Gallery v-motion-fade-visible-once />
    <!-- <Companies class="px-6" /> -->
    <!-- <ProjectStory class="px-6" /> -->
    <Footer />
  </div>
</template>

<script setup>
import HeroTop from "./components/HeroTop.vue";
import Support from "./components/ReasonsToSupport.vue";
import Team from "./components/Team.vue";
import AboutProject from "./components/AboutProject.vue";
import Gallery from "./components/Gallery.vue";
import Companies from "./components/Companies.vue";
import Footer from "./components/Footer.vue";
import ProjectStory from "./components/ProjectStory.vue";
//v-motion-fade-visible-once
</script>

<style lang="scss" scoped>
</style>