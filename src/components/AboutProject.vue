<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 py-10 gap-8">
    <div v-for="(c, i) in content" :key="i">
      <div v-motion-slide-visible-once-left>
        <h1 class="sm:text-3xl text-4xl text-left font-bold text-white">
          {{ c.name }}
        </h1>

        <p class="text-lg py-4">
          {{ c.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const content = [
  {
    name: "Media społecznościowe",
    description:
      "Jednym z narzędzi, z których korzystamy, są media społecznościowe. Poprzez nasze profile na Facebooku, Instagramie oraz TikToku, dotarliśmy do szerokiej grupy młodych osób, udostępniając treści dotyczące zdrowia psychicznego.",
  },
  {
    name: "Pomoc psychologiczna",
    description:
      "Przekazujemy informacje odnośnie dostępnych środków pomocy dla nastolatków",
  },
  {
    name: `Konferencja "Nie daj nam zniknąć. Zdrowy nastolatek - gatunek zagrożony" `,
    description:
      "Wydarzenie odbyło się w Sali Koncertowej Zespołu Szkół Muzycznych im. Oskara Kolberga w Radomiu. Podczas naszego panelu przedstawiliśmy jak w tych czasach niewidzialna dla społeczeństwa jest młodzież z problemami, jak nasze potrzeby są pomijane i minimalizowane oraz jak słowa mają ogromną wagę dla młodego człowieka.",
  },
  {
    name: `Wystawa "(NIE)WIDZIALNI"`,
    description:
      "Nasz zespół we współpracy z Zespołem Szkół Plastycznych im. Józefa Brandta zorganizował wystawę dotyczącą doświadczeń emocjonalnych młodzieży, która była dostępna przez miesiąc w Resursie Obywatelskiej w Radomiu.",
  },
  {
    name: "Ankieta o zdrowiu psychicznym",
    description:
      "Na naszą ankietę odnośnie zdrowia psychicznego odpowiedziało 728 radomskich nastolatków - dzięki temu znamy potrzeby naszego miasta.",
  },
  {
    name: "Zbiórka funduszy",
    description:
      "Wspólnymi siłami z społecznością Radomia udało nam się zebrać 1136 zł na podsumowanie naszego projektu.",
  },
];
</script>

<style lang="scss" scoped>
</style>