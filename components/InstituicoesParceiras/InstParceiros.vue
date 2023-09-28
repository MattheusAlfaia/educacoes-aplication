<template>
    <div class="mt-3 mb-2">
        <h3 class="text-center text-instituicao fw-2">Instituições Parceiras</h3>
        <!-- {{ Logos }} -->
    </div>
    <Carousel class="parceiros" v-bind="settings" :breakpoints="breakpoints" :wrap-around="true" :transition="1800"
        :autoplay="1">
        <Slide class="mt-5 mb-3" v-for="(instituicao, index) in parceiros" :key="index">
            <div class="card-instituicao">
                <div class="body-instituicao">
                    <div class="instituicao-image">
                        <img :src="instituicao.image" :alt="instituicao.name" />
                    </div>
                    <!-- <div class="instituicao-name">
                        {{ instituicao.name }}
                    </div> -->
                </div>
            </div>
        </Slide>

        <!-- <template #addons>
        <Navigation />
      </template> -->
    </Carousel>
</template>
  
<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import AGNUS from '@/assets/images/instituicoes/AGNUS.png';
import ALPHA from '@/assets/images/instituicoes/ALPHA.jpg';
import BALAO_MAGICO from '@/assets/images/instituicoes/BALAO_MAGICO.jpg';
import CAMINHO from '@/assets/images/instituicoes/CAMINHO.jpg';
import Casa from '@/assets/images/instituicoes/Casa.png';
import CENTRO_EDUCACIONAL_LOUISIANA from '@/assets/images/instituicoes/CENTRO_EDUCACIONAL_LOUISIANA.png';
import CTRL_PLAY from '@/assets/images/instituicoes/CTRL_MAIS_PLAY.png';
import ESBAM from '@/assets/images/instituicoes/ESBAM.jpeg';
import ETEP from '@/assets/images/instituicoes/ETEP.png';
import ICBEU from '@/assets/images/instituicoes/ICBEU.jpg';
import Juvenil from '@/assets/images/instituicoes/Juvenil.jpeg';
import PALAS_ATENA from '@/assets/images/instituicoes/PALAS_ATENA.jpg';
import UNINORTE from '@/assets/images/instituicoes/UNINORTE.png';
import UNIVERSITARIO_SAO_LUCAS from '@/assets/images/instituicoes/UNIVERSITARIO_SAO_LUCAS.jpg';

import 'vue3-carousel/dist/carousel.css';
import { cursoStore, pinia } from '@/stores/getCursos';
import { ref, onMounted } from 'vue';

export default defineComponent({
    name: 'Breakpoints',
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    data: () => ({
        urlLogos: {
            url: 'https://adm.educacoes.com.br/storage/uploads/logo/',
        },
        parceiros: [
            {
                image: AGNUS,
                name: 'AGNUS',
            },
            {
                image: ALPHA,
                name: 'ALPHA',
            },
            {
                image: BALAO_MAGICO,
                name: 'BALAO MAGICO',
            },
            {
                image: CAMINHO,
                name: 'CAMINHO',
            },
            {
                image: Casa,
                name: 'CASA',
            },
            {
                image: CENTRO_EDUCACIONAL_LOUISIANA,
                name: 'CENTRO EDUCACIONAL LOUISIANA',
            },
            {
                image: CTRL_PLAY,
                name: 'CTRL PLAY',
            },
            {
                image: ESBAM,
                name: 'ESBAM',
            },
            {
                image: ETEP,
                name: 'ETEP',
            },
            {
                image: ICBEU,
                name: 'ICBEU',
            },
            {
                image: Juvenil,
                name: 'JUVENIL',
            },
            {
                image: PALAS_ATENA,
                name: 'PALAS ATENA',
            },
            {
                image: UNINORTE,
                name: 'UNINORTE',
            },
            {
                image: UNIVERSITARIO_SAO_LUCAS,
                name: 'UNIVERSITARIO SAO LUCAS',
            },
        ],
        settings: {
            itemsToShow: 2.5,
            snapAlign: 'center',
        },
        breakpoints: {
            // 700px and up
            700: {
                itemsToShow: 4.5,
                snapAlign: 'center',
            },
            // 1024 and up
            1024: {
                itemsToShow: 8.5,
                snapAlign: 'center',
            },
        },
    }),
    setup() {
        const myStore = cursoStore(pinia);
        const Logos = ref([]);

        onMounted(async () => {
            await myStore.getAreaConhecimento();
            Logos.value = myStore.Logos;
            JSON.parse(JSON.stringify([Logos]));
        });

        return {
            Logos,
        };
    },

});
</script>

<style lang="scss" scoped>
.parceiros {
    width: 100%;
}

.text-instituicao {
    color: #084c80;
    font-size: 1.5em;
    font-weight: bold;
}

.card-instituicao {
    width: 10rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
}

.card-instituicao:hover {
    transform: scale(1.1);
}

.body-instituicao {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.instituicao-image {
    width: 4em;
    height: 4em;
    border-radius: 50%;
    border: 2px solid #084c80;
    padding: 3px;
    margin-bottom: 0.5em;

    @media (max-width: 750px) {
        padding: 0.2em;
        width: 4.9em;
        height: 4.8em;
    }
}

.instituicao-image:hover {
    border: 3px solid #084c80;
}

.instituicao-image img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
}

.instituicao-name {
    font-size: 14px;
    font-weight: bold;
    color: #000;
    text-align: center;
}
</style>
  