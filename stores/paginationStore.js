// paginationStore.js
import { defineStore } from 'pinia';

export const usePaginationStore = defineStore({
  id: 'pagination',
  state: () => ({
    currentPages: 1,
    itemsPerPage: 12,
    totalPages: 0,
    cursoExibido: [],
    filtroOriginal: [],
    itemFiltrado: undefined,
    cursoOriginal: undefined,
  }),
  actions: {
    paginatedItems() {
      if (this.cursoExibido) {
        return this.cursoExibido.slice((this.currentPages - 1) * this.itemsPerPage, this.currentPages * this.itemsPerPage);
      } else {
        return [];
      }
    },
    turnosExistentes(){
      if(this.cursoExibido && this.filtroOriginal.length < 1){
        const turnos = this.cursoOriginal.map((curso) => curso.turno);
        return [...new Set(turnos)].map((turno) => {
          return {
            id: turno,
            nome: turno,
          };
        });
      } else if(this.cursoExibido && this.filtroOriginal.length >= 1){
        const turnos = this.filtroOriginal.map((curso) => curso.turno);
        return [...new Set(turnos)].map((turno) => {
          return {
            id: turno,
            nome: turno,
          };
        });
      }else {
        return [];
      }
    },
    setPage(page) {
      this.currentPages = page;
    },
    currentPage(){
      return this.currentPages;
    },
    getTotalPages() {
      if (this.cursoExibido) {
        this.totalPages = Math.ceil(this.cursoExibido.length / this.itemsPerPage);
        return this.totalPages;
      } else {
        return this.totalPages;
      }
    },
    filtroIdIes(ies_id){
      this.currentPages = 1;
      this.itemFiltrado = this.cursoOriginal.filter((curso) => curso.ies_id == ies_id);
      if(this.itemFiltrado.length > 0){
        this.filtroOriginal = this.itemFiltrado;
        this.cursoExibido = this.itemFiltrado;
      }
      turnosExistentes();
    },
    limparFiltro(){
      this.currentPages = 1;
      this.cursoExibido = this.cursoOriginal;
      if(this.cursoExibido.length === 0){
        this.cursoExibido = this.cursoOriginal;
      }
      turnosExistentes();
    },
    filtroTurno(opcao){
      this.currentPages = 1;
      if(this.filtroOriginal.length > 0){
        this.itemFiltrado = this.filtroOriginal.filter((curso) => curso.turno == opcao);
        if(this.itemFiltrado.length > 0){
          this.cursoExibido = this.itemFiltrado;
        }
      }else{
        this.itemFiltrado = this.cursoOriginal.filter((curso) => curso.turno == opcao);
        if(this.itemFiltrado.length > 0){
          this.cursoExibido = this.itemFiltrado;
        }
      }
      turnosExistentes();
    }
  },
});
