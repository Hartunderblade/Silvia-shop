<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="about">
        <img class="about__image" src="@/assets/img/bg-auth.jpg" alt="">
        <div class="info">
            <div class="info-text">
                <h1 class="info-text__title">О нас и нашем бренде</h1>
                <p class="info-text__subtitle">Silvia — это не просто бренд, это философия,
                    которая вдохновляет и воплощает мечты в реальность</p>
            </div>
            <div class="info-about">
                <img width="370px" height="400px" class="info-about__img" src="@/assets/img/bg-auth.jpg" alt="">
                <div class="">
                    <p>Добро пожаловать в мир Silvia, где каждая драгоценность —
                        это волшебство, которое можно носить на себе
                        Каждое украшение — это маленькое чудо, созданное с любовью
                        и заботой, чтобы стать частью
                        вашей истории
                    </p>
                    <button>За покупками
                        <svg width="241" height="16" viewBox="0 0 241 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M240.707 8.70711C241.098 8.31658 241.098 7.68342 240.707 7.29289L234.343 0.928932C233.953 0.538408 233.319 0.538408 232.929 0.928932C232.538 1.31946 232.538 1.95262 232.929 2.34315L238.586 8L232.929 13.6569C232.538 14.0474 232.538 14.6805 232.929 15.0711C233.319 15.4616 233.953 15.4616 234.343 15.0711L240.707 8.70711ZM0 9H240V7H0V9Z"
                                fill="#1E1E1E" />
                        </svg>
                    </button>
                </div>
            </div>

        </div>

    </div>
</template>

<style scoped lang="scss">
.about {

    display: flex;
    column-gap: 20px;

    border-bottom: 2px solid #1e1e1e;
    border-top: 2px solid #1e1e1e;
    padding: 60px 0px;

    margin: 40px 0 80px 0;

    &__image {
        width: 760px;
        height: 780px;
    }
}

.info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &-text {
        &__title {
            font-style: italic;
            font-weight: 600;
            font-size: 48px;
            text-transform: uppercase;
            color: #1e1e1e;
            width: 445px;

            margin-bottom: 40px;
        }

        &__subtitle {
            font-weight: 500;
            font-size: 26px;
            color: #1e1e1e;
            width: 760px;
        }
    }

    &-about {
        display: flex;
        column-gap: 20px;

        div {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            p {
                font-weight: 500;
                font-size: 20px;
                line-height: 150%;
                color: #1e1e1e;
            }

            button {
                display: flex;
                flex-direction: column;

                font-weight: 400;
                font-size: 24px;
                color: #1e1e1e;
                cursor: pointer;
            }
        }
    }
}
</style>