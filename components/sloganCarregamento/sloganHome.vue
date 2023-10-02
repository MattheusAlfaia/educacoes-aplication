<template>
    <section>
        <div class="slogan">
            <div class="slogan__container">
                <div class="slogan__container__text">
                    <h1 class="slogan__container__text__title">INSTITUTO <span>EDUCAÇÕES</span></h1>
                    <p class="slogan__container__text__description">Educar para desenhar o futuro.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'sloganHome',
}
</script>

<style lang="scss" scoped>
.slogan {
    background-image: url('../../assets/images/loading.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 50vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &__container {
        width: 100%;
        max-width: 1200px;
        display: flex;
        justify-content: center;
        align-items: center;
        &__text {
            width: 100%;
            max-width: 600px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            &__title {
                font-family: "Gill Sans", sans-serif;
                font-size: 3rem;
                color: hsl(198, 61%, 48%);
                font-weight: bold;
                text-align: center;
                margin-bottom: 1rem;
                @media (max-width: 768px) {
                    font-size: 1.8rem;
                }
                span{
                    color: #f12f2f;
                }
            }
            &__description {
                font-family: "Gill Sans", sans-serif;
                font-size: 1.5rem;
                color: #ffffff;
                text-align: center;
                @media (max-width: 768px) {
                    font-size: 1.2rem;
                }
            }
        }
    }
}
</style>