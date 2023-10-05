<template>
    <div class="container">
        <div class="ag-courses_box">

            <div class="ag-courses_item">
                <a href="https://portal.educacoes.com.br/" class="ag-courses-item_link">
                    <div class="ag-courses-item_bg"></div>
                    <div class="ag-courses-item_title resp text-center">
                        <div class="icon mb-1">
                            <i class="bi bi-globe"></i>
                        </div>
                            Notícias
                    </div>
                </a>
            </div>

            <div class="ag-courses_item">
                <a href="https://api.whatsapp.com/send?phone=5511969305718&text=Ol%C3%A1%2C%20gostaria%20de%20renovar%20a%20minha%20bolsa." class="ag-courses-item_link">
                    <div class="ag-courses-item_bg"></div>
                    <div class="ag-courses-item_title resp text-center">
                        <div class="icon mb-1">
                            <i class="bi bi-award-fill"></i>
                        </div>
                        Atualização de Bolsa
                    </div>
                </a>
            </div>

            <div class="ag-courses_item">
                <a href="https://www.educacoes.com.br/#/perguntas-frequentes" class="ag-courses-item_link">
                    <div class="ag-courses-item_bg"></div>
                    <div class="ag-courses-item_title resp text-center">
                        <div class="icon mb-1">
                            <i class="bi bi-question-lg"></i>
                        </div>
                        Perguntas Frequentes
                    </div>
                </a>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    name: 'LinksCards',
}
</script>

<style lang="scss" scoped>
.ag-courses_box {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 50px 0;
}
.icon{
    font-size: 3rem;
}
.ag-courses_item {
    -ms-flex-preferred-size: calc(33.33333% - 30px);
    flex-basis: calc(33.33333% - 30px);
    margin: 0 0.8rem 3rem;
    overflow: hidden;
    border-radius: 28px;
}

.ag-courses-item_link {
    display: block;
    padding: 30px 20px;
    background-color: #37BEC9;
    text-decoration: none;
    overflow: hidden;
    position: relative;
}

.ag-courses-item_link:hover,
.ag-courses-item_link:hover .ag-courses-item_date {
    text-decoration: none;
    color: #FFF;
}

.ag-courses-item_link:hover .ag-courses-item_bg {
    -webkit-transform: scale(10);
    -ms-transform: scale(10);
    transform: scale(10);
}

.ag-courses-item_title {
    min-height: 87px;
    margin: 0 0 25px;
    overflow: hidden;
    font-weight: bold;
    font-size: 1.5rem;
    color: #FFF;
    z-index: 2;
    position: relative;
}

.ag-courses-item_date-box {
    font-size: 18px;
    color: #FFF;
    z-index: 2;
    position: relative;
}

.resp{
    @media (max-width: 900px) {
        font-size: 1.2rem !important;
    }
}

.ag-courses-item_bg {
    height: 128px;
    width: 128px;
    background-color: #412560;
    z-index: 1;
    position: absolute;
    top: -75px;
    right: -75px;
    border-radius: 50%;
    -webkit-transition: all .5s ease;
    -o-transition: all .5s ease;
    transition: all .5s ease;
}

.ag-courses_item:nth-child(2n) .ag-courses-item_bg {
    background-color: #3ecd5e;
}

.ag-courses_item:nth-child(3n) .ag-courses-item_bg {
    background-color: #ce9007;
}

@media only screen and (max-width: 979px) {
    .ag-courses_item {
        -ms-flex-preferred-size: calc(50% - 30px);
        flex-basis: calc(50% - 30px);
    }

    .ag-courses-item_title {
        font-size: 24px;
    }
}

@media only screen and (max-width: 767px) {
    .ag-format-container {
        width: 96%;
    }

}

@media only screen and (max-width: 639px) {
    .ag-courses_item {
        -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
    }

    .ag-courses-item_title {
        min-height: 72px;
        line-height: 1;
        font-size: 20px;
    }

    .ag-courses-item_link {
        padding: 22px 40px;
    }

    .ag-courses-item_date-box {
        font-size: 16px;
    }
}</style>