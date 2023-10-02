<template>
    <section v-if="carregamento">
        <sloganHome />
    </section>
    <section v-else>
        <BannerSliders />
        <NivelEnsinoSlider />
        <InstituicoesParceiras />
        <CredenciarInstuicao />
        <LinksCards />
        <Convenios />
        <VideoInstitucional />
    </section>
</template>

<script>
import BannerSliders from '~/components/BannerSlides/BannerSlides.vue';
import NivelEnsinoSlider from '~/components/NivelEnsino/NivelEnsino.vue';
import InstituicoesParceiras from '~/components/InstituicoesParceiras/InstParceiros.vue'
import CredenciarInstuicao from '~/components/CredenciarInstuicao/CredInst.vue';
import LinksCards from '~/components/LinksCards/LinksCards.vue';
import Convenios from '~/components/Convenios/Convenios.vue';
import VideoInstitucional from '~/components/VideoInstitucional/VideoInstitucional.vue'; //com info *arrumar
import sloganHome from '~/components/sloganCarregamento/sloganHome.vue';
export default {
    name: 'Home',
    components: {
        BannerSliders,
        NivelEnsinoSlider,
        InstituicoesParceiras,
        CredenciarInstuicao,
        LinksCards,
        Convenios,
        VideoInstitucional,
        sloganHome
    },
    data() {
        return {
            carregamento: true
        }
    },
    mounted() {
        setTimeout(() => {
            this.carregamento = false
        }, 2000)
    },
}
</script>