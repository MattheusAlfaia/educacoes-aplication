import { createPinia, defineStore } from 'pinia';
import api from "@/services/api";
// import logoApi from "@/services/logoApi";

const pinia = createPinia();

const cursoStore = defineStore({
  id: "cursoStore",
  state: () => ({
    resposta: null,
    response: null,
    Modalidades: [],
    areaConhecimento: [],
    Logos: [],
    Turnos: [],
  }),
  actions: {
    async getCursos(data) {
      if (data == null) {
        if (data = JSON.parse(localStorage.getItem("data"))) {
          try {
            const response = await api.post("cursos/cursos-e-instituicoes", data);
            this.resposta = response.data;
          } catch (error) {
            console.error("Erro ao obter os cursos:", error);
          }
        }else{
          window.location.href = "/"
        }
      } else {
        try {
          const response = await api.post("cursos/cursos-e-instituicoes", data);
          this.resposta = response.data;
        } catch (error) {
          console.error("Erro ao obter os cursos:", error);
        }
      }
    },
    async setCursos(data) {
      this.response = data;
    },

    async getModalidades() {
      try {
        const response = await api.get("modalidades");
        this.Modalidades = response.data;
      } catch (error) {
        console.error("Erro ao obter os cursos:", error);
      }
    },

    async getTurnos() {
      try {
        const response = await api.get("cursos/turnos");
        this.Turnos = response.data;
      } catch (error) {
        console.error("Erro ao obter os cursos:", error);
      }
    },

    async getAreaConhecimento() {
      try {
        const response = await api.get("cursos/areas-de-conhecimento");
        this.areaConhecimento = response.data;
      } catch (error) {
        console.error("Erro ao obter os cursos:", error);
      }
    },

    // async getLogos() {
    //   try {
    //     const response = await logoApi.get("logo/");
    //     this.Logos = response.data;
    //   } catch (error) {
    //     console.error("Erro ao obter os cursos:", error);
    //   }
    // }
  },
});

export { pinia, cursoStore };
