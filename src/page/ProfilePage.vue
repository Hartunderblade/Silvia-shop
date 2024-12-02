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
  <div class="basket-container">
    <h1>fdsgsdgsdgdsgdsgsdgds</h1>
  </div>
</template>

<style scoped lang="scss"></style>
