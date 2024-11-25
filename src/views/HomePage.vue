<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="home">
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
                    <router-link to="/register">
                        <p class="nav-auth__registration">Зарегистрироваться</p>
                    </router-link>
                    <router-link to="/login">
                        <p class="nav-auth__login">Войти</p>
                    </router-link>
                </div>
            </nav>
        </header>
        <main>
            <RouterView />
        </main>
    </div>
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

p {
    font-weight: 500;
    font-size: 22px;
    color: #1e1e1e;

    border-right: 1px solid #1e1e1e;
    border-left: 1px solid #1e1e1e;
    padding: 30px 40px;
}
</style>