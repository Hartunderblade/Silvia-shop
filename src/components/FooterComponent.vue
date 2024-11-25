<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="footer">
    <div class="social">
      <p class="social__logo">Silvia</p>
      <img src="@/assets/icons/wh.svg" alt="" />
      <img src="@/assets/icons/vk.svg" alt="" />
      <img src="@/assets/icons/tg.svg" alt="" />
    </div>
    <div class="information">
      <img class="information__img" src="@/assets/img/bg-auth.jpg" alt="" />
      <div class="links">
        <p class="links__title">Украшения</p>
        <div class="links-block">
          <a class="links-block__link">Кольца</a>
          <a class="links-block__link">Все</a>
          <a class="links-block__link">Браслеты</a>
          <a class="links-block__link">Серьги</a>
          <a class="links-block__link">Колье и подвески</a>
          <a class="links-block__link">Держатели для очков</a>
        </div>
      </div>
      <div class="links">
        <p class="links__title">Информация</p>
        <div class="links-block">
          <a class="links-block__link">О нас</a>
          <a class="links-block__link">Доставка и оплата</a>
          <a class="links-block__link">Обмен и возврат</a>
          <a class="links-block__link">Контакты</a>
        </div>
      </div>
      <div class="links">
        <p class="links__title">Документы</p>
        <div class="links-block">
          <a class="links-block__link">Политика конфиденциальности</a>
          <a class="links-block__link">Договор оферты</a>
          <a class="links-block__link">Обмен и возврат</a>
          <a class="links-block__link">Политика использования cookie</a>
        </div>
      </div>
    </div>
    <div class="contacts">
      <p class="contacts__title">© 2024 Silvia Все права защищены</p>
      <p class="contacts__text">г. Москва, ул. Подбельского, д. 27А</p>
      <p class="contacts__text">+79123456789</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  background: #1e1e1e;
  color: #ffff;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
}

.social {
  display: flex;
  align-items: center;
  column-gap: 1rem;

  padding: 40px 0;

  &__logo {
    font-weight: 400;
    font-size: 32px;
    color: #fff;
    margin-right: 4px;
  }
}

.information {
  display: flex;
  // justify-content: space-between;
  column-gap: 130px;
  border-bottom: 2px solid #ffffff;
  border-top: 2px solid #ffffff;

  &__img {
    width: 370px;
    height: 370px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 2rem;
  }
}

.links {
  border-left: 1px solid #ffff;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  padding-left: 20px;
  padding-top: 20px;

  &__title {
    color: #8e8e8e;
    font-weight: 300;
    font-size: 22px;
  }

  &-block {
    display: flex;
    flex-direction: column;
    row-gap: 0.4rem;
    &__link {
      font-weight: 500;
      font-size: 22px;
    }
  }
}

.contacts {
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  padding-top: 40px;
  column-gap: 40px;

  &__title {
    font-weight: 500;
    font-size: 18px;
  }

  &__text {
    font-weight: 400;
    font-size: 18px;
  }
}
</style>
