<script setup>
import { computed, ref, watch } from "vue";
import { defineProps, defineEmits } from "vue";
import { RouterLink } from "vue-router";
import productsData from '@/data.json';
import { useRouter } from 'vue-router'
import CartPage from '@/page/CartPage.vue';

const router = useRouter()

const products = ref(productsData);

const cart = ref([]);

// Управление видимостью модального окна
const isModalVisible = ref(false);

// Закрытие окна
const closeModal = () => {
  isModalVisible.value = false;
};

const sortedProducts = ref([...products.value]);

const sortOption = ref("All");

watch(sortOption, (newOption) => {
  if (newOption === "alphabet") {
    // Сортировка по алфавиту
    sortedProducts.value = [...products.value].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  } else if (newOption === "priceLow") {
    // Сначала дешевые
    sortedProducts.value = [...products.value].sort((a, b) => a.price - b.price);
  } else if (newOption === "priceHigh") {
    // Сначала дорогие
    sortedProducts.value = [...products.value].sort((a, b) => b.price - a.price);
  } else {
    // Без сортировки (All)
    sortedProducts.value = [...products.value];
  }
});

// Добавление товара в корзину
const addToCart = (product) => {
  const existingProduct = cart.value.find((item) => item.id === product.id);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.value.push({ ...product, quantity: 1 });
  }
};

// Удаление товара из корзины
const removeFromCart = (productId) => {
  cart.value = cart.value.filter((item) => item.id !== productId);
};

// Расчет общей стоимости товаров в корзине
const cartTotal = ref(0);
watch(
  cart,
  () => {
    cartTotal.value = cart.value.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  },
  { deep: true }
);

</script>

<template>
  <div class="catalog">
    <div class="sale">
      <div class="sale-text">
        <h1 class="sale-text__title">каталог</h1>
        <p class="sale-text__subtitle">Получи 30% скидку при первом заказе</p>
      </div>
      <svg
        width="370"
        height="370"
        viewBox="0 0 370 370"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M185 0L213.779 156.221L370 185L213.779 213.779L185 370L156.221 213.779L0 185L156.221 156.221L185 0Z"
          fill="#1E1E1E"
        />
      </svg>
    </div>
    <div class="filters">
      <div class="filter">
        <select 
                v-model="sortOption"
                style="font-weight: 500; font-size: 20px; line-height: 121%;" 
        >
          <option value="All">Все</option>
          <option value="alphabet">По алфавиту</option>
          <option value="priceLow">Снчачала дешевле</option>
          <option value="priceHigh">Снчачала дoроже</option>
        </select>
      </div>
    </div>
    <div class="products">
      <div  class="product" v-for="product in products" :key="product.id">
        <div @click="router.push(`/product/${product.id}`)" style="color: #000;">
          <img class="product__img" :src="product.image" alt="" />
        <div class="product-info">
          <p class="product-info__subtitle">{{ product.category }}</p>
          <p class="product-info__title">{{ product.name }}</p>
          <p class="product-info__price">{{ product.price }} ₽</p>
        </div>
        </div>
        
        <button class="product__add" @click.prevent="addToCart(product)">В корзину</button>
      </div>
    </div>
    
    <div>
      <div >
        <CartPage :cart="cart" :cart-total="cartTotal" @remove="removeFromCart" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">



.modal-close {
  cursor: pointer;
}
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

.filters {
    margin-top: 5rem;
}

.products {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  margin-top: 4rem;

  .product {
    cursor: pointer;
    color: #000;
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
