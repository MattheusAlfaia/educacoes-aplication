<template>
    <BannerSliders />
    <NivelEnsinoSlider />
    <InstituicoesParceiras />
    <CredenciarInstuicao />
    <LinksCards />
    <Convenios />
    <VideoInstitucional /> 
</template>

<script>
import BannerSliders from '~/components/BannerSlides/BannerSlides.vue';
import NivelEnsinoSlider from '~/components/NivelEnsino/NivelEnsino.vue';
import InstituicoesParceiras from '~/components/InstituicoesParceiras/InstParceiros.vue'
import CredenciarInstuicao from '~/components/CredenciarInstuicao/CredInst.vue';
import LinksCards from '~/components/LinksCards/LinksCards.vue';
import Convenios from '~/components/Convenios/Convenios.vue';
import VideoInstitucional from '~/components/VideoInstitucional/VideoInstitucional.vue'; //com info *arrumar
export default {
    name: 'Home',
    components: {
        BannerSliders,
        NivelEnsinoSlider,
        InstituicoesParceiras,
        CredenciarInstuicao,
        LinksCards,
        Convenios,
        VideoInstitucional
    },
}
</script>