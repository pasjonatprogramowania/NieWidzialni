<template>
  <section class="text-gray-600 body-font overflow-hidden">
    <h1 class="sm:text-4xl text-left text-5xl py-10 font-bold text-white">
      Historia projektu
    </h1>
    <div class="container px-5 py-2 mx-auto">
      <div
        class="-my-8 divide-y-2 divide-gray-100"
        v-for="(story, i) in storys"
        :key="i"
        v-motion-slide-visible-once-left
      >
        <div class="py-8 flex flex-wrap md:flex-nowrap">
          <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <span class="font-semibold title-font text-gray-700"
              >Etap: Planowanie</span
            >
            <span class="mt-1 text-gray-500 text-sm">{{ story.month }}</span>
          </div>
          <div class="md:flex-grow">
            <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
              {{ story.name }}
            </h2>
            <p class="leading-relaxed">
              {{ story.description }}
            </p>
            <a
              href="#"
              class="
                my-2
                inline-block
                rounded-lg
                px-4
                py-1.5
                text-bold
                font-semibold
                leading-7
                text-gray-900
                bg-white
                ring-1 ring-purple-dark-prim
                hover:ring-purple-dark-prim hover:bg-grey
              "
              >Post
              <span class="text-gray-400" aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const storys = [
  {
    month: "Styczen",
    name: "lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa hic distinctio voluptas reiciendis magni quis amet perferendis? Minima, atque, eligendi maxime aliquid eum ratione sed dolore beatae cum non officiis quisquam aspernatur mollitia eveniet, animi perferendis odit omnis natus vel praesentium? Cupiditate, debitis modi rerum culpa consequuntur nam iste. Molestias, unde magni. Vel dicta hic necessitatibus",
  },
  {
    month: "Styczen",
    name: "lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa hic distinctio voluptas reiciendis magni quis amet perferendis? Minima, atque, eligendi maxime aliquid eum ratione sed dolore beatae cum non officiis quisquam aspernatur mollitia eveniet, animi perferendis odit omnis natus vel praesentium? Cupiditate, debitis modi rerum culpa consequuntur nam iste. Molestias, unde magni. Vel dicta hic necessitatibus",
  },
  {
    month: "Styczen",
    name: "lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa hic distinctio voluptas reiciendis magni quis amet perferendis? Minima, atque, eligendi maxime aliquid eum ratione sed dolore beatae cum non officiis quisquam aspernatur mollitia eveniet, animi perferendis odit omnis natus vel praesentium? Cupiditate, debitis modi rerum culpa consequuntur nam iste. Molestias, unde magni. Vel dicta hic necessitatibus",
  },
  {
    month: "Styczen",
    name: "lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa hic distinctio voluptas reiciendis magni quis amet perferendis? Minima, atque, eligendi maxime aliquid eum ratione sed dolore beatae cum non officiis quisquam aspernatur mollitia eveniet, animi perferendis odit omnis natus vel praesentium? Cupiditate, debitis modi rerum culpa consequuntur nam iste. Molestias, unde magni. Vel dicta hic necessitatibus",
  },
  {
    month: "Styczen",
    name: "lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa hic distinctio voluptas reiciendis magni quis amet perferendis? Minima, atque, eligendi maxime aliquid eum ratione sed dolore beatae cum non officiis quisquam aspernatur mollitia eveniet, animi perferendis odit omnis natus vel praesentium? Cupiditate, debitis modi rerum culpa consequuntur nam iste. Molestias, unde magni. Vel dicta hic necessitatibus",
  },
  {
    month: "Styczen",
    name: "lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa hic distinctio voluptas reiciendis magni quis amet perferendis? Minima, atque, eligendi maxime aliquid eum ratione sed dolore beatae cum non officiis quisquam aspernatur mollitia eveniet, animi perferendis odit omnis natus vel praesentium? Cupiditate, debitis modi rerum culpa consequuntur nam iste. Molestias, unde magni. Vel dicta hic necessitatibus",
  },
  {
    month: "Styczen",
    name: "lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa hic distinctio voluptas reiciendis magni quis amet perferendis? Minima, atque, eligendi maxime aliquid eum ratione sed dolore beatae cum non officiis quisquam aspernatur mollitia eveniet, animi perferendis odit omnis natus vel praesentium? Cupiditate, debitis modi rerum culpa consequuntur nam iste. Molestias, unde magni. Vel dicta hic necessitatibus",
  },
];
</script>

<style lang="scss" scoped>
</style>