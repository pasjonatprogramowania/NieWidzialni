<template>
  <h1 class="px-6 sm:text-4xl text-left text-5xl py-10 font-bold text-white">
    Kim sa nasi partnerzy ?
  </h1>
  <div class="bg-blue-dark-prim grayscale-0 py-12">
    <div>
      <div
        class="
          grid grid-cols-1
          md:grid-cols-3
          sm:grid-cols-2
          place-items-center
          gap-4
          px-6
        "
      >
        <div
          v-for="(c, i) in companies"
          :key="i"
          class="bg-white rounded-lg p-6"
        >
          <div v-motion-slide-visible-once-left>
            <center>
              <img class="w-56 p-4" :src="c.logo" alt="" />
            </center>
            <h1 class="text-xl text-center">{{ c.name }}</h1>
            <p class="text-md">{{ c.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import zhp from "../assets/companies/zhp.png";
const companies = [
  {
    logo: zhp,
    name: "Zhp",
    description:
      "quod rem? Excepturi a officiis incidunt? Ratione quidem optio a excepturi in natus ea autem, earum dignissimos, eius asperiores architecto possimus.",
  },
  {
    logo: zhp,
    name: "zhp",
    description:
      "quod rem? Excepturi a officiis incidunt? Ratione quidem optio a excepturi in natus ea autem, earum dignissimos, eius asperiores architecto possimus.",
  },
  {
    logo: zhp,
    name: "zhp",
    description:
      "quod rem? Excepturi a officiis incidunt? Ratione quidem optio a excepturi in natus ea autem, earum dignissimos, eius asperiores architecto possimus.",
  },
  {
    logo: zhp,
    name: "zhp",
    description:
      "quod rem? Excepturi a officiis incidunt? Ratione quidem optio a excepturi in natus ea autem, earum dignissimos, eius asperiores architecto possimus.",
  },
  {
    logo: zhp,
    name: "zhp",
    description:
      "quod rem? Excepturi a officiis incidunt? Ratione quidem optio a excepturi in natus ea autem, earum dignissimos, eius asperiores architecto possimus.",
  },
  {
    logo: zhp,
    name: "zhp",
    description:
      "quod rem? Excepturi a officiis incidunt? Ratione quidem optio a excepturi in natus ea autem, earum dignissimos, eius asperiores architecto possimus.",
  },
];
</script>

<style lang="scss" scoped>
</style>