<!-- carregar o NavBar e rederizar as páginas -->
<template>
    <NavBar />
    <NuxtPage />
    <FooterPage />
</template>

<script setup lang="ts">
useSeoMeta({
    title: 'INSTITUTO EDUCAÇÕES - Bolsas de Estudo',
    ogTitle: 'INTERATIVO ATIVIDADES DE APOIO A EDUCAÇÃO LTDA',
    description: 'Bolsas de estudo para educação básica, graduação, pós-graduação, cursos Técnicos, cursos livres, supletivo e idiomas.',
    ogDescription: 'This is my amazing site, let me tell you all about it.',
    ogUrl: 'https://www.educacoes.com.br/',
    ogType: 'website',
    ogSiteName: 'Instituto Educações - Bolsas de Estudos',
    ogLocale: 'pt_BR',
    authorName: 'Mattheus Alfaia, alfaiamattheus@gmail.com',
    robots: 'index, follow',   
})

import NavBar from '~/components/NavBar/NavBar.vue'
import FooterPage from './components/Footer/FooterPage.vue';
</script>