<template>
  <h1 class="px-6 sm:text-3xl text-4xl text-left py-10 font-bold text-white">
    Nasze statystyki
  </h1>
  <div class="py-5 px-6">
    <main class="h-full overflow-y-auto">
      <div class="container mx-auto grid">
        <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-3">
          <div
            class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
            v-for="i in items"
            :key="i.name"
          >
            <div
              class="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500"
            >
              <img :src="i.src" :alt="i.name" class="w-20" />
            </div>
            <div>
              <p
                class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
              >
                {{ i.name }}
              </p>
              <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                Dotarliśmy do {{ i.number }} osób
              </p>
              <a
                :href="i.link"
                target="_blank"
                class="inline-block rounded-lg px-4 py-1.5 text-bold font-semibold leading-7 text-gray-900 text-white bg-blue-prim ring-1 ring-purple-dark-prim hover:ring-purple-dark-prim hover:bg-blue-dark-prim"
              >
                Więcej o nas
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "/companies/tik.png",
          name: "TikTok",
          number: "56 000",
          link: "https://www.tiktok.com/@niewidzialni.zwzt",
        },
        {
          src: "/companies/fa.png",
          name: "Facebook",
          number: "7 572",
          link: "https://www.facebook.com/niewidzialni.zwzt",
        },
        {
          src: "/companies/ins.png",
          name: "Instagram",
          number: "1 652",
          link: "https://instagram.com/niewidzialni.zwzt?igshid=YmMyMTA2M2Y=",
        },
      ],
    };
  },
};
</script>