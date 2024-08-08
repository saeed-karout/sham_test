<template>
  <div class="flex flex-1 items-center justify-center border-t   bg-white " style="margin-top: 100px;">
    <div class="relative w-80 h-80 perspective">
     
         <div class="w-full h-full transition-transform duration-500 transform-style preserve-3d" :class="{ 'rotate-y-180': isFlipped }" @mouseenter="isFlipped = true" @mouseleave="isFlipped = false">
           <div class="absolute w-full h-full backface-hidden">
             <img :src="selectedProduct.thumbnail" alt="Product Image" class="w-full h-full object-cover rounded-lg shadow-lg" />
           </div>
           <div class="absolute w-full h-full bg-white text-black backface-hidden rotate-y-180 rounded-lg shadow-lg flex flex-col items-center justify-center p-4">
             <h1 class="text-2xl font-bold mb-4">{{ selectedProduct.title }}</h1>
             <p>{{ selectedProduct.description }}</p>
           </div>
         </div>
     </div>
    </div>
  
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  selectedProduct: {
    type: Object,
    required: true,
  },
});

const isFlipped = ref(false);
</script>

<style scoped>
.perspective {
  perspective: 1000px;
}

.transform-style {
  transform-style: preserve-3d;
}

.backface-hidden {
  backface-visibility: hidden;
}

.rotate-y-180 {
  transform: rotateY(180deg);
}
</style>
