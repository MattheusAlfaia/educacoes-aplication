import { createPinia, defineStore } from "pinia";
import api from "@/services/admApi";

const pinia = createPinia();

const apiAdmStore = defineStore({
    state: () => ({
        banners: [],
        logos: [],
    }),

    actions: {},
});

export default apiAdmStore;