<template>
    <section class="convenios">
        <div class="text-center">
            <h2 class="convenio-titulo">Convênios e Cooperações</h2>
        </div>
        <div class="parceiros">
            <div v-for="(parceiro, index) in parceiros" :key="index" class="parceiro" @mouseover="hoverParceiro(index)"
                @mouseleave="unhoverParceiro(index)">
                <img :src="parceiro.logo" :alt="'Logo ' + parceiro.nome" class="logo" :style="{ filter: parceiro.filtro }">
            </div>
        </div>
    </section>
</template>
  
<script>
import governo from '@/assets/images/convenios/governo.webp';
import hospital from '@/assets/images/convenios/hospital.webp';
import manaus from '@/assets/images/convenios/manaus.webp';
import sebrae from '@/assets/images/convenios/sebrae.webp';
import samsung from '@/assets/images/convenios/samsung.webp';

export default {
    data() {
        return {
            parceiros: [
                { nome: 'Parceiro 1', logo: governo, filtro: 'grayscale(100%)' },
                { nome: 'Parceiro 2', logo: hospital, filtro: 'grayscale(100%)' },
                // { nome: 'Parceiro 3', logo: manaus, filtro: 'grayscale(100%)' },
                // { nome: 'Parceiro 4', logo: sebrae, filtro: 'grayscale(100%)' },
                // { nome: 'Parceiro 5', logo: samsung, filtro: 'grayscale(100%)' }
            ]
        };
    },
    methods: {
        hoverParceiro(index) {
            this.parceiros[index].filtro = 'grayscale(0%)';
        },
        unhoverParceiro(index) {
            this.parceiros[index].filtro = 'grayscale(100%)';
        }
    }
};
</script>
  
<style scoped>
.convenios{
    padding: 20px;
    background-color: #f4f4f4;
}
.parceiros {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px;
}   
.parceiro {
    margin: 20px;
    transition: all 0.3s;
    cursor: pointer;
}
.convenio-titulo{
    font-size: 30px;
    font-weight: 700;
    color: #128199;
    margin-bottom: 20px;
    @media (max-width: 768px) {
        font-size: 22px;
    }
}
.parceiro:hover {
    transform: translateY(-5px);
}
.logo {
    width: 150px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: filter 0.3s, transform 0.3s;
}
.parceiro:hover .logo {
    filter: grayscale(0%);
    transform: scale(1.05);
}</style>
  