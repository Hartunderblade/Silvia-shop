<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="catalog">
        <div class="sale">
            <div class="sale-text">
                <h1 class="sale-text__title">каталог</h1>
                <p class="sale-text__subtitle">Получи 30% скидку при первом заказе</p>
            </div>
            <svg width="370" height="370" viewBox="0 0 370 370" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M185 0L213.779 156.221L370 185L213.779 213.779L185 370L156.221 213.779L0 185L156.221 156.221L185 0Z"
                    fill="#1E1E1E" />
            </svg>
        </div>
        <div class="filters">
            <div class="filter">

            </div>
        </div>
        <div class="products">
            <div class="product">
                <img class="product__img" src="@/assets/img/product-1.jpg" alt="">
                <div class="product-info">
                    <p class="product-info__subtitle">серьги</p>
                    <p class="product-info__title">FREE FROM JEWELRY золотистые разноуровневые трубочки</p>
                    <p class="product-info__price">2590 ₽</p>
                </div>
                <button class="product__add">В корзину</button>
            </div>
            <div class="product">
                <img class="product__img" src="@/assets/img/product-1.jpg" alt="">
                <div class="product-info">
                    <p class="product-info__subtitle">серьги</p>
                    <p class="product-info__title">FREE FROM JEWELRY золотистые разноуровневые трубочки</p>
                    <p class="product-info__price">2590 ₽</p>
                </div>
                <button class="product__add">В корзину</button>
            </div>
            <div class="product">
                <img class="product__img" src="@/assets/img/product-1.jpg" alt="">
                <div class="product-info">
                    <p class="product-info__subtitle">серьги</p>
                    <p class="product-info__title">FREE FROM JEWELRY золотистые разноуровневые трубочки</p>
                    <p class="product-info__price">2590 ₽</p>
                </div>
                <button class="product__add">В корзину</button>
            </div>
            <div class="product">
                <img class="product__img" src="@/assets/img/product-1.jpg" alt="">
                <div class="product-info">
                    <p class="product-info__subtitle">серьги</p>
                    <p class="product-info__title">FREE FROM JEWELRY золотистые разноуровневые трубочки</p>
                    <p class="product-info__price">2590 ₽</p>
                </div>
                <button class="product__add">В корзину</button>
            </div>
            <div class="product">
                <img class="product__img" src="@/assets/img/product-1.jpg" alt="">
                <div class="product-info">
                    <p class="product-info__subtitle">серьги</p>
                    <p class="product-info__title">FREE FROM JEWELRY золотистые разноуровневые трубочки</p>
                    <p class="product-info__price">2590 ₽</p>
                </div>
                <button class="product__add">В корзину</button>
            </div>
            <div class="product">
                <img class="product__img" src="@/assets/img/product-1.jpg" alt="">
                <div class="product-info">
                    <p class="product-info__subtitle">серьги</p>
                    <p class="product-info__title">FREE FROM JEWELRY золотистые разноуровневые трубочки</p>
                    <p class="product-info__price">2590 ₽</p>
                </div>
                <button class="product__add">В корзину</button>
            </div>
            <div class="product">
                <img class="product__img" src="@/assets/img/product-1.jpg" alt="">
                <div class="product-info">
                    <p class="product-info__subtitle">серьги</p>
                    <p class="product-info__title">FREE FROM JEWELRY золотистые разноуровневые трубочки</p>
                    <p class="product-info__price">2590 ₽</p>
                </div>
                <button class="product__add">В корзину</button>
            </div>
            <div class="product">
                <img class="product__img" src="@/assets/img/product-1.jpg" alt="">
                <div class="product-info">
                    <p class="product-info__subtitle">серьги</p>
                    <p class="product-info__title">FREE FROM JEWELRY золотистые разноуровневые трубочки</p>
                    <p class="product-info__price">2590 ₽</p>
                </div>
                <button class="product__add">В корзину</button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.sale {
    border-bottom: 1px solid #000;

    &-text {
        position: relative;
        margin-bottom: 135px;

        &__title {
            font-weight: 600;
            font-size: 328px;
            line-height: 121%;
            text-transform: uppercase;
        }

        &__subtitle {
            font-weight: 400;
            font-size: 22px;
            position: absolute;
            bottom: 40px;
        }
    }
}

.products {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    
    .product {
        &__img {
            width: 360px;
            height: 360px;
        }

        &-info {
            margin-top: 1rem;
            &__subtitle {
                font-weight: 500;
                font-size: 16px;
                letter-spacing: 0.06em;
            }

            &__title {
                font-weight: 500;
                font-size: 18px;
                width: 304px;

                margin: 16px 0;
            }

            &__price {
                font-weight: 600;
                font-size: 22px;
            }
        }

        &__add {
            color: #ffff;
            background-color: #000;
            padding: 20px 0;
            width: 100%;
            font-size: 18px;
            font-weight: 600;

            margin-top: 20px;
            cursor: pointer;

            &:hover {
                border: 1px solid #000;
                background-color: #fff;
                color: #000;
            }
        }
    }
}
</style>