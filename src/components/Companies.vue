<template>
  <h1 class="px-6 sm:text-3xl text-4xl text-left py-10 font-bold text-white">
    Kim sa nasi partnerzy ?
  </h1>
  <!-- ====== Brands Section Start -->
  <div class="bg-white-prime p-20">
    <div class="container mx-auto">
      <div class="-mx-4 flex flex-wrap">
        <div class="w-full px-4">
          <div class="flex flex-wrap items-center justify-center gap-16">
            <div v-for="i in companies" :key="i.name">
              <img :src="i.logo" :alt="i.name" class="h-20 w-full" />
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
    logo: "companies/1.png",
    name: "ZHP",
  },
  {
    logo: "companies/2.png",
    name: "Samorząd Kochanowskiego",
  },
  {
    logo: "companies/3.jpg",
    name: "Młodzieżowa Rada Miasta",
  },
  {
    logo: "companies/4.png",
    name: "Młodzieżowa Rada Miasta",
  },
  {
    logo: "companies/6.png",
    name: "Biga Druk Drukarnia Radom",
  },
  {
    logo: "companies/7.png",
    name: "Biga Druk Drukarnia Radom",
  },
  {
    logo: "companies/8.png",
    name: "Biga Druk Drukarnia Radom",
  },
  {
    logo: "companies/9.png",
    name: "Biga Druk Drukarnia Radom",
  },
  {
    logo: "companies/10.png",
    name: "Biga Druk Drukarnia Radom",
  },

  {
    logo: "companies/11.png",
    name: "Biga Druk Drukarnia Radom",
  },
  {
    logo: "companies/12.svg",
    name: "Biga Druk Drukarnia Radom",
  },
];
</script>

<style lang="scss" scoped>
</style>