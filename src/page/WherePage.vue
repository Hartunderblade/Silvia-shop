<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="where">
    <div class="contact">
      <div class="contact-top">
        <h1 class="contact-top__title">Где нас найти</h1>
        <p class="contact-top__text">+79123456789</p>
        <p class="contact-top__text">г. Москва, ул. Подбельского, д. 27А</p>
      </div>
      <div class="contact-bottom">
        <p class="contact-bottom__text">silvia@gmail.com</p>
      </div>
    </div>
    <div class="map">
      <img class="map__img" src="@/assets/img/map.jpg" alt="" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.where {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #1e1e1e;
  border-top: 2px solid #1e1e1e;
  padding: 60px 0px;

  margin: 40px 0 80px 0;
}

.contact {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &-top {
    display: flex;
    flex-direction: column;
    row-gap: 32px;
    &__title {
      font-style: italic;
      font-weight: 600;
      font-size: 48px;
      text-transform: uppercase;
      color: #1e1e1e;

      margin-bottom: 28px;
    }

    &__text {
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 28px;
      color: #1e1e1e;
    }
  }

  &-bottom {
    &__text {
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 28px;
      color: #1e1e1e;
    }
  }
}

.map {
  &__img {
    width: 1020px;
    height: 734px;
  }
}
</style>
