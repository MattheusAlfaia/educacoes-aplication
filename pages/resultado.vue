<template>
    <div v-if="!resposta.cursos" class="text-center">
        <!-- <ResultadosSkeleton /> -->
        <span>Carregando...</span>
    </div>
    <div v-else>
        <section class="mt-3 container">
            <div class="row mb-2">
                <div class="d-flex justify-content-between">
                    <div class="col-md-4 text-start">
                        <p class="result">Total Cursos: <span id="resultado-contador">
                                {{ resultadosEncontrados }}
                            </span><a class="btn btn-sm text-info" @click="limparFiltros">Limpar</a>
                        </p>
                    </div>
                    <div class="col-md-8 text-end">
                        <div class="dropdown">
                            <button class="btn btn-filtro" type="button" id="filterDropdown" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i class="bi bi-filter"></i>
                            </button>
                            <ul class="dropdown-menu menu-filtro" aria-labelledby="filterDropdown">                            
                                <li v-for="(turno, index) in turnosExistentes" :key="index">
                                    <input type="radio" :id="turno.id" name="turno" :value="turno.nome"
                                        @change="filtroTurno(turno.nome)" class="fturnos"/>
                                    <label :for="turno.id">{{ turno.nome }}</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <section class="container">
                <div class="row">
                    <!-- {{ resposta.ies }} -->
                    <div class="col-md-12">
                        <Carousel class="carousel_slide" v-bind="settings" :breakpoints="breakpoints">
                            <Slide v-for="(result, index) in resposta.ies" :key="index">
                                <img class="carousel_item" @click="filtroIdIes(result.ies_id)"
                                    :src="urlLogos.url + result.logo" :alt="result.name" />
                            </Slide>
                        </Carousel>
                    </div>
                </div>
            </section>
            <section class="mt-4">
                <div class="col-md-12">
                    <!-- {{ paginatedItems }} -->
                    <div class="row">
                        <div class="custom-card col-md-4 card m-2" v-for="(result, index) in paginatedItems" :key="index">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-5 profile-image">
                                        <img :src="urlLogos.url + result.logo" alt="Imagem da instituição"
                                            class="img-fluid rounded-circle">
                                    </div>
                                    <div class="col-7 text-end">
                                        <p class="city "><span>{{ result.cidade }}</span></p>
                                        <span class="beneficio">Benefício de {{ result.valor_porcentagem }}%</span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <p class="institution-name">{{ result.nome_curso }}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 text-center">
                                        <div class="card-promotional">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <p class="price-before">De {{ formatarMoeda(result.valor_integral) }}
                                                    </p>
                                                </div>
                                                <div class="col-md-6">
                                                    <p class="price">Por {{ formatarMoeda(result.valor_bolsa) }}</p>
                                                </div>
                                                <div class="col-md-12">
                                                    <h5 class="savings">
                                                        Economia de {{ formatarMoeda(result.economia =
                                                            ((result.valor_integral - result.valor_bolsa) * 12)) }}
                                                        <br>por ano
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <section class="container">
                                    <div class="row">
                                        <div
                                            class="col-md-12 text-center d-flex justify-content-around align-items-center ">
                                            <a class="btn btn-set">{{ result.turno }}</a>
                                        </div>
                                    </div>
                                </section>
                                <div class="row mt-2">
                                    <div v-if="result.prazo_inscricao || result.previsao_inicio" class="col-md-12 warnings">
                                        <p v-if="result.prazo_inscricao">Prazo de inscrição: {{ formatarData(result.prazo_inscricao) }}</p>
                                        <p v-if="result.previsao_inicio">Previsão de início: {{ formatarData(result.previsao_inicio) }}</p>
                                    </div>
                                </div>
                                <div class="row mt-1">
                                    <div class="col-md-12 text-center">
                                        <p class="text-secondary" v-if="result.reserva === 1">
                                            <i class="bi bi-paperclip"></i> Em cadastro reserva
                                        </p>
                                    </div>
                                </div>
                                <div class="row mb-1 fixed-bottom-div">
                                    <div class="col-md-12 text-center">
                                        <p class="infos">{{ result.nivel_ensino_nome }} • {{ result.modalidade_nome }} • {{
                                            result.duracao }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
        <FilterModal />
        <section class="pagination-pages">
            <PaginationComponent :currentPage="currentPage" :totalPages="totalPages" @setPage="setPage" />
        </section>
    </div>
</template>
  
<script>
// import NavBar from '../components/NavBar.vue';
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import { cursoStore, pinia } from '@/stores/getCursos';
import 'vue3-carousel/dist/carousel.css';
import PaginationComponent from '@/components/Paginacao/PaginationComponent.vue';
import { usePaginationStore } from '@/stores/paginationStore';
import FilterModal from '@/components/FilterModal/FilterModal.vue';
// import ResultadosSkeleton from '@/components/skeleton/ResultadosSkeleton.vue'

export default defineComponent({
    name: 'resultados',
    components: {
        // NavBar,
        Carousel,
        Slide,
        Navigation,
        PaginationComponent,
        FilterModal,
        // ResultadosSkeleton
    },
    data: () => ({
        resposta_original: [],
        urlLogos: {
            url: 'https://adm.educacoes.com.br/storage/uploads/logo/',
        },
        settings: {
            itemsToShow: 2.5,
            snapAlign: 'start',
        },
        breakpoints: {
            437: {
                itemsToShow: 3.5,
                snapAlign: 'start',
            },
            700: {
                itemsToShow: 4.5,
                snapAlign: 'start',
            },
            1024: {
                itemsToShow: 5.5,
                snapAlign: 'start',
            },
        },
        resposta: {
            cursos: []
        }
    }),
    methods: {
        setPage(page) {
            const paginationStore = usePaginationStore();
            paginationStore.setPage(page);
            window.scrollTo(0, 0);
        },
        filtroIdIes(ies_id) {
            const paginationStore = usePaginationStore();
            paginationStore.filtroIdIes(ies_id);
        },
        limparFiltros() {
            const paginationStore = usePaginationStore();
            paginationStore.limparFiltro();
            var radios = document.getElementsByClassName('fturnos');
            for (var i = 0; i < radios.length; i++) {
                radios[i].checked = false;
            }
        },
        filtroTurno(opcao) {
            const paginationStore = usePaginationStore();
            paginationStore.filtroTurno(opcao);
        },
        formatarMoeda(valor) {
            return valor.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            });
        },
        formatarData(data){
            var data = new Date(data);
            var dia = data.getDate();
            if (dia.toString().length == 1)
                dia = "0" + dia;
            var mes = data.getMonth() + 1;
            if (mes.toString().length == 1)
                mes = "0" + mes;
            var ano = data.getFullYear();
            return dia + "/" + mes + "/" + ano;
        }
    },
    computed: {
        turnosExistentes(){
            const paginationStore = usePaginationStore();
            return paginationStore.turnosExistentes();
        },
        currentPage() {
            const paginationStore = usePaginationStore();
            return paginationStore.currentPage();
        },
        totalPages() {
            const paginationStore = usePaginationStore();
            return paginationStore.getTotalPages();
        },
        getCursosExibir() {
            const paginationStore = usePaginationStore();
            return paginationStore.cursoExibido;
        },
        paginatedItems() {
            const paginationStore = usePaginationStore();
            return paginationStore.paginatedItems();
        },
        resultadosEncontrados() {
            const paginationStore = usePaginationStore();
            return paginationStore.cursoExibido.length;
        }
    },
    setup() {
        const myStore = cursoStore(pinia);
        const resposta = ref([]);
        const logos = ref([]);
        const paginationStore = usePaginationStore();

        var data = myStore.response;

        onMounted(async () => {
            // await myStore.getLogos()
            // logos.value = myStore.Logos;

            await myStore.getCursos(data)
            resposta.value = myStore.resposta;
            JSON.parse(JSON.stringify([resposta]));

            paginationStore.cursoOriginal = resposta.value.cursos;
            paginationStore.cursoOriginal.sort(() => Math.random() - 0.5);
            paginationStore.cursoExibido = resposta.value.cursos;
        });

        return {
            resposta,
            logos,
        };
    },
});
</script>
  
