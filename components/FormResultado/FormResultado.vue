<template>
    <section>
        <form @submit.prevent="pesquisaSubmit" class="mt-1">
            <div class="row col">
                <div class="col-lg-4">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-easel"></i></span>
                        <!-- @change="filtrodataBusca(dataBusca)" v-model="dataBusca" -->
                        <select class="form-select" aria-label="Nível de Ensino">
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
                            placeholder="Cidade de sua preferência" aria-label="Cidade" :value="dataBusca.nomeCidade"
                            aria-describedby="basic-addon1" name="curso" />
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control curso" placeholder="Curso" aria-label="Curso"
                            :value="dataBusca.nomeCurso" aria-describedby="basic-addon1" name="curso" />
                        <button class="btn btn-outline-secondary" type="submit"><i class="bi bi-search"></i></button>
                    </div>
                </div>
            </div>
        </form>
    </section>
</template>

<script>
// import { cursoStore, pinia } from '@/stores/getCursos';

export default defineComponent({
    name: 'FormResultado',
    props: {
        dataBusca: Object,
    },
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