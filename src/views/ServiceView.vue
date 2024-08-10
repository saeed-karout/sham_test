<template>
  <div class="flex h-screen flex-col lg:flex-row">
    <Sidebar @select-service="handleServiceSelect" />
    <MainContent :selectedProduct="selectedProduct" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Sidebar from '@/components/SidebarCom.vue';
import MainContent from '@/components/MainContentCom.vue';

const selectedProduct = ref({
  title: 'Select a product',
  description: 'Please select a product from the sidebar.',
  thumbnail: ''
});

const handleServiceSelect = (product) => {
  selectedProduct.value = product;
};
</script>

<style scoped>
/* عام */
body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  background-color: #f5f5f5;
}

/* توازن مظهر التباعد عبر الصفحة */
.flex {
  gap: 1rem;
}

@media (max-width: 1024px) {
  .flex {
    flex-direction: column;
  }
}
</style>
