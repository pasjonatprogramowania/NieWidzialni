<template>
  <div class="bg-purple-dark-prim relative py-20">
    <img
      src="../assets/dots.svg"
      class="absolute right-4 top-8 bottom-0 w-36 opacity-40"
      alt=""
    />
    <div class="grid md:grid-cols-3 grid-cols-1 gap-4">
      <div>
        <h1 class="text-left text-4xl sm:py-20 py-20 font-bold text-white">
          Dlaczego warto wesprzec nasz projekt ?
        </h1>
        <img
          src="../assets/dots2.svg"
          class="absolute left-4 bottom-4 hidden md:block w-72 opacity-40"
          alt=""
        />
      </div>
      <div class="grid md:grid-cols-2 grid-cols-1 col-span-2 gap-4">
        <div v-for="(val, k) in reasons" :key="k">
          <div
            class="
              bg-blue-prim
              p-8
              my-4
              w-10
              h-10
              rounded-lg
              grid
              place-content-center
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              class="w-10 h-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                :d="val.icon"
              ></path>
            </svg>
          </div>
          <div>
            <h1 class="my-2 text-2xl font-bold">{{ val.name }}</h1>
            <p class="text-md">
              {{ val.des }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const reasons = [
  {
    icon: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
    name: "pomoc",
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias rem pariatur at quis fuga laudantium quam possimus numquam! Consequatur alias natus excepturi fugiat ratione architecto quaerat praesentium! Eos, rem obcaecati!",
  },
  {
    icon: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
    name: "pomoc2",
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias rem pariatur at quis fuga laudantium quam possimus numquam! Consequatur alias natus excepturi fugiat ratione architecto quaerat praesentium! Eos, rem obcaecati!",
  },
  {
    icon: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
    name: "pomoc3",
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias rem pariatur at quis fuga laudantium quam possimus numquam! Consequatur alias natus excepturi fugiat ratione architecto quaerat praesentium! Eos, rem obcaecati!",
  },
  {
    icon: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
    name: "pomoc4",
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias rem pariatur at quis fuga laudantium quam possimus numquam! Consequatur alias natus excepturi fugiat ratione architecto quaerat praesentium! Eos, rem obcaecati!",
  },
];
</script>

<style lang="scss" scoped>
</style>