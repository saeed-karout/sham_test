<template>
    <section id="new-features" class="pb-8 sm:pb-10 dark:bg-gray-800 dark:opacity-80 lg:py-10">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-bold leading-tight sm:text-4xl xl:text-5xl" style="color: #B99269; padding-top: 50px;">
            Our Services
          </h2>
          <hr class="my-4 mt-8 border-t-2 border-gray-300 dark:border-yellow-500 w-1/3 mx-auto">
        </div>
  
        <div class="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 md:grid-cols-3 xl:mt-24">
          <div v-for="feature in features" :key="feature.id" 
               class="p-4 flex flex-col justify-center items-center relative cursor-pointer"
               @click="openModal(feature)">
            
            <Fwb-card img-alt="Desk" class="flex flex-col justify-center items-center" 
                      img-src="https://flowbite.com/docs/images/blog/image-1.jpg" variant="image">
              <img :src="feature.images[0]" class="w-52 h-48" alt="">
              <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {{ feature.title }}
                </h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                  {{ feature.description }}
                </p>
              </div>
            </Fwb-card>
          </div>
        </div>
      </div>
  
      <transition name="modal">
        <div v-if="isModalOpen" 
             class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div class="bg-white p-8 rounded-lg max-w-md mx-auto relative">
            <button @click="closeModal" class="absolute top-2 right-2 p-1">
              <img :src="selectedFeature.thumbnail" class="w-8 h-8 object-cover" />
            </button>
            <h3 class="text-2xl font-bold text-gray-900">{{ selectedFeature.title }}</h3>
            <p class="mt-4 text-base text-gray-600">{{ selectedFeature.description }}</p>
          </div>
        </div>
      </transition>
    </section>
  </template>
  
  <script>

  
  export default {
    data() {
      return {
        features: [],
        isModalOpen: false,
        selectedFeature: {},
      };
    },
    methods: {
      async fetchFeatures() {
        try {
          const response = await fetch('https://dummyjson.com/products?limit=9');
          const data = await response.json();
          this.features = data.products;
        } catch (error) {
          console.error('Error fetching features:', error);
        }
      },
      openModal(feature) {
        this.selectedFeature = feature;
        this.isModalOpen = true;
      },
      closeModal() {
        this.isModalOpen = false;
        this.selectedFeature = {};
      }
    },
    created() {
      this.fetchFeatures();
    }
  }
  </script>
  
  <style scoped>
  .grid {
    display: grid;
  }
  
  .grid>div {
    position: relative;
  }

  @media (min-width : 750px) {
         /* Borders between columns and rows on larger screens */
  .grid>div:not(:nth-child(3n)) {
    border-right: 1px solid #B99269;
  }
  
  .grid>div {
    border-bottom: 1px solid #B99269;
  }
  }
  
 
  
  /* Adjust borders for mobile screens */
  @media (max-width: 640px) {
    .grid>div {
      border-right: none; 
      border-top: none;
      border-left: none;/* Remove the right border on mobile */
      border-bottom: 1px solid #B99269; /* Keep only the bottom border */
    }
  }
  </style>
  