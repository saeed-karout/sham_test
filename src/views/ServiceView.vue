<template>
  <div class="flex hv-70 flex-col lg:flex-row mt-24">
    <!-- Sidebar Component -->
    <Sidebar @select-service="handleServiceSelect" :activeProduct="selectedProduct.id" />

    <!-- Main Content Component -->
    <MainContent :selectedProduct="selectedProduct" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Sidebar from '@/components/SidebarCom.vue';
import MainContent from '@/components/MainContentCom.vue';
import { useRoute } from 'vue-router';

const selectedProduct = ref({
  title: 'Select a product',
  description: 'Please select a product from the sidebar.',
  thumbnail: '',
  images: [],
});

const route = useRoute();

// Simulate a function to fetch product details by ID
const fetchProductById = async (id) => {
  // قم بتنفيذ طلب لجلب تفاصيل الخدمة بناءً على ID من الـ API أو أي مصدر آخر
  const response = await fetch(`/services/${id}`);
  const data = await response.json();
  return data;
};

onMounted(async () => {
  if (route.params.selectedFeature) {
    const productId = route.params.selectedFeature;
    selectedProduct.value = await fetchProductById(productId);
  }
});

const handleServiceSelect = (product) => {
  selectedProduct.value = product;
};
</script>
