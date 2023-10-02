<template>
    <div v-if="!resposta.cursos" class="text-center">
        <span>Carregando...</span>
    </div>
    <div v-else>
        <section class="mt-3 container">
            <div class="row mb-2">
                <div class="d-flex justify-content-between">
                    <div class="col-sm-4 col-md-6 text-start">
                        <p class="result">Resultados: <span id="resultado-contador">
                                {{ resultadosEncontrados }}
                            </span><a class="btn-limpar" @click="limparFiltros">LIMPAR FILTRO</a>
                        </p>
                    </div>
                    <div class="col-sm-8 col-md-6 text-end">
                        <div class="dropdown">
                            <button class="btn btn-filtro" type="button" id="filterDropdown" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i class="bi bi-filter"></i>
                            </button>
                            <ul class="dropdown-menu menu-filtro" aria-labelledby="filterDropdown">
                                <li v-for="(turno, index) in turnosExistentes" :key="index">
                                    <input type="radio" :id="turno.id" name="turno" :value="turno.nome"
                                        @click="filtroTurno(turno.nome)" class="fturnos" />
                                    <label :for="turno.id">{{ turno.nome }}</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ==================== -->
            <!-- <div class="row mt-1">
                <form @submit.prevent="pesquisaSubmit">
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><i class="bi bi-easel"></i></span>
                            <select class="form-select" aria-label="Nível de Ensino" v-model="nivelEnsino"
                                @change="filtroNivelEnsino(nivelEnsino)">
                                <option value="GRADUAÇÃO" selected>GRADUAÇÃO</option>
                                <option value="GRADUAÇÃO">PÓS-GRADUAÇÃO</option>
                                <option v-for="(nivelEnsino, index) in nivelEnsinos" :key="index" :value="nivelEnsino.nome">
                                    {{ nivelEnsino.nome }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><i class="bi bi-geo-alt"></i></span>
                            <input type="text" class="form-control curso" placeholder="Sua Cidade" aria-label="Cidade"
                                value="Manaus-AM" aria-describedby="basic-addon1" name="curso" />
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control curso" placeholder="Curso" aria-label="Curso"
                                value="DIREITO" aria-describedby="basic-addon1" name="curso" />
                            <button class="btn btn-outline-secondary" type="submit"><i class="bi bi-search"></i></button>
                        </div>
                    </div>
                </form>
            </div> -->
            <!-- ================= -->
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
                        <div class="custom-card col-md-4 card m-2" v-for="(result, index) in paginatedItems" :key="index"
                            @click="$router.push({
                                name: 'curso',
                                params: { id: result.id }
                            })">
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
                                        <p v-if="result.prazo_inscricao">Prazo de inscrição: {{
                                            formatarData(result.prazo_inscricao) }}</p>
                                        <p v-if="result.previsao_inicio">Previsão de início: {{
                                            formatarData(result.previsao_inicio) }}</p>
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
        <section class="pagination-pages">
            <PaginationComponent :currentPage="currentPage" :totalPages="totalPages" @setPage="setPage" />
        </section>
    </div>
</template>
  
<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import { cursoStore, pinia } from '@/stores/getCursos';
import 'vue3-carousel/dist/carousel.css';
import PaginationComponent from '@/components/Paginacao/PaginationComponent.vue';
import { usePaginationStore } from '@/stores/paginationStore';

export default defineComponent({
    name: 'resultados',
    components: {
        Carousel,
        Slide,
        Navigation,
        PaginationComponent,
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
        formatarData(data) {
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
        turnosExistentes() {
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
@import './resultado.scss';
</style>
  
