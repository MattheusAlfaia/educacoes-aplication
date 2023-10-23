<template>
    <div class="form-container">
        <section class="busca-bolsas text-white" :style="{ backgroundColor: backgroundColor }">
            <form v-if="indice === 0" @submit.prevent="graduacaoSubmit">
                <div class="form-group">
                    <div class="row mb-1">
                        <div class="col-lg-6">
                            <label for="form-select" class="form-label">Selecione Modalidade:</label>
                            <select id="Select" class="form-select" placeholder="Digite a Modalidade"
                                v-model="nomeModalidade">
                                <option disabled="disabled" value="">Selecione o Modalidade</option>
                                <option v-for="modalidade in modalidades" :key="modalidade.id" :value="modalidade.nome">
                                    {{ modalidade.nome }}
                                </option>
                            </select>
                        </div>
                        <div class="col-lg-6">
                            <label for="cidade" class="form-label">Cidade:</label>
                            <input type="text" class="form-control" id="cidade" aria-describedby="cidade" v-model="cidade"
                                @input="fetchEndereco">
                            <ul v-if="showLugar" class="cidade-options">
                                <li v-for="option in optionsLugar" :key="option.id" @click="selectOptionEndereco(option)">
                                    {{ option.nome }}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 mb-3">
                            <label for="curso" class="form-label">Curso:</label>
                            <input type="text" id="curso" class="form-control" placeholder="Digite o nome do curso"
                                aria-label="Digite o nome do curso" v-model="curso" @input="fetchOptions" />
                        </div>
                        <ul v-if="showOptions" class="curso-options">
                            <li v-for="option in options" :key="option.id" @click="selectOption(option)">
                                {{ option.nome }}
                            </li>
                        </ul>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 d-grid gap-2">
                            <button type="submit" class="btn btn-custom"
                            :disabled="!nomeModalidade || !cidade || !curso">Buscar</button>
                        </div>
                    </div>
                </div>
            </form>
            <!-- pós graduação -->
            <form v-if="indice === 1" @submit.prevent="posgraduacaoSubmit">
                <div class="form-group col-lg-3">
                    <div class="row mb-2">
                        <div class="col-md-12 col-lg-12">
                            <label for="cidade" class="form-label">Cidade:</label>
                            <input type="text" class="form-control" id="cidade" aria-describedby="cidade" v-model="cidade"
                                @input="fetchEndereco" autocomplete="off">
                            <ul v-if="showLugar" class="cidade-options">
                                <li v-for="option in optionsLugar" :key="option.id" @click="selectOptionEndereco(option)">
                                    {{ option.nome }}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="row mb-2 mt-2 mb-4">
                        <div class="col-lg-12">
                            <label for="form-select" class="form-label">Escolha a área de conhecimento desejada:</label>
                            <select id="Select" class="form-select" placeholder="---NÍVEL---" v-model="area">npm
                                <option v-for="area in areaConhecimento" :key="area.id" :value="area.nome">
                                    {{ area.nome }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 d-grid gap-2">
                            <button type="submit" class="btn btn-custom"
                            :disabled="!cidade || !area">Buscar</button>
                        </div>
                    </div>
                </div>
            </form>
            <!-- EDUCAÇÃO BÁSICA -->
            <form v-if="indice === 2" @submit.prevent="educBasicaSubmit">
                <div class="form-group col-sm-6 col-lg-3 col-md-6">
                    <div class="row mb-2">
                        <div class="col-md-12 col-lg-12">
                            <label for="cidade" class="form-label">Cidade:</label>
                            <input type="text" class="form-control" id="cidade" aria-describedby="cidade" v-model="cidade"
                                @input="fetchEndereco" autocomplete="off">
                            <ul v-if="showLugar" class="cidade-options">
                                <li v-for="option in optionsLugar" :key="option.id" @click="selectOptionEndereco(option)">
                                    {{ option.nome }}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-lg-12">
                            <label for="form-select" class="form-label">Selecione o ano escolar:</label>
                            <select id="Select" class="form-select" placeholder="---NÍVEL---" v-model="AnoEscolar">
                                <option v-for="aescolar in anoEscolar" :key="aescolar.id" :value="aescolar.nome">
                                    {{ aescolar.nome }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 d-grid gap-2">
                            <button type="submit" class="btn btn-custom"
                            :disabled="!cidade || !AnoEscolar"
                            >Buscar</button>
                        </div>
                    </div>
                </div>
            </form>
            <!-- Idiomas -->
            <form v-if="indice === 3" @submit.prevent="idiomasSubmit">
                <div class="form-group col-sm-12 col-lg-3 col-md-6">
                    <div class="row mb-2">
                        <div class="col-lg-12">
                            <label for="form-select" class="form-label">Selecione Modalidade:</label>
                            <select id="Select" class="form-select" placeholder="---MODALIDADE---" v-model="nomeModalidade">
                                <option v-for="modalidade in modalidades" :key="modalidade.id" :value="modalidade.nome">
                                    {{ modalidade.nome }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-lg-12">
                            <label for="cidade" class="form-label">Cidade:</label>
                            <input type="text" class="form-control" id="cidade" aria-describedby="cidade" v-model="cidade"
                                @input="fetchEndereco" autocomplete="off">
                            <ul v-if="showLugar" class="cidade-options">
                                <li v-for="option in optionsLugar" :key="option.id" @click="selectOptionEndereco(option)">
                                    {{ option.nome }}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 d-grid gap-2">
                            <button type="submit" class="btn btn-custom"
                            :disabled="!nomeModalidade || !cidade"
                            >Buscar</button>
                        </div>
                    </div>
                </div>
            </form>
            <!-- cursos Técnicos -->
            <form v-if="indice === 4" @submit.prevent="cursosTecnico">
                <div class="form-group">
                    <div class="row">
                        <div class="col-lg-6">
                            <label for="form-select" class="form-label">Selecione Modalidade:</label>
                            <select id="Select" class="form-select" placeholder="---MODALIDADE---" v-model="nomeModalidade">
                                <option v-for="modalidade in modalidades" :key="modalidade.id" :value="modalidade.nome">
                                    {{ modalidade.nome }}
                                </option>
                            </select>
                        </div>
                        <div class="col-md-12 col-lg-6 mb-2">
                            <label for="cidade" class="form-label">Cidade:</label>
                            <input type="text" class="form-control" id="cidade" aria-describedby="cidade" v-model="cidade"
                                @input="fetchEndereco" autocomplete="off">
                            <ul v-if="showLugar" class="cidade-options">
                                <li v-for="option in optionsLugar" :key="option.id" @click="selectOptionEndereco(option)">
                                    {{ option.nome }}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-lg-12">
                            <label for="form-select" class="form-label">Selecione o Curso:</label>
                            <select id="Select" class="form-select" placeholder="---NÍVEL---" v-model="curso">
                                <option v-for="curso in cursosTecnicos" :key="curso.id" :value="curso.nome">
                                    {{ curso.nome }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 d-grid gap-2">
                            <button type="submit" class="btn btn-custom"
                            :disabled="!nomeModalidade || !cidade || !curso"
                            >Buscar</button>
                        </div>
                    </div>
                </div>
            </form>
            <!-- cursos pos-tecnicos -->
            <form v-if="indice === 5" @submit.prevent="cursosPosTecnico">
                <div class="form-group col-sm-6 col-lg-3 col-md-6">
                    <div class="row mb-2">
                        <div class="col-md-12 col-lg-12">
                            <label for="form-select" class="form-label">Selecione Modalidade:</label>
                            <select id="Select" class="form-select" placeholder="---MODALIDADE---" v-model="nomeModalidade">
                                <option v-for="modalidade in modalidades" :key="modalidade.id" :value="modalidade.nome">
                                    {{ modalidade.nome }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-md-12 col-lg-12">
                            <label for="cidade" class="form-label">Cidade:</label>
                            <input type="text" class="form-control" id="cidade" aria-describedby="cidade" v-model="cidade"
                                @input="fetchEndereco" autocomplete="off">
                            <ul v-if="showLugar" class="cidade-options">
                                <li v-for="option in optionsLugar" :key="option.id" @click="selectOptionEndereco(option)">
                                    {{ option.nome }}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 d-grid gap-2">
                            <button type="submit" class="btn btn-custom"
                            :disabled="!nomeModalidade || !cidade"
                            >Buscar</button>
                        </div>
                    </div>
                </div>
            </form>
            <!-- cursos livres -->
            <form v-if="indice === 6" @submit.prevent="cursosLivres">
                <div class="form-group">
                    <div class="row">
                        <div class="col-lg-6">
                            <label for="form-select" class="form-label">Selecione Modalidade:</label>
                            <select id="Select" class="form-select" placeholder="---MODALIDADE---" v-model="nomeModalidade">
                                <option v-for="modalidade in modalidades" :key="modalidade.id" :value="modalidade.nome">
                                    {{ modalidade.nome }}
                                </option>
                            </select>
                        </div>
                        <div class=" col-md-12 col-lg-6 mb-2">
                            <label for="cidade" class="form-label">Cidade:</label>
                            <input type="text" class="form-control" id="cidade" aria-describedby="cidade" v-model="cidade"
                                @input="fetchEndereco" autocomplete="off">
                            <ul v-if="showLugar" class="cidade-options">
                                <li v-for="option in optionsLugar" :key="option.id" @click="selectOptionEndereco(option)">
                                    {{ option.nome }}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-lg-12">
                            <label for="form-select" class="form-label">Selecione o Curso:</label>
                            <select id="Select" class="form-select" placeholder="---NÍVEL---" v-model="curso">
                                <option v-for="curso in cursosLivresOpcs" :key="curso.id" :value="curso.nome">
                                    {{ curso.nome }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 d-grid gap-2">
                            <button type="submit" class="btn btn-custom"
                            :disabled="!nomeModalidade || !cidade || !curso"
                            >Buscar</button>
                        </div>
                    </div>
                </div>
            </form>
            <!-- curso supletivo -->
            <form v-if="indice === 7" @submit.prevent="supletivoSubmit">
                <div class="form-group col-sm-6 col-lg-3 col-md-6">
                    <div class="row mb-2">
                        <div class="col-md-12 col-lg-12">
                            <label for="form-select" class="form-label">Selecione Modalidade:</label>
                            <select id="Select" class="form-select" placeholder="---MODALIDADE---" v-model="nomeModalidade">
                                <option v-for="modalidade in modalidades" :key="modalidade.id" :value="modalidade.nome">
                                    {{ modalidade.nome }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-md-12 col-lg-12">
                            <label for="cidade" class="form-label">Cidade:</label>
                            <input type="text" class="form-control" id="cidade" aria-describedby="cidade" v-model="cidade"
                                @input="fetchEndereco" autocomplete="off">
                            <ul v-if="showLugar" class="cidade-options">
                                <li v-for="option in optionsLugar" :key="option.id" @click="selectOptionEndereco(option)">
                                    {{ option.nome }}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 d-grid gap-2">
                            <button type="submit" class="btn btn-custom"
                            :disabled="!nomeModalidade || !cidade"
                            >Buscar</button>
                        </div>
                    </div>
                </div>
            </form>
            <!-- curso pré-vestibular -->
            <form v-if="indice === 8" @submit.prevent="preVestibularSubmit">
                <div class="form-group col-sm-6 col-lg-3 col-md-6">
                    <div class="row mb-2">
                        <div class="col-md-12 col-lg-12">
                            <label for="form-select" class="form-label">Selecione Modalidade:</label>
                            <select id="Select" class="form-select" placeholder="---MODALIDADE---" v-model="nomeModalidade">
                                <option v-for="modalidade in modalidades" :key="modalidade.id" :value="modalidade.nome">
                                    {{ modalidade.nome }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-md-12 col-lg-12">
                            <label for="cidade" class="form-label">Cidade:</label>
                            <input type="text" class="form-control" id="cidade" aria-describedby="cidade" v-model="cidade"
                                @input="fetchEndereco" autocomplete="off">
                            <ul v-if="showLugar" class="cidade-options">
                                <li v-for="option in optionsLugar" :key="option.id" @click="selectOptionEndereco(option)">
                                    {{ option.nome }}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 d-grid gap-2">
                            <button type="submit" class="btn btn-custom"
                            :disabled="!nomeModalidade || !cidade"
                            >Buscar</button>
                        </div>
                    </div>
                </div>
            </form>
            <!-- mestrado -->
            <form v-if="indice === 9" @submit.prevent="mestradoSubmit">
                <div class="form-group col-lg-3">
                    <div class="col-lg-12">
                        <label for="form-select" class="form-label">Selecione Modalidade:</label>
                        <select id="Select" class="form-select" placeholder="---MODALIDADE---" v-model="nomeModalidade">
                            <option v-for="modalidade in modalidades" :key="modalidade.id" :value="modalidade.nome">
                                {{ modalidade.nome }}
                            </option>
                        </select>
                    </div>
                    <div class="row mb-4 mt-2">
                        <div class="col-lg-12">
                            <label for="form-select" class="form-label">Escolha a área de conhecimento desejada:</label>
                            <select id="Select" class="form-select" placeholder="---NÍVEL---" v-model="area">npm
                                <option v-for="area in areaConhecimento" :key="area.id" :value="area.nome">
                                    {{ area.nome }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 d-grid gap-2">
                            <button type="submit" class="btn btn-custom"
                            :disabled="!nomeModalidade || !area"
                            >Buscar</button>
                        </div>
                    </div>
                </div>
            </form>
            <!-- Doutorado -->
            <form v-if="indice === 10" @submit.prevent="doutoradoSubmit">
                <div class="form-group col-lg-3">
                    <div class="col-lg-12">
                        <label for="form-select" class="form-label">Selecione Modalidade:</label>
                        <select id="Select" class="form-select" placeholder="---MODALIDADE---" v-model="nomeModalidade">
                            <option v-for="modalidade in modalidades" :key="modalidade.id" :value="modalidade.nome">
                                {{ modalidade.nome }}
                            </option>
                        </select>
                    </div>
                    <div class="row mb-4 mt-2">
                        <div class="col-lg-12">
                            <label for="form-select" class="form-label">Escolha a área de conhecimento desejada:</label>
                            <select id="Select" class="form-select" placeholder="---NÍVEL---" v-model="area">npm
                                <option v-for="area in areaConhecimento" :key="area.id" :value="area.nome">
                                    {{ area.nome }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 d-grid gap-2">
                            <button type="submit" class="btn btn-custom"
                            :disabled="!nomeModalidade || !area"
                            >Buscar</button>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    </div>
</template>

<script>
import { ref } from "vue";
import { cursoStore, pinia } from '@/stores/getCursos';
import api from "@/services/api";
// import { cursoStore } from "@/stores/getCursos";

export default {
    name: 'FormEnsino',
    props: {
        backgroundColor: String,
        indice: Number,
    },
    data() {
        return {
            optionsLugar: [],
            options: [],
            showOptions: false,
            showLugar: false,
            cursos: [],
            endereco: [],
            anoEscolar: [
                { id: 1, nome: 'BERÇÁRIO' },
                { id: 2, nome: 'MATERNAL I - (2 ANOS)' },
                { id: 3, nome: 'MATERNAL II - (3 ANOS)' },
                { id: 4, nome: 'JARDIM I / 1º PERÍODO - (4 ANOS)' },
                { id: 5, nome: 'JARDIM II / 2º PERÍODO - (5 ANOS)' },
                { id: 6, nome: 'JARDIM II / 3º PERÍODO - (5 ANOS)' },
                { id: 7, nome: '1º ANO - ENSINO FUNDAMENTAL I' },
                { id: 8, nome: '2º ANO - ENSINO FUNDAMENTAL I' },
                { id: 9, nome: '3º ANO - ENSINO FUNDAMENTAL I' },
                { id: 10, nome: '4º ANO - ENSINO FUNDAMENTAL I' },
                { id: 11, nome: '5º ANO - ENSINO FUNDAMENTAL I' },
                { id: 12, nome: '6º ANO - ENSINO FUNDAMENTAL II' },
                { id: 13, nome: '7º ANO - ENSINO FUNDAMENTAL II' },
                { id: 14, nome: '8º ANO - ENSINO FUNDAMENTAL II' },
                { id: 15, nome: '9º ANO - ENSINO FUNDAMENTAL II' },
                { id: 16, nome: '1º ANO - ENSINO MÉDIO' },
                { id: 17, nome: '2º ANO - ENSINO MÉDIO' },
                { id: 18, nome: '3º ANO - ENSINO MÉDIO' },
            ],
            cursosTecnicos: [
                { id: 1, nome: 'ADMINISTRAÇÃO' },
                { id: 2, nome: 'ANÁLISES CLÍNICAS' },
                { id: 3, nome: 'AUTOMAÇÃO INDUSTRIAL' },
                { id: 4, nome: 'AUXILIAR EM SAÚDE BUCAL' },
                { id: 5, nome: 'CONTABILIDADE' },
                { id: 6, nome: 'EDIFICAÇÕES' },
                { id: 7, nome: 'ELETRÔNICA' },
                { id: 8, nome: 'ELETROTÉCNICA' },
                { id: 9, nome: 'ENFERMAGEM' },
                { id: 10, nome: 'ESTÉTICA' },
                { id: 11, nome: 'FARMÁCIA' },
                { id: 12, nome: 'GASTRONOMIA' },
                { id: 13, nome: 'INDÚSTRIA 4.0' },
                { id: 14, nome: 'INFORMÁTICA' },
                { id: 15, nome: 'INFORMÁTICA COM ÊNFASE EM PROGRAMAÇÃO' },
                { id: 16, nome: 'LOGÍSTICA' },
                { id: 17, nome: 'MASSOTERAPIA' },
                { id: 18, nome: 'MECÂNICA' },
                { id: 19, nome: 'MECATRÔNICA' },
                { id: 20, nome: 'NUTRIÇÃO' },
                { id: 21, nome: 'NUTRIÇÃO E DIETÉTICA' },
                { id: 22, nome: 'QUALIDADE' },
                { id: 23, nome: 'RADIOLOGIA' },
                { id: 24, nome: 'RECURSOS HUMANOS' },
                { id: 25, nome: 'REFRIGERAÇÃO E CLIMATIZAÇÃO' },
                { id: 26, nome: 'SEGURANÇA DO TRABALHO' },
                { id: 27, nome: 'SERVIÇOS JURÍDICOS' },
                { id: 28, nome: 'SOLDAGEM' },
                { id: 29, nome: 'TÉCNICO EM ANÁLISES CLÍNICAS' },
                { id: 30, nome: 'TÉCNICO EM LOGÍSTICA' },
                { id: 31, nome: 'TÉCNICO EM QUALIDADE' },
                { id: 32, nome: 'TRANSAÇÕES IMOBILIÁRIAS' }
            ],
            cursosLivresOpcs: [
                { id: 1, nome: 'ADMINISTRATIVO' },
                { id: 2, nome: 'ADMINISTRATIVO (SÁBADO)' },
                { id: 3, nome: 'ASSISTENTE ADMINISTRATIVO' },
                { id: 4, nome: 'AUXILIAR EM FARMÁCIA' },
                { id: 5, nome: 'CANVA PROFISSIONAL' },
                { id: 6, nome: 'CAPACITAÇÃO EM INFORMÁTICA' },
                { id: 7, nome: 'CONTROLE DE QUALIDADE' },
                { id: 8, nome: 'DESENVOLVIMENTO WEB' },
                { id: 9, nome: 'DESIGN GRÁFICO' },
                { id: 10, nome: 'ESTÉTICA' },
                { id: 11, nome: 'ESTÉTICA (SÁBADO)' },
                { id: 12, nome: 'EXCEL PROFISSIONAL' },
                { id: 13, nome: 'INDUSTRIAL' },
                { id: 14, nome: 'INDUSTRIAL (SÁBADO)' },
                { id: 15, nome: 'INFORMÁTICA BÁSICA E AVANÇADA (50%)' },
                { id: 16, nome: 'INFORMÁTICA BÁSICA E AVANÇADA (SÁBADO) (50%)' },
                { id: 17, nome: 'INFORMÁTICA KIDS' },
                { id: 18, nome: 'INFORMÁTICA PROFISSIONAL' },
                { id: 19, nome: 'INGLÊS BÁSICO' },
                { id: 20, nome: 'INGLÊS INTERMEDIÁRIO' },
                { id: 21, nome: 'JOVEM APRENDIZ' },
                { id: 22, nome: 'JOVEM APRENDIZ (SÁBADO)' },
                { id: 23, nome: 'MARKETING DIGITAL' },
                { id: 24, nome: 'OPERADOR DE CAIXA' },
                { id: 25, nome: 'PACOTE OFFICE' },
                { id: 26, nome: 'PREPARATÓRIO PARA PRIMEIRO EMPREGO' }
            ],

        };
    },
    methods: {
        async fetchEndereco() {
            if (this.cidade.length > 1) {
                this.showLugar = true;
                const response = await api.post('/enderecos/cidades')
                this.endereco = response.data
                this.optionsLugar = this.endereco.filter((option) => {
                    return option.nome
                        .toLowerCase()
                        .startsWith(this.cidade.toLowerCase());
                });
            } else {
                this.showLugar = false;
            }
        },
        selectOptionEndereco(option) {
            this.cidade = option.nome;
            this.showLugar = false;
        },
        async fetchOptions() {
            if (this.curso.length > 1) {
                this.showOptions = true;
                const response = await api.get('/cursos/autocomplete')
                this.cursos = response.data
                this.options = this.cursos.filter((option) => {
                    return option.nome
                        .toLowerCase()
                        .startsWith(this.curso.toLowerCase());
                });
            } else {
                this.showOptions = false;
            }
        },
        selectOption(option) {
            this.curso = option.nome;
            this.showOptions = false;
        },
    },
    setup() {
        const myStore = cursoStore(pinia);
        const modalidades = ref([]);
        const turnos = ref([]);
        const areaConhecimento = ref([]);

        onMounted(async () => {
            await myStore.getModalidades();
            modalidades.value = myStore.Modalidades;

            await myStore.getTurnos();
            turnos.value = myStore.Turnos;

            await myStore.getAreaConhecimento();
            areaConhecimento.value = myStore.areaConhecimento;
        });

        const nomeModalidade = ref(null);
        const cidade = ref(null);
        const curso = ref(null);
        const area = ref(null);
        const estado = ref(null);
        const turno = ref(null);
        const AnoEscolar = ref(null);

        const graduacaoSubmit = () => {
            const data = {
                nomeNivel: 'GRADUAÇÃO',
                nomeModalidade: nomeModalidade.value,
                nomeCurso: curso.value,
                nomeArea: '',
                nomeTurno: '',
                nomeCidade: cidade.value,
                nomeEstado: estado.value,
            };
            const myStore = cursoStore(pinia);
            myStore.setCursos(data);
            localStorage.setItem('data', JSON.stringify(data));
            navigateTo('/resultado');
        };

        const posgraduacaoSubmit = () => {
            const data = {
                nomeNivel: 'PÓS-GRADUAÇÃO',
                nomeModalidade: '',
                nomeCurso: '',
                nomeArea: area.value,
                nomeTurno: turno.value,
                nomeCidade: cidade.value,
                nomeEstado: '',
            };
            const myStore = cursoStore(pinia);
            myStore.setCursos(data);
            localStorage.setItem('data', JSON.stringify(data));
            navigateTo('/resultado');
        };

        const educBasicaSubmit = () => {
            const data = {
                nomeNivel: 'EDUCAÇÃO BÁSICA',
                nomeModalidade: '',
                nomeCurso: AnoEscolar.value,
                nomeArea: '',
                nomeTurno: '',
                nomeCidade: cidade.value,
                nomeEstado: '',
            };
            const myStore = cursoStore(pinia);
            myStore.setCursos(data);
            localStorage.setItem('data', JSON.stringify(data));
            navigateTo('/resultado');
        };

        const idiomasSubmit = () => {
            const data = {
                nomeNivel: 'IDIOMAS',
                nomeModalidade: nomeModalidade.value,
                nomeCurso: '',
                nomeArea: area.value,
                nomeTurno: '',
                nomeCidade: '',
                nomeEstado: '',
            };
            const myStore = cursoStore(pinia);
            myStore.setCursos(data);
            localStorage.setItem('data', JSON.stringify(data));
            navigateTo('/resultado');
        };

        const cursosTecnico = () => {
            const data = {
                nomeNivel: 'CURSOS TÉCNICOS',
                nomeModalidade: nomeModalidade.value,
                nomeCurso: curso.value,
                nomeArea: '',
                nomeTurno: '',
                nomeCidade: cidade.value,
                nomeEstado: '',
            };
            const myStore = cursoStore(pinia);
            myStore.setCursos(data);
            localStorage.setItem('data', JSON.stringify(data));
            navigateTo('/resultado');
        };

        const cursosPosTecnico = () => {
            const data = {
                nomeNivel: 'PÓS-TÉCNICOS',
                nomeModalidade: nomeModalidade.value,
                nomeCurso: '',
                nomeArea: '',
                nomeTurno: '',
                nomeCidade: cidade.value,
                nomeEstado: '',
            };
            const myStore = cursoStore(pinia);
            myStore.setCursos(data);
            localStorage.setItem('data', JSON.stringify(data));
            navigateTo('/resultado');
        };

        const cursosLivres = () => {
            const data = {
                nomeNivel: 'CURSOS LIVRES',
                nomeModalidade: nomeModalidade.value,
                nomeCurso: curso.value,
                nomeArea: '',
                nomeTurno: '',
                nomeCidade: cidade.value,
                nomeEstado: '',
            };
            const myStore = cursoStore(pinia);
            myStore.setCursos(data);
            localStorage.setItem('data', JSON.stringify(data));
            navigateTo('/resultado');
        };

        const supletivoSubmit = () => {
            const data = {
                nomeNivel: 'SUPLETIVO',
                nomeModalidade: nomeModalidade.value,
                nomeCurso: '',
                nomeArea: '',
                nomeTurno: '',
                nomeCidade: cidade.value,
                nomeEstado: '',
            };
            const myStore = cursoStore(pinia);
            myStore.setCursos(data);
            localStorage.setItem('data', JSON.stringify(data));
            navigateTo('/resultado');
        };

        const preVestibularSubmit = () => {
            const data = {
                nomeNivel: 'PRÉ-VESTIBULAR',
                nomeModalidade: nomeModalidade.value,
                nomeCurso: '',
                nomeArea: '',
                nomeTurno: '',
                nomeCidade: cidade.value,
                nomeEstado: '',
            };
            const myStore = cursoStore(pinia);
            myStore.setCursos(data);
            localStorage.setItem('data', JSON.stringify(data));
            navigateTo('/resultado');
        };

        const mestradoSubmit = () => {
            const data = {
                nomeNivel: 'MESTRADO',
                nomeModalidade: nomeModalidade.value,
                nomeCurso: '',
                nomeArea: area.value,
                nomeTurno: '',
                nomeCidade: '',
                nomeEstado: '',
            };
            const myStore = cursoStore(pinia);
            myStore.setCursos(data);
            localStorage.setItem('data', JSON.stringify(data));
            navigateTo('/resultado');
        };

        const doutoradoSubmit = () => {
            const data = {
                nomeNivel: 'DOUTORADO',
                nomeModalidade: nomeModalidade.value,
                nomeCurso: '',
                nomeArea: area.value,
                nomeTurno: '',
                nomeCidade: '',
                nomeEstado: '',
            };
            const myStore = cursoStore(pinia);
            myStore.setCursos(data);
            localStorage.setItem('data', JSON.stringify(data));

            navigateTo('/resultado');
        };

        return {
            modalidades,
            turnos,
            areaConhecimento,
            area,
            turno,
            nomeModalidade,
            cidade,
            curso,
            estado,
            AnoEscolar,
            graduacaoSubmit,
            posgraduacaoSubmit,
            educBasicaSubmit,
            idiomasSubmit,
            cursosTecnico,
            cursosPosTecnico,
            cursosLivres,
            supletivoSubmit,
            preVestibularSubmit,
            mestradoSubmit,
            doutoradoSubmit,
        };
    },
};
</script>

<style lang="scss" scoped>
.from-group{
    margin: 0 auto;
    width: 100%;
    max-width: 1280px;
    padding: 0 1rem;
}
.curso-options {
    position: absolute;
    background-color: #fff;
    width: 100%;
    max-height: 200px;
    overflow-y: auto;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0;
    margin: 4.5rem 0 0 1rem;
    list-style: none;
    z-index: 10;

    li {
        color: #000;
        padding: 0.5rem;
        cursor: pointer;

        &:hover {
            background-color: #ccc;
        }
    }

    @media (max-width: 512px) {
        width: 90%;
        margin-left: 1rem;
    }

    @media (min-width: 513px) {
        margin-left: 1rem;
        width: 50%;
    }
    @media (min-width: 910px) {
        width: 40%;
    }
    @media (min-width: 1140px) {
        width: 30%;
    }
    @media (min-width: 1280px) {
        width: 24%;
    }
}

.cidade-options {
    position: absolute;
    background-color: #fff;
    width: 13rem;
    max-height: 200px;
    overflow-y: auto;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0;
    margin: 0;
    list-style: none;
    z-index: 10;

    li {
        color: #000;
        padding: 0.5rem;
        cursor: pointer;

        &:hover {
            background-color: #ccc;
        }
    }

    @media (min-width: 1280px) {
        // para maior que 1280px
        width: 14%;
    }

    @media (max-width: 765px) {
        margin-left: 0.1rem;
    }
}

.btn-custom {
    background-color: #08cac7;
    color: #fff;
    transition: all 0.3s ease;

    &:hover {
        background-color: darken(#08cac7, 10%);
        color: #fff;
    }
}

.busca-bolsas {
    width: 100%;
    height: 15rem;

    @media (max-width: 900px) {
        height: 20rem;
    }
}

form {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;

    @media (max-width: 522px) {
        padding: 0 1rem;
    }
}

form .btn-custom {
    background: #FFF;
    color: #128199;
    border-radius: 0.5rem;
    border: none;
    padding: 0.4rem auto;
    font-size: 1.2rem;
    font-weight: bold;
    letter-spacing: 0.1rem;
    transition: all 0.3s ease-in-out;

}

.btn-custom:hover {
    background: #37bec9;
    color: #FFF;
    transition: all 0.3s ease-in-out;
}
</style>