<template>
  <section id="new-features" class="pb-8 sm:pb-10 lg:py-10">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="font-bold leading-tight text-4xl xl:text-5xl" style="color: #B99269; padding-top: 50px;">
          Our Services
        </h2>
        <hr class="my-4 mt-8 border-t-2 border-gray-300 dark:border-yellow-500 w-1/3 mx-auto">
      </div>

      <div class="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 md:grid-cols-3 xl:mt-24">
        <router-link 
          v-for="(feature, index) in features" 
          :key="feature.id" 
          :to="{ name: 'service', params: { selectedFeature: feature.id } }" 
          class="p-4 flex flex-col justify-center items-center relative cursor-pointer"
          :class="getBorderClass(index)"
        >
          <Fwb-card img-alt="Desk" class="flex flex-col justify-center items-center" 
                    img-src="" variant="image">
            <img :src="feature.thumbnail" class="w-72 h-48" style="border-radius: 15px;" alt="">
            <div class="p-5">
              <h5 class="mb-2 text-lg font-bold tracking-tight text-[#304452] dark:text-[#B99269]">
                {{ feature.name }}
              </h5>
            </div>
          </Fwb-card>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      features: []
    };
  },
  methods: {
    async fetchFeatures() {
      try {
        const response = await fetch('/services.json');
        const data = await response.json();
        this.features = data.services;
      } catch (error) {
        console.error('Error fetching features:', error);
      }
    },
    getBorderClass(index) {
  const totalItems = this.features.length;

  // إذا كان العنصر في منتصف الصف
  if ((index + 1) % 3 === 2) {
    return 'border-l-4 border-r-4 border-b-4 border-[#B99269]';
  }
  // إذا كان العنصر الأخير في القائمة
  else if (index === totalItems - 1) {
    return '';
  }
  // إذا كان العنصر الأول في الصف
  else if ((index + 1) % 3 === 1) {
    return ' border-b-4 border-[#B99269]';
  }
  // جميع العناصر الأخرى
  else {
    return 'border-b-4 border-[#B99269]';
  }
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

@media (min-width: 1024px) { /* تعديل تصميم العناصر للكمبيوتر المحمول */
  .grid > a:nth-child(1),
  .grid > a:nth-child(3) {
    border-bottom: 4px solid #B99269;
  }

  .grid > a:nth-child(2) {
    border-left: 4px solid #B99269;
    border-right: 4px solid #B99269;
    border-bottom: 4px solid #B99269;
  }
}
</style>
