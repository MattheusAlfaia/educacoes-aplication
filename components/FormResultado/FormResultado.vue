<template>
    <section>
        <form @submit.prevent="graduacaoSubmit" class="mt-1">
            <div class="row col">
                <div class="col-lg-4">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-easel"></i></span>
                        <!-- @change="filtrodataBusca(dataBusca)" v-model="nomeNivel" -->
                        <select class="form-select" aria-label="Nível de Ensino" placeholder="Selecione o nível de ensino" v-model="nomeNivel">
                            <option value="GRADUAÇÃO" selected>{{ dataBusca.nomeNivel }}</option>
                            <!-- <option v-for="(dataBusca, index) in dataBuscas" :key="index" :value="dataBusca.nome">
                            {{ dataBusca.nome }}
                        </option> -->
                        </select>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-geo-alt"></i></span>
                        <input type="text" spellcheck="false" class="form-control curso"
                            placeholder="Cidade de sua preferência" aria-label="Cidade" v-model="nomeCidade"
                            aria-describedby="basic-addon1" name="nomeCidade" />
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="input-group mb-3">
                        <!-- :value="dataBusca.nomeCurso" -->
                        <input type="text" class="form-control curso" placeholder="Curso" aria-label="Curso"
                             aria-describedby="basic-addon1" name="curso" v-model="nomeCurso" />
                        <button type="submit" class="btn btn-outline-secondary"><i class="bi bi-search"></i></button>
                    </div>
                </div>
            </div>
            <!-- {{ dataBusca }} -->
        </form>
    </section>
</template>

<script>
import { cursoStore, pinia } from '@/stores/getCursos';

export default defineComponent({
    name: 'FormResultado',
    props: {
        dataBusca: Object,
    },
    setup (){
        const nomeNivel = ref (null);
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
        };

        return{
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
    }

    .curso {
        &:focus {
            border: 1px solid #50a4b1;
            box-shadow: 0 0 11px rgba(33, 33, 33, .2);
        }
    }
}
</style>