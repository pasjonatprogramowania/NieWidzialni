<template>
  <div class="w-full bg-purple-prim">
    <HeroTop class="px-6" />
    <Goals class="px-6" />
    <Team class="px-6" />
    <AboutProject class="px-6" />
    <Companies class="px-6" />
    <ProjectStory class="px-6" />
    <Gallery v-motion-fade-visible-once />
  </div>
</template>

<script setup>
import HeroTop from "./components/HeroTop.vue";
import Goals from "./components/Goals.vue";
import Team from "./components/Team.vue";
import AboutProject from "./components/AboutProject.vue";
import Gallery from "./components/Gallery.vue";
import Companies from "./components/Companies.vue";
import ProjectStory from "./components/ProjectStory.vue";
//v-motion-fade-visible-once
</script>

<style lang="scss" scoped>
</style>