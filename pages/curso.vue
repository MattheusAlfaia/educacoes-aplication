<template>
    <h1 class="text-center">Curso Infos</h1>
</template>

<script>
    export default {
        asyncData({ params, store }) {
            return store.dispatch('getCurso', params.id)
        },
        computed: {
            curso() {
                return this.$store.state.curso
            }
        }
    }
</script>