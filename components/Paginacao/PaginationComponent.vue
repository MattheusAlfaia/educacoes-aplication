<template>
    <nav aria-label="Page navigation">
      <ul class="pagination mb-5">
        <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
          <a class="page-link" @click.prevent="prevPage" href="#" aria-label="Previous">
            <span aria-hidden="true">Anterior</span>
          </a>
        </li>
        <li v-if="(currentPage + 1) <= totalPages - 1 && currentPage > 1" class="page-item">
          <a class="page-link" @click.prevent="setPage(currentPage-1)" href="#">{{ currentPage - 1 }}</a>
        </li> 
        <li v-if="currentPage >= 1" class="page-item">
          <a class="page-link active" @click.prevent="setPage(1)" href="#">{{ currentPage }}</a>
        </li>
        <li v-if="showEllipsisEnd" class="page-item disabled"><span class="page-link">...</span></li>
        <li v-if="currentPage !== totalPages" class="page-item">
          <a class="page-link" @click.prevent="setPage(totalPages)" href="#">{{ totalPages }}</a>
        </li>
        <li class="page-item" :class="{ 'disabled': currentPage === totalPages }">
          <a class="page-link" @click.prevent="nextPage" href="#" aria-label="Next">
            <span aria-hidden="true">Próximo</span>
          </a>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    props: {
      currentPage: Number,    // Página atual
      totalPages: Number,     // Número total de páginas
      visiblePageCount: Number, // Número de páginas visíveis ao redor da página atual
    },
    computed: {
      showEllipsisStart() {
        return this.currentPage > this.visiblePageCount + 1;
      },
      showEllipsisEnd() {
        return this.currentPage < this.totalPages - this.visiblePageCount;
      },
      visiblePages() {
        const startPage = Math.max(this.currentPage - this.visiblePageCount, 2);
        const endPage = Math.min(this.currentPage + this.visiblePageCount, this.totalPages - 1);
        return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
      },
    },
    methods: {
      setPage(page) {
        if (page !== this.currentPage) {
          this.$emit('setPage', page); // Emitir evento para definir a página
        }
      },
      prevPage() {
        if (this.currentPage > 1) {
          this.setPage(this.currentPage - 1);
        }
      },
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.setPage(this.currentPage + 1);
        }
      },
    },
  };
  </script>
  
    
  <style scoped lang="scss">
  /* Estilos do Bootstrap para a paginação podem ser aplicados aqui */
  
  .pagination {
      justify-content: center;
      margin-top: 20px;
      margin-bottom: 20px;
  
      .page-item {
          padding: 0.1rem;
  
          &.disabled {
              .page-link {
                  color: #89949d;
                  background-color: #706f6f;
                  border-color: #dee2e6;
              }
          }
  
          &.active {
              .page-link {
                  z-index: 1;
                  color: #fff;
                  background-color: #269bcd;
                  border-color: #7b7676;
              }
          }
  
          .page-link {
              color: #269bcd;
              border: 1px solid #99999e;
              // focus none
              &:focus {
                  box-shadow: none;
              }
          }
      }
  }
  
  // page navigation
  </style>
    