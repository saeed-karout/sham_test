<template>
    <div class="flex">
      <!-- Sidebar -->
      <div class="sidebar flex flex-col items-center justify-start h-auto w-full lg:w-64 px-3 py-5 text-[#B99269]">
        <div class="services-title p-4 text-2xl font-bold mb-6">Services</div>
        <nav class="w-full space-y-4">
          <button
            v-for="service in services"
            :key="service.id"
            @click="selectService(service)"
            :class="[
              'w-full p-4 rounded-lg opacity-80 transition-colors duration-300',
              activeService === service.id ? 'bg-gray-600 text-white' : 'bg-gray-700 hover:bg-gray-600 text-[#B99269]'
            ]"
          >
            {{ service.name }}
          </button>
        </nav>
      </div>
  
      <!-- Content Area -->
      <div class="content flex-grow p-6">
        <div v-if="selectedService" class="project-gallery">
          <h2 class="text-3xl font-bold mb-4">{{ selectedService.name }}</h2>
          <p class="text-lg mb-4">{{ selectedService.description }}</p>
          <div class="grid grid-cols-3 gap-4">
            <div v-for="image in selectedService.images" :key="image" class="project-image">
              <img :src="image" @click="openImageViewer(image)" class="cursor-pointer">
            </div>
          </div>
        </div>
        <div v-else>
          <p>Please select a project to view details.</p>
        </div>
      </div>
    </div>
    
    <!-- Image Viewer Modal -->
    <div v-if="imageViewerOpen" class="image-viewer fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div class="relative">
        <img :src="selectedImage" class="max-w-full max-h-screen">
        <button @click="closeImageViewer" class="absolute top-2 right-2 text-white text-2xl">&times;</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  const services = ref([]);
  const activeService = ref(null);
  const selectedService = ref(null);
  const imageViewerOpen = ref(false);
  const selectedImage = ref('');
  
  const fetchServices = async () => {
    try {
      const response = await axios.get('/services.json');
      services.value = response.data.services;
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };
  
  const selectService = (service) => {
    activeService.value = service.id;
    selectedService.value = service;
  };
  
  const openImageViewer = (image) => {
    selectedImage.value = image;
    imageViewerOpen.value = true;
  };
  
  const closeImageViewer = () => {
    imageViewerOpen.value = false;
  };
  
  onMounted(fetchServices);
  </script>
  
  <style scoped>
  .sidebar {
    height: auto;
  }
  
  .services-title {
    margin-top: 20px;
  }
  
  .project-gallery img {
    width: 100%;
    height: auto;
    transition: transform 0.3s ease;
  }
  
  .project-gallery img:hover {
    transform: scale(1.05);
  }
  
  .image-viewer img {
    border: 5px solid white;
  }
  
  @media (max-width: 640px) {
    .services-title {
      margin-top: 40px;
    }
  }
  </style>
4  