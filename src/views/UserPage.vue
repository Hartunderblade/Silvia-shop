<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const userName = ref(localStorage.getItem("userName") || "Пользователь");

const logout = () => {
  localStorage.removeItem("userName");
  router.push("/");
};
</script>

<template>
  <div class="user">
    <header>
      <nav class="nav">
        <router-link to="/"><h2 class="nav__logo">Silvia</h2></router-link>
        <div class="nav-link">
          <router-link to="/about">
            <p>О нас</p>
          </router-link>
          <router-link to="/catalog">
            <p>Каталог</p>
          </router-link>
          <router-link to="/where">
            <p>Где нас найти</p>
          </router-link>
        </div>
        <div class="nav-auth">
          <router-link to="/basket">
            <img src="@/assets/icons/basket.svg" alt="" />
          </router-link>
          <router-link to="/profile">
            <img class="profile" src="@/assets/icons/profile.svg" alt="" />
          </router-link>
        </div>
      </nav>
    </header>
  </div>
  <!-- <div>
    <h1>Добро пожаловать, {{ userName }}!</h1>
    <button @click="logout">Выйти</button>
  </div> -->
</template>

<style scoped lang="scss">
.nav {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #1e1e1e;

  &__logo {
    font-weight: 400;
    font-size: 32px;
    color: #1e1e1e;

    border-right: 1px solid #1e1e1e;
    border-left: 1px solid #1e1e1e;

    padding: 24px 40px;
  }

  &-link {
    display: flex;
    align-items: center;
  }

  &-auth {
    display: flex;
    align-items: center;

    &__registration {
      border-left: 1px solid #1e1e1e;
      border-right: 1px solid #1e1e1e;
      padding: 30px 40px;
    }

    &__login {
      background: #1e1e1e;
      font-weight: 500;
      font-size: 22px;
      color: #fff;
      padding: 30px 40px;
    }
  }
}

img, p {
  font-weight: 500;
  font-size: 22px;
  color: #1e1e1e;

  border-right: 1px solid #1e1e1e;
  border-left: 1px solid #1e1e1e;
  padding: 30px 40px;
}
</style>
