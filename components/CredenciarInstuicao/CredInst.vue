<template>
  <div class="container">
    <a class="link" href="https://www.educacoes.com.br/seja-parceiro">
      <div class="courses-container">
        <div class="course ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>
          <div class="course-info">
            <h6>EDUCAR PARA DESENHAR O FUTURO</h6>
            <h2>Credencie sua instituição</h2>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "Credinst",
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 5rem;
  margin-bottom: 2rem;
}

.courses-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
}

.link {
  text-decoration: none;
}

.course {
  background: #128199;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.8rem;
  max-width: 100%;
  overflow: hidden;
  width: 98%;
  transition: all 0.3s ease;
  cursor: pointer;
}
// ==========EFEITO====================

.ag-courses-item_link:hover .ag-courses-item_bg {
    -webkit-transform: scale(10);
    -ms-transform: scale(10);
    transform: scale(20);
}

.ag-courses-item_link {
    display: block;
    padding: 30px 20px;
    background-color: #37BEC9;
    text-decoration: none;
    overflow: hidden;
    position: relative;
}

.ag-courses-item_bg {
    height: 128px;
    width: 128px;
    background-color: #052c65;
    z-index: 1;
    position: absolute;
    top: -75px;
    right: -75px;
    border-radius: 50%;
    -webkit-transition: all .5s ease;
    -o-transition: all .5s ease;
    transition: all .5s ease;
}


// ==============================

// .course:hover {
//   box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);
//   transform: scale(1.02);
//   background: url(../../assets/images/parceria.webp);
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
//   color: #fff;
//   text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
//   opacity: 0.8;
//   transition: all 0.3s ease;
// }

.course-info {
  position: relative;
  width: 100%;
  z-index: 2;
}

.course h6,
.course h2 {
  color: #fff;
  letter-spacing: 1px;
  margin: 0;
}

.course h6 {
  opacity: 0.6;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 0.5rem;
}

.course h2 {
  text-align: center;
  margin-bottom: 1rem;
}

@media only screen and (max-width: 695px) {
  .course {
    height: auto;
  }

  .course-info {
    padding: 2rem;
  }
}
</style>
