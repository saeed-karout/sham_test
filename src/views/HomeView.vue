<!-- src/components/Home.vue -->
<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4">
    <h1 class="text-4xl font-bold mb-6">Counter</h1>
    <div class="bg-white text-gray-900 rounded-lg shadow-lg p-8 mb-6 w-full max-w-md">
      <p class="text-2xl mb-4">Count: <span class="font-semibold">{{ counterStore.count }}</span></p>
      <p class="text-2xl mb-6">Double Count: <span class="font-semibold">{{ counterStore.doubleCount }}</span></p>
      <div class="flex gap-4">
        <button @click="counterStore.increment" class="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded shadow">Increment</button>
        <button @click="counterStore.zero" class="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded shadow">Delete</button>
      </div>
    </div>
    <div>
      <a href="/about" class="text-lg font-semibold underline hover:text-gray-200">About</a>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter.js'

const counterStore = useCounterStore()
</script>

<style scoped>
/* Add any styles you need for your component */
</style>
