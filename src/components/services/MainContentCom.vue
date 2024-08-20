<template>
  <div class="main-content flex-1 flex flex-col items-center justify-center mb-20">
    <div class="text-center my-4 dark:text-white">
  <h1 class="text-2xl font-bold mb-4">{{ selectedProduct.name || 'No Name Available' }}</h1>
<p class="text-[#B99269] mb-5">{{ selectedProduct.description || 'No Description Available' }}</p>

    </div>

    <div v-if="selectedProduct.images && selectedProduct.images.length > 0" class="flex gap-5 flex-row flex-wrap justify-center lg:col-3">
      <div
        v-for="(image, index) in selectedProduct.images"
        :key="index"
        class="w-50 h-auto mb-4"
      >
        <img
          :src="image"
          alt="Product Image"
          class="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
    
  </div>
</template>

<script setup>
const props = defineProps({
  selectedProduct: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
img {
  object-fit: cover;
}

.main-content {
  padding: 1rem;
  margin-bottom: 60px;
}

@media (max-width: 768px) {
  .main-content {
    padding: 0.5rem;
    margin-bottom: 80px;
  }
}
</style>
