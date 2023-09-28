<template>
    <section id="footer">
        <div class="container">
            <div class="row text-left text-xs-left text-sm-left text-md-left">
                <div class="col-xs-12 col-sm-4 col-md-4">
                    <h5 class="titles">Links <span class="text-titles">Institucionais</span></h5>
                    <ul class="list-unstyled quick-links text-white">
                        <li><a href="#">Unidades</a></li>
                        <li><a href="#">Privacidade e Proteção de Dados Pessoais</a></li>
                        <li><a href="#">Carreiras do Instituto Educações</a></li>
                    </ul>
                </div>
                <div class="col-xs-12 col-sm-4 col-md-4">
                    <h5 class="titles">Sobre <span class="text-titles">Nós</span></h5>
                    <ul class="list-unstyled quick-links text-white">
                        <li><a href="#">Quem Somos</a></li>
                        <li><a href="#">Perguntas frequentes</a></li>
                        <li><a href="#">Fale conosco</a></li>
                    </ul>
                </div>
                <div class="col-xs-12 col-sm-4 col-md-4">
                    <h5 class="titles">Nossas <span class="text-titles">Sedes</span></h5>
                    <ul class="list-unstyled quick-links">
                        <li>
                            <h6>Sede Nacional - Av. Paulista, n° 1471, Bela Vista - Edifício Barão de Christina (Conj. 608)
                                - São Paulo-SP · CEP: 01311-200</h6>
                        </li>
                        <li>
                            <h6>Regional Norte - Rua Rio Javari, n° 14, Nossa Senhora das Graças (Conjunto Vieiralves) -
                                Manaus-AM · CEP: 69053-110</h6>
                        </li>
                    </ul>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="socials col-xs-12 col-sm-12 col-md-12 mt-sm-5">
                    <ul class="list-unstyled list-inline social text-center">
                        <li class="list-inline-item"><a href="#">
                                <BootstrapIcon class="nav-link icon" name="facebook" />
                            </a></li>
                        <li class="list-inline-item"><a href="#">
                                <BootstrapIcon class="nav-link icon" name="instagram" />
                            </a></li>
                        <li class="list-inline-item"><a href="#">
                                <BootstrapIcon class="nav-link icon" name="telegram" />
                            </a></li>
                        <li class="list-inline-item"><a href="#">
                                <BootstrapIcon class="nav-link icon" name="linkedin" />
                            </a></li>
                        <li class="list-inline-item"><a href="#" target="_blank">
                                <BootstrapIcon class="nav-link icon" name="whatsapp" />
                            </a></li>
                    </ul>
                </div>
            </div>
            <div class="row mt-5">
                <p class="h6 text-center text-white">&copy; {{ copyrightYear }} - {{ currentYear }} Instituto Educações<br>
                    Todos os direitos reservados.</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Footer",
    data() {
        return {
            currentYear: new Date().getFullYear(),
            copyrightYear: 2013, // Ano inicial dos direitos autorais
        };
    },
}
</script>

<style lang="scss" scoped>
@import './Footer.scss';
</style>