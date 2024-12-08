<script setup>
import { ref } from "vue";
import { defineProps, defineEmits } from "vue";
import { useRouter } from "vue-router";

// const router = useRouter();
// const userName = ref(localStorage.getItem("userName") || "Пользователь");

// const logout = () => {
//   localStorage.removeItem("userName");
//   router.push("/");
// };

defineProps({
  cart: Array,
  cartTotal: Number,
});

const emit = defineEmits(["remove"]);

const removeItem = (productId) => {
  emit("remove", productId);
};



</script>

<template>
  <div  class="cart">
    <div class="cart-title">
      <h1 class="cart-title__text">Корзина</h1>
      <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M55 0L63.556 46.444L110 55L63.556 63.556L55 110L46.444 63.556L0 55L46.444 46.444L55 0Z"
          fill="#1E1E1E" />
      </svg>
    </div>
    <div class="items">
      <div v-for="item in cart" :key="item.id" class="item">
        <img width="370px" height="393px" :src="item.image" alt="">
        <div style="display: flex; justify-content: space-between; width: 100%;" class="info">
          <p style="font-weight: 500; font-size: 32px; color: #1e1e1e; width: 250px; margin-left: 1rem;">{{ item.name }} </p>
          <div >
            <button style="cursor: pointer;" @click="removeItem(item.id)">
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M39.9998 2.00015L2 40M1.99984 2L39.9997 39.9998" stroke="#464646" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            </button>
            
            <p style="font-weight: 500; font-size: 32px; color: #000; margin-top: 9rem;">{{ item.price }} ₽</p>
          </div>
        </div>
      </div>
    </div>
      <div style="display: flex; justify-content: space-between; width: 100%; margin-top: 4rem;">
        <p style="font-weight: 300; font-size: 32px; text-transform: uppercase; color: #000;">итого</p>
        <p style="font-weight: 500; font-size: 32px; text-transform: uppercase; color: #000;">{{ cartTotal }} ₽</p>
      </div>
      <button style="font-weight: 300; font-size: 1.6rem; text-transform: uppercase; color: #fff; padding: 32px 0; background: #1e1e1e; width: 1542px; cursor: pointer; margin-top: 1.8rem;">оформить заказ</button>
  </div>
  
</template>

<style scoped lang="scss">
.cart-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5rem;
  margin-bottom: 6rem;
  &__text {
    font-style: italic;
    font-weight: 600;
    font-size: 48px;
    text-transform: uppercase;
    color: #1e1e1e;
  }
}

.items {
  
}

.item {
  display: flex;
  border-bottom: 1px solid #000;
  padding-bottom: 1rem;
  margin-top: 1rem;
}
</style>
