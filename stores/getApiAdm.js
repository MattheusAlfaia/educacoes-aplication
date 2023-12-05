import { createPinia, defineStore } from "pinia";
import api from "@/services/admApi";

const pinia = createPinia();

const apiAdmStore = defineStore({
    id: 'apiAdmStore',
    state: () => ({
        response: null,
        banners: [],
        logos: [],
    }),
    actions: {
        async getBanners() {
            const response = await api.get('/banners-educacoes');
            this.banners = response.data;
        },
        async getLogos() {
            const response = await api.get('/logos-ies-educacoes');
            this.logos = response.data;
        },
    },
});

export { pinia, apiAdmStore };