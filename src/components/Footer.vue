<template>
  <div>
    <footer
      class="
        p-4
        bg-white
        shadow
        md:flex md:items-center md:justify-between md:p-6
        dark:bg-gray-800
      "
    >
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >© 2022
        <a href="https://flowbite.com/" class="hover:underline">NieWidzialni</a
        >. All Rights Reserved.
      </span>
      <ul>
        <li>
          <a
            href="#"
            class="
              inline-block
              rounded-lg
              bg-blue-prim
              px-4
              py-1.5
              my-2
              text-base
              font-semibold
              leading-7
              text-white
              shadow-sm
              ring-1 ring-purple-prim
              hover:bg-blue-dark-prim hover:ring-purple-dark-prim
            "
          >
            Skontaktuj sie z nami
            <span class="text-gray-400" aria-hidden="true">&rarr;</span>
          </a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script setup>
</script>

<style  scoped>
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>