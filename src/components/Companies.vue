<template>
  <h1 class="px-6 sm:text-3xl text-4xl text-left py-10 font-bold text-white">
    Kim sa nasi partnerzy ?
  </h1>
  <div class="bg-blue-dark-prim grayscale-0 py-12">
    <div>
      <div
        class="
          grid grid-cols-1
          xl:grid-cols-3
          lg:grid-cols-2
          place-items-center
          gap-4
          px-6
        "
      >
        <div
          v-for="(c, i) in companies"
          :key="i"
          class="w-full bg-white rounded-lg px-6 h-96 grid place-items-center"
        >
          <div v-motion-slide-visible-once-left>
            <div>
              <div class="grid place-items-center">
                <img class="h-36 sm: p-4 object-cover s" :src="c.logo" alt="" />
              </div>

              <h1 class="sm:text-xl text-2xl text-center font-bold py-4">
                {{ c.name }}
              </h1>
              <p class="sm:text-md text-xl">{{ c.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const companies = [
  {
    logo: "companies/ZHP.png",
    name: "ZHP",
    description:
      "Współpracujemy z Hufcem ZHP Radom-miasto, pomagają nam oni użyczając hufiec do naszych potrzeb, oraz dzieląc sie zapleczem merytorycznym",
  },
  {
    logo: "companies/KRR.png",
    name: "Samorząd Kochanowskiego",
    description: "Lena napisz cos mi tu",
  },
  {
    logo: "companies/MRD.png",
    name: "Młodzieżowa Rada Miasta",
    description: "Lena napisz cos mi tu",
  },
  {
    logo: "companies/BIGA.png",
    name: "Biga Druk Drukarnia Radom",
    description: "Lena napisz cos mi tu",
  },
];
</script>

<style lang="scss" scoped>
</style>