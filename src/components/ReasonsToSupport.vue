<template>
  <div class="bg-purple-dark-prim relative py-20 text-white">
    <img
      src="../assets/dots.svg"
      class="absolute right-4 top-8 bottom-0 w-36 opacity-40"
      alt=""
    />
    <div class="grid md:grid-cols-3 grid-cols-1 gap-4">
      <div>
        <h1 class="text-left text-3xl sm:py-20 font-bold text-white">
          Dlaczego warto wesprzec nasz projekt ?
        </h1>
        <img
          src="../assets/dots2.svg"
          class="absolute left-4 bottom-4 hidden md:block w-72 opacity-40"
          alt=""
        />
      </div>
      <div class="grid md:grid-cols-2 grid-cols-1 col-span-2 gap-4">
        <div v-for="val in reasons" :key="val">
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
    name: "Zwiększanie świadomości",
    des: "Projekt społeczny może pomóc zwiększyć świadomość wśród młodzieży o zdrowiu psychicznym, co może pomóc w zapobieganiu chorobom psychicznym i wspierać osoby już dotknięte problemami zdrowia psychicznego.",
  },
  {
    icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z",
    name: "Budowanie więzi i wsparcia",
    des: "Projekt społeczny może być doskonałą okazją do budowania więzi i wsparcia wśród młodych ludzi. Może to pomóc w ograniczeniu izolacji i osamotnienia, które często są związane z problemami zdrowia psychicznego.",
  },
  {
    icon: "M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5",
    name: "Aktywność obywatelska",
    des: "Udział w projekcie społecznym może pomóc młodzieży w rozwijaniu umiejętności liderskich i aktywnego udziału w życiu społecznym. Może to być dobry sposób na rozwijanie postaw obywatelskich i zaangażowania w sprawy dotyczące lokalnej społeczności.",
  },
  {
    icon: "M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z",
    name: "Promowanie zdrowego stylu życia",
    des: "Projekt społeczny tworzony przez młodzież może być doskonałą okazją do promowania zdrowego stylu życia i nawyków u młodych ludzi. Może to obejmować działania takie jak edukacja dotycząca zdrowego odżywiania, aktywności fizycznej, radzenia sobie ze stresem i zapobiegania uzależnieniom.",
  },
];
</script>

<style lang="scss" scoped>
</style>
