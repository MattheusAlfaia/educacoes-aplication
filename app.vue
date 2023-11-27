<!-- carregar o NavBar e rederizar as páginas -->
<template>
  <NavBar />
  <div class="out">
    <NuxtPage />
    </div>
  <FooterPage />
</template>

<script setup lang="ts">
useSeoMeta({
  title: "INSTITUTO EDUCAÇÕES - Bolsas de Estudo",
  ogTitle: "INSTITUTO EDUCAÇÕES - Bolsas de Estudo",
  description: "Bolsas de estudo para educação básica, graduação, pós-graduação, cursos Técnicos, cursos livres, supletivo e idiomas.",
  keywords: "Bolsas de estudo, educação básica, graduação, pós-graduação, cursos Técnicos, cursos livres, supletivo e idiomas.",
  ogUrl: "https://www.educacoes.com.br/",
  ogType: "website",
  ogSiteName: "Instituto Educações - Bolsas de Estudos",
  ogLocale: "pt_BR",
  authorName: "Mattheus Alfaia, alfaiamattheus@gmail.com",
  robots: "index, follow",
});

import NavBar from "~/components/NavBar/NavBar.vue";
import FooterPage from "./components/Footer/FooterPage.vue";
</script>


<style scoped>
.out{
    background-color: #FFF;
}
</style>