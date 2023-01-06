<template>
  <div
    class="
      bg-blue-prim
      text-white
      p-8
      text-left
      shadow-md
      overflow-hidden
      relative
      h-60
      sm:h-auto
      w-80
    "
  >
    <h1 class="my-2 text-2xl"><slot name="header" /></h1>
    <p class="text-md">
      <slot name="description" />
    </p>
    <img
      src="../assets/dots.svg"
      class="absolute right-4 bottom-4 w-36 opacity-20"
      alt=""
    />
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>