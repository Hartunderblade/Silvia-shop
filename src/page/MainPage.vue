<script setup>
import { RouterLink } from "vue-router";
import Slider from '@/components/Slider.vue';
import Products from '@/components/Products.vue';
</script>

<template>
  <div class="main">
    <header>
      <div style="display: flex; align-items: center; column-gap: 562px; margin-top: 80px">
        <div style="display:flex;">
          <h1 style="font-weight: 500; font-size: 120px; text-transform: uppercase; color: #1e1e1e;">silvia</h1>
          <p style="font-weight: 400; font-size: 22px; text-transform: uppercase; color: #1e1e1e;">1982 - 2024</p>
        </div>
        <div>
          <button style="font-weight: 500; font-size: 48px; color: #1e1e1e; display:flex; flex-direction: column; cursor: pointer;">
            В каталог
            <svg
              width="241"
              height="15"
              viewBox="0 0 241 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M240.707 8.20711C241.098 7.81658 241.098 7.18342 240.707 6.79289L234.343 0.428932C233.953 0.0384078 233.319 0.0384078 232.929 0.428932C232.538 0.819457 232.538 1.45262 232.929 1.84315L238.586 7.5L232.929 13.1569C232.538 13.5474 232.538 14.1805 232.929 14.5711C233.319 14.9616 233.953 14.9616 234.343 14.5711L240.707 8.20711ZM0 8.5H240V6.5H0V8.5Z"
                fill="#1E1E1E"
              />
            </svg>
          </button>
        </div>
      </div>
      <div style="display:flex; justify-content: space-between; margin-top: 60px;">
        <div style="display:flex; flex-direction: column; row-gap: 200px;">
          <h1 style="font-style: italic; font-weight: 400; font-size: 40px; text-transform: uppercase; color: #1e1e1e; width: 256px;">Новая коллекция</h1>
          <div style="display:flex; flex-direction: column; row-gap: 40px;">
            <div>
              <p style="font-weight: 500; font-size: 18px; text-transform: capitalize; color: #1e1e1e; margin-bottom: 0.4rem;">Скидки</p>
              <p style="font-weight: 400; font-size: 16px; text-transform: capitalize; color: #1e1e1e;">07.04.2024г - 14.04.2024г</p>
            </div>
            <div>
              <p style="font-weight: 500; font-size: 18px; text-transform: capitalize; color: #1e1e1e; margin-bottom: 0.4rem;">Место</p>
              <p style="font-weight: 400; font-size: 16px; text-transform: capitalize; color: #1e1e1e;">г. Москва, ул. Подбельского, д. 27А</p>
            </div>
          </div>
        </div>
        <div style="background-color: #d9d9d9; width:710px; height:449px;"></div>
        <div style="display:flex; flex-direction: column; justify-content: space-between;">
          <div style="background-color: #d9d9d9; width:500px; height:280px;"></div>
          <div style="display:flex; align-items: center; column-gap: 20px;">
            <p>Золото</p>
            <div style="border: 1px solid #1e1e1e; width: 120px;"></div>
            <p>Серебро</p>
          </div>
        </div>
      </div>
    </header>
    <main>
    <Slider/>
    <Products/>
    </main>
  </div>
</template>

<style scoped lang="scss">


</style>
