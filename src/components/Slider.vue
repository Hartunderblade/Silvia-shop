<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const items = ref([
    {name: "HIGHER-AURA hematite choker", image: "src/assets/img/bg-auth.jpg"},
    {name: "HIGHER-AURA hematite choker", image: "src/assets/img/map.jpg"},
    {name: "HIGHER-AURA hematite choker", image: "src/assets/img/bg-auth.jpg"}
]);

const currentSlide = ref(0);

    const prevSlide = () => {
      currentSlide.value =
        currentSlide.value === 0 ? items.value.length - 1 : currentSlide.value - 1;
    };

    const nextSlide = () => {
      currentSlide.value =
        currentSlide.value === items.value.length - 1 ? 0 : currentSlide.value + 1;
    };

</script>

<template>
  <div style="margin-top: 140px;" class="slider-container">
    <h2>ВАМ ПОНРАВИТСЯ</h2>
    
    <div class="slider">
        <button @click="prevSlide" class="arrow arrow-left">←</button>
        <div class="slides">
            <div class="slide" v-for="(item, index) in items" :key="index" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
                <img width="370px" height="600px" :src="item.image" alt="Product Image" />
                <p>{{ item.name }}</p>
            </div>
        </div>
        <button @click="nextSlide" class="arrow arrow-right">→</button>
    </div>
    <a href="/catalog" class="catalog-link">В каталог →</a>
  </div>
</template>

<style scoped lang="scss">
.slider-container {
    text-align: center;
    font-family: Arial, sans-serif;
  }
  
  .slider {
    position: relative;
    overflow: hidden;
    width: 100%;
    max-width: 800px;
    margin: auto;
    display: flex;
    align-items: center;
  }
  
  .slides {
    display: flex;
    transition: transform 0.5s ease;
  }
  
  .slide {
    min-width: 100%;
    text-align: center;
  }
  
  img {
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
  }
  
  .arrow {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
  }
  
  .arrow-left {
    position: absolute;
    left: 10px;
  }
  
  .arrow-right {
    position: absolute;
    right: 10px;
  }
  
  .catalog-link {
    display: inline-block;
    margin-top: 20px;
    color: black;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
  }

</style>
