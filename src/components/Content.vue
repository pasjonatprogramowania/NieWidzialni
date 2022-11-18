<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 py-10 gap-8">
    <div v-for="(c, i) in content" :key="i">
      <h1 class="sm:text-4xl text-left text-5xl py-10 font-bold text-white">
        {{ c.name }}
      </h1>

      <p class="text-lg py-4">
        {{ c.description }}
      </p>
    </div>
  </div>
</template>

<script setup>
const content = [
  {
    icon: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
    name: "Lorem",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nemo cumque expedita? Ad sit praesentium voluptas animi impedit libero nihil quos optio accusantium doloribus maiores quam consequuntur nostrum, porro omnis, molestiae, corporis ipsa dolor beatae. Omnis praesentium aliquam placeat sunt accusamus nulla explicabo fugiat alias voluptatibus harum eum culpa sint distinctio magni inventore, a suscipit laboriosam ",
  },
  {
    icon: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
    name: "Lorem",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nemo cumque expedita? Ad sit praesentium voluptas animi impedit libero nihil quos optio accusantium doloribus maiores quam consequuntur nostrum, porro omnis, molestiae, corporis ipsa dolor beatae. Omnis praesentium aliquamuptatibus harum eum culpa sint distinctio magni inventore, a suscipit laboriosam ratione. Fuga saepe eaque molestiae, consequuntur doloribus labore ut cumque laboriosam voluptatum aperiam sed sequi hic!",
  },
  {
    icon: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
    name: "Lorem",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nemo cumque expedita? Ad sit praesentium voluptas animi impedit libero nihil quos optio acs voluptatibus harum eum culpa sint distinctio magni inventore, a suscipit laboriosam ratione. Fuga saepe eaque molestiae, consequuntur doloribus labore ut cumque laboriosam voluptatum aperiam sed sequi hic!",
  },
  {
    icon: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
    name: "Lorem",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nemo cumque expedita? Ad sit praesentium voluptas animi impedit libero nihil quos optio accusantium doloribus maiores quam consequuntur nostrum, porro omnis, molestiae, corporis ipsa dolor beatae. Omnis praesentium aliquam placeat sunt accusamus nulla explicabo fugiat alias voluptatibus harum eum culpa sint distinctio magni inventore, a suscipit laboriosam ratione. Fuga saepe eaque molestiae, consequuntur doloribus labore ut cumque laboriosam voluptatum aperiam sed sequi hic!",
  },
];
</script>

<style lang="scss" scoped>
</style>