<template>
  <div class="sidebar flex flex-col items-center justify-start h-full w-full lg:w-64 p-5  text-[#B99269]">
    <div class="p-4 text-2xl font-bold mb-6">Services</div>
    <nav class="w-full space-y-4">

    
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
.sidebar {
  min-width: 200px;
  flex-shrink: 0;
  transition: all 0.3s ease-in-out;
  margin-top: 96px;
}

@media (max-width: 1024px) {
  .sidebar {
    width: 100%;
    max-height: 50vh;
  }
}
</style>
