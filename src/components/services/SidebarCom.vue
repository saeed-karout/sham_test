<template>
  <div class="sidebar flex flex-col items-center justify-start h-auto w-full lg:w-64 px-3 py-5 text-[#B99269]">
    <div class="services-title p-4 text-2xl font-bold mb-6">Services</div>
    <nav class="w-full space-y-4">
      <button
        v-for="product in products"
        :key="product.id"
        @click="selectService(product)"
        :class="[
          'w-full p-4 rounded-lg opacity-80 transition-colors duration-300',
          activeProduct === product.id ? 'bg-gray-600 text-white' : 'bg-gray-700 hover:bg-gray-600 text-[#B99269]'
        ]"
      >
        {{ product.name }}
      </button>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, defineProps, defineEmits } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

const products = ref([]);
const activeProduct = ref(null);

const route = useRoute();
const props = defineProps({
  activeProductId: Number
});
const emit = defineEmits(['select-service']);

const selectService = (product) => {
  activeProduct.value = product.id;
  emit('select-service', product);
};

onMounted(async () => {
  try {
    const response = await axios.get('/services.json');
    products.value = response.data.services;
    // Initialize the active product based on the route parameter
    if (route.params.selectedFeature) {
      activeProduct.value = parseInt(route.params.selectedFeature, 10);
    } else if (products.value.length > 0) {
      // Select the first product by default if no route parameter is present
      activeProduct.value = products.value[0].id;
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
});

// Watch for route changes
watch(() => route.params.selectedFeature, (newVal) => {
  if (newVal) {
    activeProduct.value = parseInt(newVal, 10);
  }
});
</script>

<style scoped>
.sidebar {
  height: auto;
}

.services-title {
  margin-top: 20px;
}

@media (max-width: 640px) {
  .services-title {
    margin-top: 40px;
  }
}
</style>
