<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-white">
      <div class="container">
        <a class="navbar-brand" :href="link">
          <!-- Use um atributo onload para controlar o carregamento da imagem -->
          <img :src="logo" alt="logo" width="120px" @load="logoLoaded = true">
        </a>
        <button class="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="sidebar offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
              <a class="navbar-brand" href="#"><img :src="logo" alt="logo" width="120px"></a>
            </h5>
            <button type="button" class="btn-close shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-center align-items-center flex-grow-1 pe-3">

              <li class="nav-item mx-2">
                <a class="nav-link active" href="#">QUEM SOMOS</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link active" href="#">SEJA PARCEIRO</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link active" href="#">DÚVIDAS</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link active" href="#">REGULAMENTO</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link active" href="#">PORTAL DO BOLSISTA</a>
              </li>
            </ul>
            <div class="d-flex justify-content-center align-items-center">
              <a href="#" class="nav-social">
                <BootstrapIcon class="nav-link icon" name="facebook" />
              </a>
              <a href="#" class="nav-social">
                <BootstrapIcon class="nav-link icon" name="instagram" />
              </a>
              <a href="#" class="nav-social">
                <BootstrapIcon class="nav-link icon" name="telegram" />
              </a>
              <a href="#" class="nav-social">
                <BootstrapIcon class="nav-link icon" name="linkedin" />
              </a>
              <a href="#" class="nav-social">
                <BootstrapIcon class="nav-link icon" name="whatsapp" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
    
<script>
import logo from '../assets/images/logo.jpeg'

export default {
  name: 'NavBar',
  data() {
    return {
      link: '/',
      logo: logo,
      logoLoaded: false
    }
  },
  methods: {
    reloadLogo() {
      this.logoLoaded = false;
      this.$nextTick(() => {
        this.logo = require('../assets/images/logo.jpeg');
      });
    }
  },
  mounted() {
    const img = new Image();
    img.src = this.logo;
    img.addEventListener('load', () => {
      this.logoLoaded = true;
    });
  }
}
</script>
    
<style lang="scss" scoped>
@import './NavBar.scss';
</style>