<template>
  <div class="flex h-screen">
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
