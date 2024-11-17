<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div>
        <h1>This is home page</h1>
        <h2>Добро пожаловать!</h2>
        <div>
            <router-link to="/login">Войти</router-link>
            <router-link to="/register">Зарегистрироваться</router-link>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>