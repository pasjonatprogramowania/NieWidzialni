<template>
  <div>
    <h1 class="px-6 sm:text-3xl text-4xl text-left py-10 font-bold text-white">
      Historia Projektu
    </h1>
    <div class="flex flex-wrap">
      <div
        v-for="(item, index) in items"
        :key="item"
        :class="`sm:w-1/2 w-full sm:text-left text-center${
          index % 2 === 0 ? 'justify-end' : 'justify-start sm:pt-96'
        } sm:flex-col`"
      >
        <div v-motion-slide-visible-once-left>
          <h1 class="text-4xl text-center font-bold text-white py-10">
            {{ item.header }}
          </h1>
          <p class="text-xl mb-4 text-black">{{ item.description }}</p>
          <img :src="item.src" alt="Image" class="mx-auto mb-4 w-52 my-12" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          header: "Lena napisz cos tu",
          description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis corporis repudiandae necessitatibus. Eveniet omnis praesentium libero nisi provident doloribus magni! Minima enim accusamus repellat dolor nam quisquam quidem, recusandae provident optio, vitae ipsa voluptate quae fugiat, fuga deleniti suscipit dolores! Nulla optio nostrum ipsa distinctio adipisci magni laboriosam provident cumque praesentium tempora amet, cum, eligendi voluptate fugiat accusamus! Perspiciatis provident nobis dolore eaque, dignissimos necessitatibus.",
          src: "bg/r-arr.png",
        },
        {
          header: "elo",
          description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis corporis repudiandae necessitatibus. Eveniet omnis praesentium libero nisi provident doloribus magni! Minima enim accusamus repellat dolor nam quisquam quidem, recusandae provident optio, vitae ipsa voluptate quae fugiat, fuga deleniti suscipit dolores! Nulla optio nostrum ipsa distinctio adipisci magni laboriosam provident cumque praesentium tempora amet, cum, eligendi voluptate fugiat accusamus! Perspiciatis provident nobis dolore eaque, dignissimos necessitatibus.",
          src: "bg/l-arr.png",
        },
        {
          header: "elo",
          description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis corporis repudiandae necessitatibus. Eveniet omnis praesentium libero nisi provident doloribus magni! Minima enim accusamus repellat dolor nam quisquam quidem, recusandae provident optio, vitae ipsa voluptate quae fugiat, fuga deleniti suscipit dolores! Nulla optio nostrum ipsa distinctio adipisci magni laboriosam provident cumque praesentium tempora amet, cum, eligendi voluptate fugiat accusamus! Perspiciatis provident nobis dolore eaque, dignissimos necessitatibus.",
          src: "bg/r-arr.png",
        },
        {
          header: "elo",
          description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis corporis repudiandae necessitatibus. Eveniet omnis praesentium libero nisi provident doloribus magni! Minima enim accusamus repellat dolor nam quisquam quidem, recusandae provident optio, vitae ipsa voluptate quae fugiat, fuga deleniti suscipit dolores! Nulla optio nostrum ipsa distinctio adipisci magni laboriosam provident cumque praesentium tempora amet, cum, eligendi voluptate fugiat accusamus! Perspiciatis provident nobis dolore eaque, dignissimos necessitatibus.",
          src: "bg/l-arr.png",
        },
      ],
    };
  },
};
</script>