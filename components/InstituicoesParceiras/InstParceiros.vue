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
        parceiros: [
            {
                name: 'AGNUS',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/AGNUS%20DEI.png",
            },
            {
                name: 'ALPHA',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/ALPHA%20KIDS%20CRECHE%20E%20BER%c3%87%c3%81RIO.jpg",
            },
            {
                name: 'Casa Verde',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/CASA%20VERDE%20ESPA%c3%87O%20INTERATIVO.png"
            },
            {
                name: 'TIA MARIA',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/CENTRO%20DE%20EDUCA%c3%87%c3%83O%20INFANTIL%20TIA%20MARIA%20DA%20LUZ.jpeg"
            },
            {
                name: 'MEU CAMINHO',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/CENTRO%20DE%20EDUCA%c3%87%c3%83O%20MEU%20CAMINHO.jpg"
            },
            {
                name: 'CENTEC',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/CENTRO%20DE%20ENSINO%20T%c3%89CNICO%20-%20CENTEC.png"
            },
            {
                name: 'CEDS',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/CENTRO%20DE%20ESTUDOS%20DIRECIONADOS%20%c3%80%20SA%c3%9aDE%20-%20CEDS.jpg"
            },
            {
                name: 'CEBAM',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/CENTRO%20EDUCACIONAL%20BAL%c3%83O%20M%c3%81GICO%206D%20-%20CEBAM.jpg"
            },
            {
                name: 'NOVO HORIZONTE',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/CENTRO%20EDUCACIONAL%20BATISTA%20%20NOVO%20HORIZONTE.jpg"
            },
            {
                name: 'ESTRELA DA MANHA',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/CENTRO%20EDUCACIONAL%20ESTRELA%20DA%20MANH%c3%83%20-%20CEEMA.png"
            },
            {
                name: 'LOUSIANA',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/CENTRO%20EDUCACIONAL%20LOUISIANA%20.png"
            },
            {
                name: 'MUNDO DO SABER',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/CENTRO%20EDUCACIONAL%20MUNDO%20DO%20SABER.jpg"
            },
            {
                name: 'PARAISO INFANTIL',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/CENTRO%20EDUCACIONAL%20PARA%c3%8dSO%20INFANTIL.jpeg"
            },
            {
                name: 'PINOCCHIO',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/CENTRO%20EDUCACIONAL%20PINOCCHIO.jpg"
            },
            {
                name: 'PROF HELENA',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/CENTRO%20EDUCACIONAL%20PROF%c2%aa%20HELENA%20ROMERO%20.jpeg"
            },
            {
                name: 'CIEC',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/CENTRO%20INTEGRADO%20DE%20EDUCA%c3%87%c3%83O%20E%20CIDADANIA%20-%20CIEC.jpg"
            },
            {
                name: 'ETEP',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/CENTRO%20UNIVERSIT%c3%81RIO%20ETEP%20-%20POLO%20BOTUCATU%20(VILA%20PADOVAN)%20.bmp"
            },
            {
                name: 'SAO LUCAS',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/CENTRO%20UNIVERSIT%c3%81RIO%20S%c3%83O%20LUCAS%20-%20JI%20PARAN%c3%81%20%20(RO).jpg"
            },
            {
                name: 'UNIBATA',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/CENTRO%20UNIVERSIT%c3%81RIO%20UNIBTA%20DIGITAL%20%20-%20ALTA%20FLORESTA%20(SETOR%20E%20CENTRO).jpg"
            },
            {
                name: 'CETEC',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/CETEC%20-%20CENTRO%20DE%20FORMA%c3%87%c3%83O%20T%c3%89CNICA%20E%20PROFISSIONAL%20DE%20CACOAL%20.png"
            },
            {
                name: 'COL MARTHA FALCAO',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/COL%c3%89GIO%20MARTHA%20FALC%c3%83O.jpeg"
            },
            {
                name: 'PALAS ATENA',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/COL%c3%89GIO%20PALAS%20ATENA%20.jpg"
            },
            {
                name: 'COL SANTA DOROTEIA',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/COL%c3%89GIO%20SANTA%20DOROT%c3%89IA.jpg"
            },
            {
                name: 'CRECHE RENNOVARI',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/CRECHE%20ESCOLA%20RENNOVARI.jpg"
            },
            {
                name: 'CRTL + PLAY',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/CTRL+PLAY%20-%20ESCOLA%20DE%20PROGRAMA%c3%87%c3%83O%20E%20ROB%c3%93TICA.jpeg"
            },
            {
                name: 'CASA VERDE',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/Casa%20Verde%20Escola%20Espa%c3%a7o%20Interativo%20Ltda.png"
            },
            {
                name: 'ESC RECREACAO INFANTO JUVENIL',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/Centro%20de%20Recrea%c3%a7%c3%a3o%20Infanto%20Juvenil.jpeg"
            },
            {
                name: 'EDUC. BRASIL',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/EDUCAC%20BRASIL.jpeg"
            },
            {
                name: 'SUPERIOR BATISTA',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/ESBAM%20-%20ESCOLA%20SUPERIOR%20BATISTA%20DO%20AMAZONAS%20.jpeg"
            },
            {
                name: 'EDUCACIONAL AMAZONIDA',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/ESCOLA%20EDUCACIONAL%20AMAZ%c3%94NIDA.jpeg"
            },
            {
                name: 'NILTON LINS',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/ESCOLA%20NILTON%20LINS%20-%20UNIDADE%20JAPIIM.jpeg"
            },
            {
                name: 'EDUCAMAZON',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/Educamazon%20-%20UNIDADE%20ZUMBI%20DOS%20PALMARES%20.png"
            },
            {
                name: 'FACIMED',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/FACIMED%20-%20FACULDADE%20DE%20CI%c3%8aNCIAS%20BIOM%c3%89DICAS%20DE%20CACOAL%20%20(CACOAL%20-%20RO)%20.jpg"
            },
            {
                name: 'FACULDADE APRIMORAR',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/FACULDADE%20APRIMORAR%20-%20S%c3%83O%20JOS%c3%89%20DOS%20CAMPOS%20.png"
            },
            {
                name: 'BOAS NOVAS',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/FACULDADE%20BOAS%20NOVAS.png"
            },
            {
                name: 'FACUL. SALESIANA BOSCO',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/FACULDADE%20SALESIANA%20DOM%20BOSCO%20-%20UNIDADE%20CENTRO%20.jpg"
            },
            {
                name: 'FACUL. SAPIENS',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/FACULDADE%20SAPIENS%20%20%20(PORTO%20VELHO%20-%20RO)%20.png"
            },
            {
                name: 'UNINANBUCO',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/FACULDADE%20UNINABUCO%20-%20(CAXANG%c3%81%20-%20PE).bmp"
            },
            {
                name: 'FIMCA',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/FIMCA%20-%20FACULDADE%20INTEGRADAS%20APAR%c3%8dCIO%20CARVALHO%20(PORTO%20VELHO).jpg"
            },
            {
                name: 'FUCAPI',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/FUCAPI.jpg"
            },
            {
                name: 'FUNCAP',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/FUNCAP%20CURSOS.png"
            },
            {
                name: 'GIGA',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/GIGA%20INSTITUTO%20EDUCACIONAL.jpeg"
            },
            {
                name: 'IAES',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/IAES%20-%20FACULDADE%20DO%20AMAZONAS.jpeg"
            },
            {
                name: 'ICEBEU',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/ICBEU%20-%20INSTITUTO%20CULTURAL%20BRASIL%20ESTADOS%20UNIDOS%20%20(UNIDADE%20MANAUARA).jpg"
            },
            {
                name: 'MATERDEI',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/IES%20MATERDEI%20-%20INSTITUTO%20DE%20ENSINO%20SUPERIOR%20MATERDEI%20.jpg"
            },
            {
                name: 'INNOVATECH',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/INNOVATECH%20-%20EDUCA%c3%87%c3%83O%20PROFISSIONAL.jpeg"
            },
            {
                name: 'FANORTE',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/INSTITUI%c3%87%c3%83O%20DE%20ENSINO%20SUPERIOR%20DE%20CACOAL%20-%20FANORTE.jpg"
            },
            {
                name: 'JÓIAS DE CRISTO',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/INSTITUTO%20DE%20EDUCA%c3%87%c3%83O%20J%c3%93IAS%20DE%20CRISTO.png"
            },
            {
                name: 'LEAO DE JUDA',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/INSTITUTO%20DE%20EDUCA%c3%87%c3%83O%20LE%c3%83O%20DE%20JUD%c3%81.jpeg"
            },
            {
                name: 'DENIZARD RIVAIL',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/INSTITUTO%20DENIZARD%20RIVAIL%20.jpg"
            },
            {
                name: 'IDA NELSON',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/INSTITUTO%20IDA%20NELSON.jpg"
            },
            {
                name: 'INTELIGENTE',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/INTELIGENTE%20-%20DESENVOLVENDO%20PESSOAS%20E%20NEG%c3%93CIOS.jpg"
            },
            {
                name: 'JUVENIL',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/JUVENIL%20-%20CRIJ.jpg"
            },
            {
                name: 'LA SALLE',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/LA%20SALLE.jpg"
            },
            {
                name: 'LEANORTE',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/LEANORTE%20-%20P%c3%93S-GRADUA%c3%87%c3%83O,%20TREINAMENTOS%20E%20CONSULTORIAS%20.jpeg"
            },
            {
                name: 'LICEU',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/LEC%20-%20LICEU%20DE%20ENSINO%20CONTEMPOR%c3%82NEO%20.jpg"
            },
            {
                name: 'MARTHA FALCAO IDIOMAS',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/MARTHA%20FALC%c3%83O%20-%20IDIOMAS.jpg"
            },
            {
                name: 'UNIBATA',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/OYA%20Educacional%20Eireli.vCENTRO%20UNIVERSIT%c3%81RIO%20UNIBTA%20DIGITAL%20(POLO%20VIRTUAL).bmp"
            },
            {
                name: 'PARAISO',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/PARAISO).BMP"
            },
            {
                name: 'UNAMA',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/UNAMA%20-%20ANANINDEUA.jpg"
            },
            {
                name: 'UNESC',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/UNESC%20-%20PORTO%20VELHO.png"
            },
            {
                name: 'UNG',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/UNG%20-%20BELO%20HORIZONTE.bmp"
            },
            {
                name: 'UNIFACIMED',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/UNIFACIMED%20-%20FACULDADE%20DE%20CI%c3%8aNCIAS%20BIOM%c3%89DICAS%20DE%20CACOAL%20%20(CACOAL%20-%20RO)%20.png"
            },
            {
                name: 'UNIJUAZEIRO',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/UNIJUAZEIRO%20-%20Centro%20Universit%c3%a1rio%20de%20Juazeiro%20do%20Norte.png"
            },
            {
                name: 'UNINAMBUCO',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/UNINABUCO%20-%20(RECIFE%20-%20PE).png"
            },
            {
                name: 'UNINASSAU',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/UNINASSAU%20-%20(MANAUS%20-%20CENTRO%20-%20AM).jpeg"
            },
            {
                name: 'UNINORTE',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/UNINORTE%20-%20(MANAUS%20-%20CENTRO%20-%20AM).png"
            },
            {
                name: 'UNIVERITAS',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/UNIVERITAS%20(UNG)%20-%20BELO%20HORIZONTE.png"
            },
            {
                name: 'NILTON LINS',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/UNIVERSIDADE%20NILTON%20LINS%20-%20UNIDADE%20JAPIIM.jpeg"
            },
            {
                name: 'UNS IDIOMAS',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/UNS%20IDIOMAS.jpg"
            },
            {
                name: 'UNG',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/UnG%20-%20(BONSUCESSO%20-SP).png"
            },
            {
                name: 'YES IDIOMAS',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/YES%20IDIOMAS%20-%20UNIDADE%20BOLA%20DA%20SUFRAMA.jpg"
            },
            {
                name: 'ESCOLAR',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/escolar%20logo%204.jpg"
            },
            {
                name: 'UNIPOPULAR',
                image: "https://adm.educacoes.com.br/storage/uploads/logo/unipopular%20logo.jpg"
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
  