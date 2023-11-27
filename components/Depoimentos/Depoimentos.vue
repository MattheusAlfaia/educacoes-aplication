<template>
  <section class="testimonials">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title text-center">
            <h2>Feedbacks</h2>
            <p>
              Veja o que nossos alunos e parceiros estão falando sobre nós.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Carousel
      :items-to-show="2.5"
      v-bind="settings"
      :breakpoints="breakpoints"
      :wrap-around="true"
    >
      <Slide v-for="slide in 5" :key="slide">
        <div class="carousel__item">
          <div class="body_item">
            <div class="item-header">
              <div class="avatar">
                <img src="https://i.imgur.com/8Km9tLL.jpg" alt="Avatar" />
              </div>
              <div class="name">
                <h4>John Doe</h4>
                <p>Web Developer</p>
              </div>
            </div>
            <div class="card-body">
              <p>
                Eu nunca pensei que seria possível estudar em uma escola tão boa. A bolsa
                de estudos me deu a oportunidade de ter acesso a uma educação de qualidade
                que eu não poderia pagar de outra forma. Eu sou muito grata por ter
                recebido essa bolsa e por ter a chance de estudar em uma escola que me
                desafia e me ajuda a crescer como pessoa e como estudante.
              </p>
            </div>
          </div>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "WrapAround",
  components: {
    Carousel,
    Slide,
    Navigation,
  },

  data() {
    return {
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      breakpoints: {
        700: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        800: {
          itemsToShow: 2,
          snapAlign: "center",
        },
        1024: {
          itemsToShow: 2.5,
          snapAlign: "center",
        },
        1440: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        2560: {
          itemsToShow: 5,
          snapAlign: "center",
        },
      },
    };
  },
});
</script>

<style scoped>
.testimonials {
  background-color: #f5f5f5;
  padding: 2rem 0;
}
.carousel__item {
  width: 25rem;
  height: 18rem;
  background-color: #37bec9;
  border-radius: 1rem;
  padding: 10px 1rem 0;
  margin: 0 1rem;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
}

.carousel__item:hover {
  cursor: pointer;
}

.body_item {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.item-header {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.avatar{
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  overflow: hidden;
}
.name {
  margin-left: 1rem;
}
</style>
