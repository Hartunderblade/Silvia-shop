<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref('');
const password = ref('');

const login = () => {
  // Здесь должна быть логика аутентификации
  // Например, отправка запроса на сервер
  localStorage.setItem('userName', username.value);
  router.push('/user');
};
</script>

<template>
  <div class="wrapper">
    <div class="navigation">
      <h1 class="navigation__logo">Silvia</h1>
      <router-link to="/register"><p class="navigation__link">Зарегистрироваться</p></router-link>
    </div>
    
    <div class="login">
      <h1 class="login__title">Вход</h1>
      <form class="login-form" @submit.prevent="login">
        <input class="login-form__name" type="text" v-model="username" placeholder="Ваше имя" />
        <input class="login-form__password" type="password" v-model="password" placeholder="Пароль" />
        <button class="login-form__button" @click="login" type="submit">Войти</button>
      </form>
    </div>
    <div class="image">
      <img src="@/assets/img/bg-auth.jpg" alt="">
    </div>

  </div>
</template>

<style scoped lang="scss">
.wrapper {
}

.navigation {
  margin-top: 1rem;
  display: flex;
  align-items: center;
  column-gap: 38rem;

  &__logo {
    font-weight: 400;
font-size: 40px;
  }

  &__link {
    font-size: 1.2rem;
    color: #1e1e1e;
    border-bottom: 1px solid #1e1e1e;
  }
}

.login {
    position: absolute;
    top:calc(50% - 260px);

  &__title {
    font-weight: 600;
    font-size: 32px;
    text-transform: uppercase;
    text-align: center;
    color: #1e1e1e;
  }

  &-form {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;

    margin-top: 5rem;

    &__name,
    &__password {
      border-bottom: 1px solid #1e1e1e;
      padding-bottom: 10px;
      padding-top: 1rem;
      width: 630px;
    }

    &__button {
      font-weight: 600;
      font-size: 24px;
      text-transform: capitalize;
      color: #1e1e1e;

      border: 1px solid #1e1e1e;
      border-radius: 6px;
      padding: 26px 0;

      margin-top: 23px;
      cursor: pointer;

      &:hover {
        background-color: #1e1e1e;
        color: #ffff;
      }

      &::placeholder {
        font-weight: 100;
        font-size: 14px;
        color: #464646;
      }
    }
  }
}

.image {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;

  img {
    height: 952px;
  }
}
</style>