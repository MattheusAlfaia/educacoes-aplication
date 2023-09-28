<template>
    <div class="modal fade" id="filterModal" tabindex="-1" aria-labelledby="filterModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="filterModalLabel">Filtrar por Modalidade e Turno</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <!-- Aqui você pode adicionar seus campos de filtro -->
            <div class="mb-3">
              <label for="modalidade">Modalidade</label>
              <select class="form-select" id="modalidade">
                  <option value="">Selecione uma opção...</option>
                  <option value="1">Presencial</option>
                  <option value="2">EAD</option>
                  <option value="3">Semi-Presencial</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="turno">Turno</label>
              <select class="form-select" id="turno">
                <option value="">Selecione uma opção...</option>
                <option value="1">Noite</option>
                <option value="2">Manhã</option>
                <option value="3">Tarde</option>
                <option value="4">Integral</option>
                <option value="5">Todos os turnos</option> 
              </select>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
            <button type="button" class="btn btn-info text-white">Aplicar Filtro</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FilterModal',
  }
  </script>
  

<style lang="scss" scoped>
  .modal {
    .modal-dialog {
      .modal-content {
        .modal-header {
          .modal-title {
            font-size: 1rem;
            font-weight: 600;
          }
        }
        .modal-body {
          .mb-3 {
            margin-bottom: 1rem;
          }
        }
        .modal-footer {
          .btn-secondary {
            background-color: #6c757d;
            border-color: #6c757d;
          }
          .btn-info {
            background-color: #0c85a6 !important;
            border-color: none !important;
          }
        }
      }
    }
  }  
</style>