<template>
    <section>
        <form @submit.prevent="graduacaoSubmit" class="mt-1">
            <div class="row col">
                <div class="col-lg-4">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-easel"></i></span>
                        <!-- @change="filtrodataBusca(dataBusca)" v-model="nomeNivel" -->
                        <select class="form-select" aria-label="Nível de Ensino" placeholder="Selecione o nível de ensino"
                            v-model="nomeNivel">
                            <!-- <option value="GRADUAÇÃO" selected>{{ dataBusca.nomeNivel }}</option> -->
                            <option disabled="disabled" value="">Selecione o Nível de Ensino</option>
                            <option v-for="nivelEnsino in niveisEnsino" :key="nivelEnsino.id" :value="nivelEnsino.nome">
                                {{ nivelEnsino.nome }}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-geo-alt"></i></span>
                        <input type="text" spellcheck="false" class="form-control curso"
                            placeholder="Cidade de sua preferência" aria-label="Cidade" v-model="nomeCidade"
                            aria-describedby="basic-addon1" name="nomeCidade" @input="fetchEndereco" />
                        <ul v-if="showLugar" class="cidade-options">
                            <li v-for="option in optionsLugar" :key="option.id" @click="selectOptionEndereco(option)">
                                {{ option.nome }}
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="input-group mb-3">
                        <!-- :value="dataBusca.nomeCurso" -->
                        <input type="text" class="form-control curso" placeholder="Curso" aria-label="Curso"
                            aria-describedby="basic-addon1" name="curso" @input="fetchOptions" v-model="nomeCurso" />
                        <button type="submit" class="btn btn-outline-secondary"
                        :disabled="nomeNivel == null || nomeCidade == null"><i class="bi bi-search"></i></button>
                        <ul v-if="showOptions" class="curso-options">
                            <li v-for="option in options" :key="option.id" @click="selectOption(option)">
                                {{ option.nome }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- {{ dataBusca }} -->
        </form>
    </section>
</template>

<script>
import { cursoStore, pinia } from '@/stores/getCursos';
import api from "@/services/api";
export default defineComponent({
    name: 'FormResultado',
    data() {
        return {
            optionsLugar: [],
            options: [],
            showOptions: false,
            showLugar: false,
            cursos: [],
            endereco: [],
        }
    },
    props: {
        dataBusca: Object,
        niveisEnsino: Object,
    },
    methods: {
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
    setup() {
        const myStore = cursoStore(pinia);
        const turnos = ref([]);
        const areaConhecimento = ref([]);

        onMounted(async () => {
            await myStore.getTurnos();
            turnos.value = myStore.Turnos;

            await myStore.getAreaConhecimento();
            areaConhecimento.value = myStore.areaConhecimento;
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
            // nomeNivel.value = '';
            // nomeCidade.value = '';
            // nomeCurso.value = '';
        };

        return {
            // niveisEnsino,
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
        }
    }

});
</script>

<style lang="scss" scoped>
.input-group {
    width: 100%;

    span {
        background-color: #50a4b1;
        color: #fff;
        border: 1px solid #50a4b1;
        border-radius: 10px 0 0 10px;
    }

    select {
        border-radius: 10px;
        border: 1px solid #50a4b1;
        color: #50a4b1;
        font-weight: bold;
        font-size: 1rem;
        padding: 0.2rem 0.5rem;
        transition: all 0.3s ease-in-out;

        &:focus {
            border: 1px solid #50a4b1;
            box-shadow: 0 0 11px rgba(33, 33, 33, .2);
        }
    }

    button {
        border-radius: 0 10px 10px 0;
        border: 1px solid #50a4b1;
        color: #50a4b1;
        font-weight: bold;
        font-size: 1rem;
        padding: 0.2rem 0.5rem;
        transition: all 0.3s ease-in-out;

        &:hover {
            background-color: #50a4b1;
            color: #fff;
        }

        &:focus {
            border: 1px solid #50a4b1;
            box-shadow: 0 0 11px rgba(33, 33, 33, .2);
        }
        &:disabled {
            background-color: #ccc;
            color: #fff;
            border: 1px solid #ccc;
        }
    }

    .curso {
        &:focus {
            border: 1px solid #50a4b1;
            box-shadow: 0 0 11px rgba(33, 33, 33, .2);
        }
    }
}

.cidade-options {
    position: absolute;
    background-color: #fff;
    width: 25rem;
    max-height: 200px;
    overflow-y: auto;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0 0 0 1rem;
    margin: 2.3rem 0 0 0;
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
        width: 100%;
    }

    @media (max-width: 765px) {
        margin-left: 0.1rem;
        width: 100%;
    }
}

.curso-options{
    position: absolute;
    background-color: #fff;
    width: 25rem;
    max-height: 200px;
    overflow-y: auto;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0 0 0 1rem;
    margin: 2.3rem 0 0 0;
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
        width: 100%;
    }

    @media (max-width: 765px) {
        margin-left: 0.1rem;
        width: 100%;
    }
}
</style>