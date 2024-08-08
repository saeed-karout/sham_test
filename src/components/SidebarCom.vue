<template>
  <div class="flex flex-col items-center justify-center h-full w-64 px-5 border-r text-white ">
    <div class="p-4 text-2xl font-bold mb-6">Services</div>
    <nav class="w-full space-y-4 ">
      <button
        v-for="product in products"
        :key="product.id"
        @click="selectService(product)"
        class="w-full p-4 bg-gray-700 hover:bg-gray-600 rounded-lg opacity-80 transition-colors duration-300"
      >
        {{ product.title }}
      </button>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const products = ref([]);

const emit = defineEmits(['select-service']);
const selectService = (product) => {
  emit('select-service', product);
};

onMounted(async () => {
  try {
    const response = await axios.get('https://dummyjson.com/carts/1');
    products.value = response.data.products;
  } catch (error) {
    console.error('Error fetching products:', error);
  }
});
</script>

<style scoped>
button {
  outline: none;
}
</style>
