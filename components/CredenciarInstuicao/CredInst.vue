<template>
    <div class="container">
        <a class="link" href="https://www.educacoes.com.br/seja-parceiro">
        <div class="courses-container">
            <div class="course">
                    <div class="course-info">
                        <h6>EDUCAR PARA DESENHAR O FUTURO</h6>
                        <h2>Credencie sua instituição.</h2>
                    </div>
                </div>
            </div>
        </a>
    </div>
</template>
  
<script>
export default {
    name: 'Credinst'
}
</script>
  
<style lang="scss" scoped>
.container {
    margin-top: 5rem;
}

.courses-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
}

.link{
    text-decoration: none;
}

.course {
    background: #128199;
    border-radius: 10px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    max-width: 100%;
    overflow: hidden;
    width: 90%;
}

.course-info {
    position: relative;
    width: 100%;
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
