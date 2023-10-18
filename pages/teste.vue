<template>
    <div class="container">
        <form>
            <div class="form-group col-sm-6 col-lg-3 col-md-6">
                <div class="row mb-2">
                    <div class="col-md-12 col-lg-12">
                        <label for="cidade" class="form-label">Cidade:</label>
                        <input type="text" class="form-control" id="cidade" aria-describedby="cidade" autocomplete="off">
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-12">
                        <label for="form-select" class="form-label">Selecione o ano escolar:</label>
                        <select id="Select" class="form-select" placeholder="---NÍVEL---">
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 d-grid gap-2">
                        <button type="submit" class="btn btn-custom">Buscar</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>