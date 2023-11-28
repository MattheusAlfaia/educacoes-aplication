<template>
    <div id="about">
        <div class="jumbotron">
            <div class="container">
                <br>
                <h1 class="cola text-center">
                    QUEM SOMOS
                </h1>
                <br><br>
            </div>
        </div>

        <div class="container box-content justify p-4 rounded">
            <h4 class="text-center">
                Instituto Educações
            </h4>

            <div class="mt-4"></div>

            <b>1. HISTÓRICO</b>
            <div class="mt-2"></div>
            <p>
                O Instituto Educações iniciou suas atividades em 15 de janeiro de 2013,
                atuando na <b>inclusão educacional</b> de <b>estudantes de baixa renda</b>,
                em diversos <b>níveis de ensino</b>, através de <b>processo seletivo</b> que
                avalia histórico escolar e <b>diagnóstico socioeconômico</b>. Além disso, é
                realizado <b>acompanhamento dos beneficiários, durante a vigência da bolsa</b>.
                Em quase 9 anos de atuação, chegamos a 280 cidades e ultrapassamos 55 mil benefícios
                concedidos.
            </p>

            <div class="mt-4"></div>

            <b>2. A CONCESSÃO DE BOLSAS DE ESTUDO</b>
            <div class="mt-2"></div>
            <p>
                Os estudantes <b>SELECIONADOS</b> assinam o <b>Termo de Compromisso</b>, no qual constam
                suas <b>obrigações socioeducacionais</b> (rendimento educacional e participação em projetos
                especiais). O Instituto Educações realiza <b>eventos de formação complementar, gestão educacional
                    e inovação tecnológica</b>, sempre em <b>defesa da educação brasileira</b>.
            </p>
            <div class="row justify-content-center align-items-center mb-4">
                <div class="col-md-4 mt-3">
                    <img :src="image1" width="100%" height="auto">
                </div>
                <div class="col-md-4 mt-3">
                    <img :src="image2" width="100%" height="auto">
                </div>
                <div class="col-md-4 mt-3">
                    <img :src="image3" width="100%" height="auto">
                </div>
            </div>

            <div class="mt-4"></div>

            <b>3. MISSÃO</b>
            <div class="mt-2"></div>
            <p>
                Selecionar estudantes de baixa renda e bom rendimento educacional para concessão de bolsas de estudo,
                acompanhando-os, durante o curso, através de mentorias, palestras, cursos de formação complementar e
                oportunidades profissionais.
            </p>

            <div class="mt-4"></div>

            <b>4. VISÃO</b>
            <div class="mt-2"></div>
            <p>
                Atuar em todas as cidades do Brasil, proporcionando educação de qualidade, em parceria com instituições
                de ensino privado e demais organizações que possuam relevante responsabilidade social.
            </p>

            <div class="mt-4"></div>

            <b>5. VALORES</b>
            <div class="mt-2"></div>
            <p>
                Inclusão, meritocracia, empatia, ética, empreendedorismo e inovação.
            </p>

            <div class="mt-4"></div>

            <b>6. EDUCAÇÕES EM AÇÃO</b>
            <div class="mt-2"></div>
            <div class="row justify-content-center align-items-center mb-4">
                <div class="col-md-4 mt-3">
                    <img :src="image4" width="100%" height="auto">
                </div>
                <div class="col-md-4 mt-3">
                    <img :src="image5" width="100%" height="auto">
                </div>
                <div class="col-md-4 mt-3">
                    <img :src="image6" width="100%" height="auto">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import image1 from '@/assets/images/quemSomos/instituto_1.webp';
import image2 from '@/assets/images/quemSomos/instituto_2.webp';
import image3 from '@/assets/images/quemSomos/instituto_3.webp';
import image4 from '@/assets/images/quemSomos/instituto_4.webp';
import image5 from '@/assets/images/quemSomos/instituto_5.webp';
import image6 from '@/assets/images/quemSomos/instituto_6.webp';
export default {
    name: 'quem-somos',
    data() {
        return {
            image1: image1,
            image2: image2,
            image3: image3,
            image4: image4,
            image5: image5,
            image6: image6,
        }
    },
}
</script>

<style lang="scss" scoped>
    #about {
        .divider {
            margin: 4rem 0;
        }

        .jumbotron {
            background-image: url(@/assets/images/quemSomos/pexel2.webp);
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            height: 100%;
            border-radius: 0;
        }

        .box-content {
            background-color: #fafafa;
            color: #212529;
        }

        .cola {
            display: flex;
            justify-content: center;
            color: rgb(255, 255, 255);
            height: 50px;
            font-size: 42px;
            margin: 0;
        }

        .justify {
            text-align: justify;
            font-size: 18px;
        }

        @media screen and (max-width: 414px) {
            .cola {
                display: flex;
                justify-content: center;
                color: rgb(255, 255, 255);
                height: 35px;
                font-size: 28px;
            }
            .justify {
                text-align: justify;
                font-size: 16px;
            }
        }
    }
</style>
