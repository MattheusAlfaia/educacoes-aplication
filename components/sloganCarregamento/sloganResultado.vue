<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="sloganCarregamento">
                    <img :src="loading" alt="Loading...">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import loading from '@/assets/images/loadingResultados.gif';
export default {
  name: 'sloganResultado',
    data() {
        return {
        loading: loading,
        };
    },
}
</script>

<style lang="scss" scoped>
.sloganCarregamento {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40vh;
    background-color: #fff;
}
</style>