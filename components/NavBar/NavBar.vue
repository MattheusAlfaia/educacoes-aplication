<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-white">
      <div class="container">
        <a class="navbar-brand" :href="link">
          <img :src="logo" alt="logo" width="150px" @load="logoLoaded = true">
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
                <a class="nav-link active" href="/quem-somos">QUEM SOMOS</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link active" href="/seja-parceiro">SEJA PARCEIRO</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link active" href="/duvidas">DÚVIDAS</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link active" href="/regulamento">REGULAMENTO</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link active" href="https://inscricao.educacoes.com.br/login">PORTAL DO BOLSISTA</a>
              </li>
            </ul>
            <div class="d-flex justify-content-center align-items-center">
              <a href="https://www.facebook.com/institutoeducacoes" class="nav-social">
                <BootstrapIcon class="nav-link icon" name="facebook" />
              </a>
              <a href="https://www.instagram.com/institutoeducacoes/" class="nav-social">
                <BootstrapIcon class="nav-link icon" name="instagram" />
              </a>
              <a href="https://t.me/joinchat/qqsJQ3otLG9jMzQx" class="nav-social">
                <BootstrapIcon class="nav-link icon" name="telegram" />
              </a>
              <a href="https://www.linkedin.com/company/instituto-educa%C3%A7%C3%B5es/" class="nav-social">
                <BootstrapIcon class="nav-link icon" name="linkedin" />
              </a>
              <a href="https://api.whatsapp.com/send?phone=5511969305718&text=Ol%C3%A1%3F%20Vi%20o%20Educa%C3%A7%C3%B5es%20pelo%20novo%20portal.%20Pode%20me%20dar%20mais%20informa%C3%A7%C3%B5es%3F" class="nav-social">
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
import logo from '../assets/images/logo.png'

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
        this.logo = require('../assets/images/logo.png');
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