<style lang="scss" scoped>
.menu-filtro {
    width: 10rem;
    height: auto;
    box-shadow: 0 0 11px rgba(33, 33, 33, .2);
    li {
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        // input radio
        input[type="radio"] {
            display: none;
        }

        input[type="radio"]+label {
            cursor: pointer;
            height: 2.5rem;
            width: 100%;
            border-radius: 10px;
            font-size: 1rem;
            font-weight: bold;
            color: #269bcd;
            border: 1px solid #269bcd;
            margin: 0.5rem 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        input[type="radio"]:checked+label {
            background-color: #269bcd;
            color: #fff;
        }
    }
}

.carousel_slide {
    padding: 5px;
}

.carousel_item {
    background-color: #fff;
    border-radius: 50%;
    padding: 10px;
    margin: 5px;
    height: 100px;
    width: 100px;
    text-align: center;
    font-size: 10px;
    color: #000;
    font-weight: bold;
    box-shadow: 0 0 11px rgba(33, 33, 33, .2);
}

// ================================
.result {
    font-size: 1.1rem;
    font-weight: bold;
    color: #50a4b1;
}

.btn-filtro {
    background-color: #50a4b1;
    border: none;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.2rem 0.5rem;
    border-radius: 10px;

    i {
        font-size: 1.5rem;
    }
}

.institution {
    width: 80px;
    height: 80px;
    background-color: #ccc;
    border: 1px solid #d4d4d4;
    border-radius: 50%;
    padding: 0;
    font-size: 1.5rem;
    color: #000;
}

.row {
    justify-content: center !important;
}

.custom-card {
    width: 300px;
    height: 400px;
    border: 1px solid #50A4B1;

    &:hover {
        border: 1px solid #50A4B1;
        box-shadow: 0 0 11px rgba(33, 33, 33, .2);
        cursor: pointer;
    }

    @media (max-width: 768px) {
        height: 420px;
    }

    .card-body {
        padding: 0;
    }

    .city {
        margin-right: 0.5rem;

        span {
            color: #50A4B1;
            font-size: 1rem;
            font-weight: bold;
        }
    }

    .beneficio {
        margin-right: 0.5rem;
        color: #FFAE10;
        font-size: 1rem;
        font-weight: bold;
    }

    .profile-image {
        padding: 10px 0 0 30px;

        img {
            width: 70px;
            height: 70px;
            overflow: hidden;
            border-radius: 50%;
            margin: 0 auto;
            object-fit: cover;
        }
    }

    .savings {
        font-size: 1rem;
        font-weight: bold;
        color: #12cf5a;
    }

    .price {
        padding: 0 0 0 0.5rem;
        font-size: 1rem;
        font-weight: bold;
        color: #269bcd;
    }

    .price-before {
        font-size: 1rem;
        font-weight: bold;
        color: #269bcd;
        text-decoration: line-through;
        text-decoration-color: #5a5e5c;
    }

    .institution-name {
        font-size: 0.8rem;
        padding: 0.2rem 0 0 0;
        font-weight: bold;
        color: #144C78;
        margin-left: 0.5rem;
    }

    .btn-set {
        background-color: #269bcd;
        color: #fff;
        border: 1px solid #269bcd;
        font-size: 1rem;
        font-weight: bold;
        padding: 0.5rem 1rem;
    }

    .btn-noset {
        background-color: #fff;
        color: #269bcd;
        border: 1px solid #269bcd;
        font-size: 1rem;
        font-weight: bold;
        padding: 0.5rem 1.2rem;
    }

    .warnings p {
        font-size: 1rem;
        font-weight: bold;
        color: #144C78;
        padding: 0 !important;
        margin: 0 !important;
        text-align: center;
    }

    .infos {
        font-size: 0.8rem;
        font-weight: bold;
        color: #269bcd;
        padding: 0 !important;
        margin: 0 !important;
        text-align: center;
    }

    .card-promotional {
        border: 1px solid #50A4B1;
        padding: 5px;
        margin: 5px;
        border-radius: 10px;
        margin-bottom: 10px;
    }

    .fixed-bottom-div {
    position: absolute;
    bottom: 0;
    width: 100%;
    }
}

.pagination {
    margin: 0 !important;

    .page-item a {
        background: #45a6b5 !important;
        color: #fff !important;

        :focus {
            box-shadow: none !important;
        }
    }
}

.active span {
    background: #005E73 !important;
    color: #fff !important;
    border: none;

    :focus {
        box-shadow: none !important;
    }
}</style>
  
