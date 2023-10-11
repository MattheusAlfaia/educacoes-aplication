<template>
    <div class="mb-5" id="editais">
        <div class="jumbotron">
            <div class="container">
                <br>
                <h1 class="cola text-center">
                    REGULAMENTO
                </h1>
                <br><br>
            </div>
        </div>

        <div class="container box-content justify p-4 rounded mt-2">
            <h4 class="d-flex justify-content-center">
                <a href="https://portal.educacoes.com.br/wp-content/uploads/2023/01/EDITAL_2023.1-EDUCAÇÃO-BÁSICA-E-EDUCAÇÃO-SUPERIOR.pdf" target="_blank">
                    Edital 2023/1 – Educação Básica e Educação Superior
                </a>
            </h4>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Editais',
}
</script>

<style lang="scss" scoped>
    #editais {
        .divider {
            margin: 4rem 0;
        }

        .jumbotron {
            background-image: url(@/assets/images/pexels-edital.jpg);
            background-position: center;
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
