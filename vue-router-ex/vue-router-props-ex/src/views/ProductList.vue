<template>
    <div>
        <h1>상품 목록</h1>
        <ul>
            <li v-for="{ id, name } in list" :key = "id">
                <router-link :to="`/product/${id}`">{{ name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import product from '@/api/products.js';

export default {
    computed: {
        list: () => product.fetch()
    }
}
</script>