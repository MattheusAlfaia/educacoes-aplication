<template>
    <div>
      <Carousel v-model="activeIndex" class="mt-3 mb-3 options" v-bind="settings" :wrap-around="true"
        :breakpoints="breakpoints">
  
        <Slide v-for="(item, index) in niveisEnsino" :key="item.nome">
          <div class="card_options" :style="{ backgroundColor: icons[index].background }" 
           @click="selectCard(index)">
            <div class="card__content" :class="{ 'selected-card': item.selected }">
              <div class="card__image">
                <i :class="icons[index].icon"></i>
              </div>
              <div class="inst-name">
                {{ item.nome }}
              </div>
            </div>
          </div>
        </Slide>
  
        <template #addons>
          <Navigation />
        </template>
  
      </Carousel>
  
      <div class="rounded">
        <!-- :style="{ backgroundColor: icons[activeIndex].background }" -->
        <div class="gww">
          Você está pesquisando em {{ icons[activeIndex].name }} 
        </div>
      </div>
    </div>
  
    <FormEnsino :indice="activeIndex" :background-color="icons[activeIndex].background" />
  </template>
  
  <script>
  import { useMyStore } from '@/stores/PiniaStore';
  import { defineComponent, ref, onMounted } from 'vue';
  import FormEnsino from '@/components/FormEnsino/FormEnsino.vue';
  import { Carousel, Navigation, Slide } from 'vue3-carousel';
  import 'vue3-carousel/dist/carousel.css';
  
  export default defineComponent({
    name: 'BreakpointsCarousel',
    components: {
      Carousel,
      Slide,
      Navigation,
      FormEnsino,
    },
    data() {
      return {
        activeIndex: 0, // Índice inicial do item ativo
  
        icons: [
          {
            name: 'GRADUAÇÃO',
            icon: 'bi bi-mortarboard-fill',
            background: '#2b2f8e',
          },
          {
            name: 'PÓS-GRADUAÇÃO',
            icon: 'bi bi-briefcase-fill',
            background: '#1c8db8',
          },
          {
            name: 'EDUCAÇÃO BÁSICA',
            icon: 'bi bi-people-fill',
            background: '#68208C',
          },
          {
            name: 'IDIOMAS',
            icon: 'bi bi-translate',
            background: '#129B50',
          },
          {
            name: 'CURSOS TÉCNICOS',
            icon: 'bi bi-screwdriver',
            background: '#2b2f8e',
          },
          {
            name: 'PÓS-TÉCNICOS',
            icon: 'bi bi-tools',
            background: '#0061BC',
          },
          {
            name: 'CURSOS LIVRES',
            icon: 'bi bi-stack',
            background: '#61078E',
          },
          {
            name: 'SUPLETIVO',
            icon: 'bi bi-person-video3',
            background: '#205b3b',
          },
          {
            name: 'PRÉ-VESTIBULAR',
            icon: 'bi bi-book',
            background: '#2b2f8e',
          },
          {
            name: 'MESTRADO',
            icon: 'bi bi-collection',
            background: '#330c4d',
          },
          {
            name: 'DOUTORADO',
            icon: 'bi bi-patch-check',
            background: '#333333',
          }
  
        ],
  
        settings: {
          itemsToShow: 3,
          snapAlign: 'center',
        },
        breakpoints: {
          700: {
            itemsToShow: 3,
            snapAlign: 'center',
          },
          800: {
            itemsToShow: 3.5,
            snapAlign: 'center',
          },
          1024: {
            itemsToShow: 4.5,
            snapAlign: 'center',
          },
          1440: {
            itemsToShow: 5,
            snapAlign: 'center',
          },
        },
      };
    },
    methods: {
      selectCard(index) {
        this.activeIndex = index;
      },
    },
    setup() {
  
      const myStore = useMyStore();
      const niveisEnsino = ref([]);
      const nivelEsnSelected = ref(null);
  
      onMounted(async () => {
        await myStore.buscaNiveisEnsino();
        niveisEnsino.value = myStore.niveisEnsino;
        JSON.parse(JSON.stringify([niveisEnsino]));
      });
  
      function selectedNivelEnsino(nivelEnsino) {
        nivelEsnSelected.value = nivelEnsino.id;
        myStore.setNivelEnsinoSelected(nivelEnsino);
      }
  
      function resetNivelEnsinoSelected() {
        myStore.resetNivelEnsinoSelected();
        nivelEsnSelected.value = null;
      }
  
      return {
        niveisEnsino,
        nivelEsnSelected,
        selectedNivelEnsino,
        resetNivelEnsinoSelected,
      };
    },
  });
  </script>
  
  
  <style lang="scss" scoped>
  $bg-color: #1c8db8;
  $bg-noactive: #c5c8cd;
  
  .options {
    background: #0a4161;
    box-shadow: 0 0 2em rgba(0, 0, 0, .2);
    padding: 1em 0em;
    //background: transparent !important;
  }
  
  .card_options {
    border-radius: 1.5rem;
    box-shadow: 0 0 2em rgba(0, 0, 0, .2);
    padding: 2em 1em;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 2rem;
    transition: all .3s ease-in-out;
  
    @media (min-width: 800px) {
      width: 15rem;
      height: 13rem;
      margin: 0 1rem;
    }
  
    @media (max-width: 750px) {
      width: 40rem;
      height: 9.5rem;
      margin: 0 0.5rem;
      padding: 1.2em 0.5em;
    }
  }
  
  .card__image {
    width: 8em;
    height: 8em;
    border-radius: 50%;
    border: 2px solid #ffffff;
    padding: 3px;
    margin-bottom: 0.5em;
  
    @media (max-width: 750px) {
      padding: 0.2em;
      width: 4.9em;
      height: 4.8em;
    }
  
    i {
      font-size: 4.5rem;
      color: #ffffff;
  
      @media (max-width: 750px) {
        font-size: 2.5rem;
      }
    }
  }
  
  .inst-name {
    font-size: 1.1rem;
    font-weight: 600;
    color: #ffffff;
    text-align: center;
    text-transform: uppercase;
  
    @media (max-width: 750px) {
      font-size: 0.8rem;
    }
  }
  
  .card__content {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  
  .options:hover {
    cursor: grab;
  }
  
  .carousel__slide {
    opacity: 0.7;
    padding: 5px;
    filter: blur(1px);
  }
  
  .carousel__slide--active {
    filter: blur(0px);
    opacity: 1;
    transform: rotateY(0) scale(1.05);
  
    .card_options {
      background-color: $bg-color;
    }
  }
  
  .rounded {
    display: flex;
    justify-content: center;
    align-items: center;
  
    .gww {
      width: 100%;
      height: 2rem;
      font-size: 0.8em;
      line-height: 1.2;
      letter-spacing: 0.3px;
      font-weight: 600;
      margin-top: -1rem;
      background: #FDCF09;
      color: #1a7b91;
      text-transform: uppercase;
      padding: 0.2rem;
      box-shadow: 0 0 2em rgba(0, 0, 0, .2);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  </style>~/stores/PiniaStore