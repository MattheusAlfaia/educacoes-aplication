import { createPinia, defineStore } from "pinia";
import api from "@/services/api";
// import logoApi from "@/services/logoApi";

const pinia = createPinia();

const cursoStore = defineStore({
  id: "cursoStore",
  state: () => ({
    resposta: null,
    response: null,
    semResultado: false,
    Modalidades: [],
    areaConhecimento: [],
    Turnos: [],
    pesquisaData: [],
    niveisEnsino: [],
  }),
  actions: {
    async getCursos(data) {
      try {
        if (!data) {
          // Se não houver dados, tente obter do armazenamento local
          data = JSON.parse(localStorage.getItem("data"));
    
          if (!data) {
            // Se ainda não houver dados, redirecione para "/"
            window.location.href = "/";
            return;
          }
        }
    
        // Faça a chamada à API "cursos/cursos-e-instituicoes"
        const response = await api.post("cursos/cursos-e-instituicoes", data);
    
        if (response.data.cursos.length === 0) {
          // Se não houver cursos, faça outra chamada à API "cursos/cursos-por-campanha"
          const campanhaResponse = await api.post("cursos/cursos-por-campanha");
    
          this.resposta = campanhaResponse.data;
          this.semResultado = true;
        } else {
          // Se houver cursos, atualize os dados e sinalize que não há resultado
          this.semResultado = false;
          this.resposta = response.data;
        }
    
        // Atualize a propriedade 'pesquisaData' com os dados
        this.pesquisaData = data;
      } catch (error) {
        // Lide com erros na chamada à API
        console.error("Erro na chamada à API:", error);
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

    async getNiveisEnsino() {
      try {
        const response = await api.get("/niveis-de-ensino");
        this.niveisEnsino = response.data;
      } catch (error) {
        console.error("Erro ao obter os cursos:", error);
      }
    },
  },
});

export { pinia, cursoStore };
