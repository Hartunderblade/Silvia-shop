<script setup>
import { useRoute } from 'vue-router';
import { ref, onBeforeMount } from 'vue';
import products from '@/data.json';

const product = ref(null);
const route = useRoute();

const { id } = route.params;

onBeforeMount(() => {
  product.value = products.find(c => c.id === parseInt(id))
})


</script>

<template>
  <div v-if="product" class="product">
    <div class="card">
      <img class="card__image" :src="product.image" :alt="product.name" />
      <div class="card-description">
        <p class="card-description__title">{{ product.name }}</p>
        <p class="card-description__price">{{ product.price }} ₽</p>
        <button class="card-description__add">Добавить в корзину</button>
      </div>
    </div>
    <div class="info">
      <p class="info__title">ОПИСАНИЕ</p>
      <p class="info__name">{{ product.name }}</p>
      <p class="info__article">артикул: {{ product.article }}</p>
      <p class="info__description">{{ product.description }}</p>
      <div class="star">
        <svg width="369" height="369" viewBox="0 0 369 369" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M184.5 0L213.201 155.799L369 184.5L213.201 213.201L184.5 369L155.799 213.201L0 184.5L155.799 155.799L184.5 0Z"
            fill="#1E1E1E" />
        </svg>
      </div>
    </div>
  </div>
  <div v-else>
    <h1>Ничего не найдено</h1>
  </div>
</template>

<style scoped lang="scss">
.product {
  position: relative;
}

.card {
  display: flex;
  column-gap: 20px;

  &__image {
    max-width: 1020px;
    max-height: 843px;
  }

  &-description {
    &__title {
      font-weight: 500;
      font-size: 60px;
      color: #1e1e1e;
      margin-bottom: 22rem;
    }

    &__price {
      font-weight: 700;
      font-size: 32px;
    }

    &__add {
      font-weight: 500;
      font-size: 22px;
      text-transform: uppercase;
      color: #fff;
      border-radius: 4px;
      padding: 30px 80px;
      background-color: #1e1e1e;
      margin-top: 1rem;
      cursor: pointer;

      &:hover {
        border: 1px solid #1e1e1e;
        background-color: #fff;
        color: #1e1e1e;
      }
    }
  }
}

.info {
  margin-top: 5rem;

  &__title {
    font-weight: 500;
    font-size: 18px;
    text-transform: uppercase;
    color: #000;
    border-bottom: 1px solid #323232;
    padding-bottom: 1rem;
    width: 760px;
  }

  &__name {
    font-weight: 500;
    font-size: 32px;
    color: #1e1e1e;
    margin-top: 2rem;
  }

  &__article {
    font-weight: 500;
    font-size: 16px;
    color: #626262;
    margin-top: 1.1rem;
  }

  &__description {
    font-weight: 400;
    font-size: 1rem;
    max-width: 735px;
    margin-top: 1.1rem;
  }

  .star {
    position: absolute;
    right: 0;
    top: 900px;
  }
}
</style>
