<!-- carregar o NavBar e rederizar as páginas -->
<template>
    <NavBar />
    <NuxtPage />
    <FooterPage />
</template>

<script>
import NavBar from '~/components/NavBar/NavBar.vue'
import FooterPage from './components/Footer/FooterPage.vue';
export default {
    components: {
        NavBar,
        FooterPage
    }
}
</script>