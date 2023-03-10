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
    icon: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
    name: "Media społecznościowe",
    description:
      "Jednym z narzędzi, z których korzystamy, są media społecznościowe. Poprzez nasze profile na popularnych platformach, takich jak Facebook, Instagram i TikTok, docieramy do szerokiej grupy młodych ludzi i udostępniamy im różne treści dotyczące zdrowia psychicznego, takie jak porady, ciekawostki i informacje o różnych formach pomocy psychologicznej dostępnych w naszej okolicy.",
  },
  {
    icon: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
    name: "Webinary z specjalistami",
    description:
      "Ponadto, organizujemy cykliczne webinary, w ramach których zapraszamy specjalistów z dziedziny zdrowia psychicznego, aby opowiedzieli o swojej pracy i odpowiedzieli na pytania uczestników. Dzięki tym spotkom online, młodzież ma możliwość zdobycia cennej wiedzy i nawiązania kontaktu z profesjonalistami zajmującymi się zdrowiem psychicznym.",
  },
  {
    icon: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
    name: "Wystawy edukacyjne",
    description:
      "Oprócz działań online, organizujemy również wystawy edukacyjne, podczas których prezentujemy różne narzędzia i techniki służące do zapobiegania chorobom psychicznym oraz radzenia sobie ze stresem i trudnymi emocjami. Wystawy te są skierowane do szerokiej publiczności i są doskonałą okazją do promowania wiedzy na temat zdrowia psychicznego wśród różnych grup wiekowych.",
  },
  {
    icon: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
    name: "Szukanie pomocy psychologicznej",
    description:
      "Pomagamy również pokierować osoby potrzebujące pomocy psychologicznej do odpowiednich ekspertów",
  },
];
</script>

<style lang="scss" scoped>
</style>