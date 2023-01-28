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
        <div v-motion-slide-visible-once-left class="mx-2">
          <h1 class="text-4xl text-center font-bold text-white py-10">
            {{ item.header }}
          </h1>
          <p class="text-xl mb-4 text-black">{{ item.description }}</p>
          <div>
            <img
              :src="item.img"
              alt="Image"
              class="mb-4 my-12 object-cover h-48 w-96"
            />
            <img :src="item.src" alt="Image" class="mx-auto mb-4 w-52 my-12" />
          </div>
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
          header: "Organizowaliśmy spotkania w szkołach o zdrowiu psychicznym",
          description:
            "Nasz projekt społeczny skupia się na promowaniu zdrowego stylu życia i zapobieganiu chorobom psychicznym u młodzieży. W ramach tego projektu organizowaliśmy spotkania dla młodzieży ze szkół średnich w Kochanowskim oraz w Szkole Plastycznej w Radomiu. Celem tych spotkań było uświadomienie młodzieży o ważności dbania o swoje zdrowie psychiczne oraz udzielanie im wsparcia i informacji na temat szukania pomocy psychologicznej.",
          img: "storys/1.jpg",
          src: "bg/r-arr.png",
        },
        {
          header: "Warsztaty w szkole muzycznej",
          description:
            "Wraz z Młodzieżową Radą Miasta, zorganizowaliśmy spotkanie w Szkole Muzycznej, podczas którego prowadzone były wywiady z profesjonalistami z branży psychologii. Na spotkanie przyszło prawie 400 osób, a uczestnicy mogli posłuchać ciekawych wykładów i dowiedzieć się więcej na temat zdrowia psychicznego. Dzięki temu projektowi, młodzież mogła uzyskać ważne informacje dotyczące dbania o swoje zdrowie psychiczne.",
          img: "storys/2.jpg",
          src: "bg/l-arr.png",
        },

        {
          header: "Medialność",
          description:
            "Nasz projekt społeczny skupia się na promowaniu zdrowego stylu życia i zapobieganiu chorobom psychicznym u młodzieży. W ostatnim czasie zyskaliśmy dużo uwagi w lokalnych mediach, takich jak Cozadzien, Radio Radom i różne strony internetowe szkół.",
          img: "storys/3.jpg",
          src: "bg/r-arr.png",
        },
      ],
    };
  },
};
</script>