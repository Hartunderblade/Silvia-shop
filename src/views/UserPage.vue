<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const userName = ref(localStorage.getItem('userName') || 'Пользователь');

const logout = () => {
  localStorage.removeItem('userName');
  router.push('/');
};
</script>

<template>
    <div>
        <h1>Добро пожаловать, {{ userName }}!</h1>
        <button @click="logout">Выйти</button>
      </div>
</template>

<style scoped lang="scss">

</style>