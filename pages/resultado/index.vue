<template>
    <div v-if="!resposta.cursos" class="text-center">
        <sloganResultado />
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
                                <li>
                                    <input type="radio" id="menorValor" name="menorValor" value="menorValor"
                                        @click="filtroValorMenor()" />
                                    <label for="menorValor">Menor Valor <i class="bi bi-arrow-down"></i></label>
                                </li>
                                <li>
                                    <input type="radio" id="maiorValor" name="maiorValor" value="maiorValor"
                                        @click="filtroValorMaior()" />
                                    <label for="maiorValor">Maior Valor <i class="bi bi-arrow-up"></i></label>
                                </li>
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
            <div class="accordion accordion-flush" id="formResultado">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <span class="accordion-title">Alterar sua busca</span>
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                        data-bs-parent="#formResultado">
                        <div class="accordion-body">
                            <!-- <FormResultado :dataBusca="dataBusca" :niveisEnsino="niveisEnsino" /> -->
                            <form @submit.prevent="graduacaoSubmit" class="mt-1">
                                <div class="row col">
                                    <div class="col-lg-3">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon1"><i
                                                    class="bi bi-easel"></i></span>
                                            <!-- @change="filtrodataBusca(dataBusca)" v-model="nomeNivel" -->
                                            <select class="form-select" aria-label="Nível de Ensino"
                                                placeholder="Selecione o nível de ensino" v-model="nomeNivel">
                                                <!-- <option value="GRADUAÇÃO" selected>{{ dataBusca.nomeNivel }}</option> -->
                                                <option disabled="disabled" value="">Selecione o Nível de Ensino
                                                </option>
                                                <option v-for="nivelEnsino in niveisEnsino" :key="nivelEnsino.id"
                                                    :value="nivelEnsino.nome">
                                                    {{ nivelEnsino.nome }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-3">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon1"><i class="bi bi-backpack"></i></span>
                                            <select class="form-select" aria-label="Modalidade" placeholder="Modalidade"
                                                v-model="nomeModalidade" :disabled="nomeNivel != 'GRADUAÇÃO' && nomeNivel != 'CURSOS TÉCNICOS' && nomeNivel != 'CURSOS LIVRES' && nomeNivel != 'DOUTORADO' && nomeNivel != 'MESTRADO'">
                                                <option disabled="disabled" value="">Selecione a Modalidade</option>
                                                <option value="PRESENCIAL">Presencial</option>
                                                <option value="EAD">EAD</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-3">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon1"><i
                                                    class="bi bi-geo-alt"></i></span>
                                            <input type="text" spellcheck="false" class="form-control curso"
                                                placeholder="Cidade de sua preferência" aria-label="Cidade"
                                                v-model="nomeCidade" aria-describedby="basic-addon1" name="nomeCidade"
                                                @input="fetchEndereco" />
                                            <ul v-if="showLugar" class="cidade-options">
                                                <li v-for="option in optionsLugar" :key="option.id"
                                                    @click="selectOptionEndereco(option)">
                                                    {{ option.nome }}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-lg-3">
                                        <div class="input-group mb-3">
                                            <!-- :value="dataBusca.nomeCurso" -->
                                            <input type="text" class="form-control curso" placeholder="Curso"
                                                aria-label="Curso" aria-describedby="basic-addon1" name="curso"
                                                @input="fetchOptions" v-model="nomeCurso" />
                                            <button type="submit" class="btn btn-outline-secondary"
                                                :disabled="nomeNivel == null || nomeCidade == null"><i
                                                    class="bi bi-search"></i></button>
                                            <ul v-if="showOptions" class="curso-options">
                                                <li v-for="option in options" :key="option.id"
                                                    @click="selectOption(option)">
                                                    {{ option.nome }}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <!-- {{ dataBusca }} -->
                            </form>
                        </div>
                    </div>
                </div>
            </div>
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
                            @click="abrirCurso(result.id_curso)">
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
                                            <i class="bi bi-paperclip"></i> Curso em cadastro reserva
                                        </p>
                                    </div>
                                </div>
                                <div class="row mb-1 mt-2 fixed-bottom-div">
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
import api from "@/services/api";
import PaginationComponent from '@/components/Paginacao/PaginationComponent.vue';
import { usePaginationStore } from '@/stores/paginationStore';
import sloganResultado from '@/components/sloganCarregamento/sloganResultado.vue';
// import FormResultado from '@/components/FormResultado/FormResultado.vue';

export default defineComponent({
    name: 'resultados',
    components: {
        Carousel,
        Slide,
        Navigation,
        PaginationComponent,
        sloganResultado,
        // FormResultado,
    },
    data: () => ({
        optionsLugar: [],
        options: [],
        showOptions: false,
        showLugar: false,
        cursos: [],
        endereco: [],
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
        filtroValorMenor(){
            const paginationStore = usePaginationStore();
            paginationStore.filtroValorMenor();
        },
        filtroValorMaior(){
            const paginationStore = usePaginationStore();
            paginationStore.filtroValorMaior();
        },
        formatarMoeda(valor) {
            return valor.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            });
        },
        abrirCurso(id){
            window.open('https://inscricao.educacoes.com.br/inscricao/' + id);
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
        },
        async fetchEndereco() {
            if (this.nomeCidade.length > 1) {
                this.showLugar = true;
                const response = await api.post('/enderecos/cidades')
                this.endereco = response.data
                this.optionsLugar = this.endereco.filter((option) => {
                    return option.nome
                        .toLowerCase()
                        .startsWith(this.nomeCidade.toLowerCase());
                });
            } else {
                this.showLugar = false;
            }
        },
        async fetchOptions() {
            if (this.nomeCurso.length > 1) {
                this.showOptions = true;
                const response = await api.get('/cursos/autocomplete')
                this.cursos = response.data
                this.options = this.cursos.filter((option) => {
                    return option.nome
                        .toLowerCase()
                        .startsWith(this.nomeCurso.toLowerCase());
                });
            } else {
                this.showOptions = false;
            }
        },
        selectOptionEndereco(option) {
            this.nomeCidade = option.nome;
            this.showLugar = false;
        },
        selectOption(option) {
            this.nomeCurso = option.nome;
            this.showOptions = false;
        },
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
        const dataBusca = ref([]);
        const niveisEnsino = ref([]);
        const turnos = ref([]);
        const areaConhecimento = ref([]);

        var data = myStore.response;

        onMounted(async () => {
            await myStore.getCursos(data)
            resposta.value = myStore.resposta;
            JSON.parse(JSON.stringify([resposta]));

            await myStore.getTurnos();
            turnos.value = myStore.Turnos;

            await myStore.getAreaConhecimento();
            areaConhecimento.value = myStore.areaConhecimento;

            await myStore.getNiveisEnsino();
            niveisEnsino.value = myStore.niveisEnsino;

            dataBusca.value = myStore.pesquisaData;

            paginationStore.cursoOriginal = resposta.value.cursos;
            paginationStore.cursoOriginal.sort(() => Math.random() - 0.5);
            paginationStore.cursoExibido = resposta.value.cursos;
        });

        const nomeNivel = ref(null);
        const nomeModalidade = ref(null);
        const nomeCidade = ref(null);
        const nomeCurso = ref(null);
        const nomeArea = ref(null);
        const nomeEstado = ref(null);
        const nomeTurno = ref(null);
        const anoEscolar = ref(null);

        const graduacaoSubmit = () => {
            const data = {
                nomeNivel: nomeNivel.value,
                nomeModalidade: '',
                nomeCurso: nomeCurso.value,
                nomeArea: '',
                nomeTurno: '',
                nomeCidade: nomeCidade.value,
                nomeEstado: '',
            };
            const myStore = cursoStore(pinia);
            myStore.setCursos(data);
            localStorage.setItem('data', JSON.stringify(data));
            window.location.reload();
            }

        return {
            resposta,
            logos,
            dataBusca,
            niveisEnsino,
            turnos,
            areaConhecimento,
            nomeNivel,
            nomeModalidade,
            nomeCidade,
            nomeCurso,
            nomeArea,
            nomeEstado,
            nomeTurno,
            anoEscolar,
            graduacaoSubmit,
        };
    },
});
</script>
  
<style lang="scss" scoped>
@import './resultado.scss';
</style>
  
