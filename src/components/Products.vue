<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const products = ref([
    {
        id: 1,
        name: "Колье с гематитом",
        category: "Колье",
        price: 2500,
        popular: 5,
        description: "Элегантное колье с натуральным гематитом.",
        image: "src/assets/img/product-1.jpg",
    },
    {
        id: 2,
        name: "Серебряный браслет",
        category: "Браслеты",
        price: 3000,
        popular: 8,
        description: "Серебряный браслет с изысканным дизайном.",
        image: "src/assets/img/product-1.jpg",
    },
    {
        id: 3,
        name: "Золотые серьги",
        category: "Серьги",
        price: 5000,
        popular: 10,
        description: "Золотые серьги с алмазной огранкой.",
        image: "src/assets/img/product-1.jpg",
    },
    {
        id: 1,
        name: "Колье с гематитом",
        category: "Колье",
        price: 2500,
        popular: 5,
        description: "Элегантное колье с натуральным гематитом.",
        image: "src/assets/img/product-1.jpg",
    },
    {
        id: 2,
        name: "Серебряный браслет",
        category: "Браслеты",
        price: 3000,
        popular: 8,
        description: "Серебряный браслет с изысканным дизайном.",
        image: "src/assets/img/product-1.jpg",
    },
    {
        id: 3,
        name: "Золотые серьги",
        category: "Серьги",
        price: 5000,
        popular: 10,
        description: "Золотые серьги с алмазной огранкой.",
        image: "src/assets/img/product-1.jpg",
    }
])

</script>

<template>
    <div class="product">
        <!-- Фильтры -->
        <div class="filters">
            <select v-model="selectedCategory" @change="filterProducts">
                <option value="">Все категории</option>
                <option v-for="category in categories" :key="category" :value="category">
                    {{ category }}
                </option>
            </select>

            <select v-model="sortOrder" @change="sortProducts">
                <option value="popular">По популярности</option>
                <option value="alphabetical">По алфавиту</option>
            </select>
        </div>
        <div class="product-grid">
            <div class="product-card" v-for="(product, index) in products" :key="index">
                <img class="product-card__img" :src="product.image" alt="">
                <h3 class="product-card__title">{{ product.name }}</h3>
                <p class="product-card__price">{{ product.price }} ₽</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.filters {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
}

.filters select {
    padding: 5px;
}

.product-grid {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.product-card {
    &__img {
        width: 370px;
        height: 400px;
    }

    &__title {
        font-weight: 500;
        font-size: 18px;
        width: 300px;
        margin-top: 1rem;
    }

    &__price {
        font-weight: 500;
        font-size: 22px;
        margin-top: 0.6rem;
    }
}
</style>
