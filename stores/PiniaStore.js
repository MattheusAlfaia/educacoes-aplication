import { createPinia, defineStore } from 'pinia';
import api from '@/services/api';

const pinia = createPinia();

const useMyStore = defineStore({
  id: 'myStore',
  state: () => ({
    resposta: null,
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
  }
});

export { pinia, useMyStore };
