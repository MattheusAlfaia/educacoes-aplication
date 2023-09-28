import { createPinia, defineStore } from 'pinia';
import api from '@/services/api';

const pinia = createPinia();

const useMyStore = defineStore({
  id: 'myStore',
  state: () => ({
    resposta: null,
    niveisEnsino: null,
    modalidades: null,
    turnos: null,
    cidades: null,
    estados: null,
    nivelEsnSelected: undefined,
  }),
  actions: {
    async buscaNiveisEnsino() {
      try {
        const response = await api.get('/niveis-de-ensino');
        this.niveisEnsino = response.data;
      } catch (error) {
        console.error('Erro ao obter os níveis de ensino:', error);
      }
    },

    async getModalidades() {
      try {
        const response = await api.get('/modalidades');
        this.modalidades = response.data;
      } catch (error) {
        console.error('Erro ao obter as modalidades:', error);
      }
    },

    async getTurnos() {
      try {
        const response = await api.get('/cursos/turnos');
        this.turnos = response.data;
      } catch (error) {
        console.error('Erro ao obter as modalidades:', error);
      }
    },
    async getCidades() {
      try {
        const response = await api.get('/enderecos/cidades');
        this.cidades = response.data;
      } catch (error) {
        console.error('Erro ao obter os estados:', error);
      }
    },

    async getEstados() {
      try {
        const response = await api.get('/enderecos/estados');
        this.estados = response.data;
      } catch (error) {
        console.error('Erro ao obter os estados:', error);
      }
    },

    setNivelEnsinoSelected(nivelEsnSelected) {
      this.nivelEsnSelected = nivelEsnSelected;
    },

    resetNivelEnsinoSelected(){
      this.nivelEsnSelected = { id: 0, nome: '' };
    }
  },
});

export { pinia, useMyStore };
