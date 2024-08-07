<!-- src/components/Home.vue -->
<script setup>
import { ref, onMounted } from 'vue';
import Videos from '@/components/VideoHomeComponent.vue';
import Service from '@/components/serviceView.vue';
import LandingScreen from '@/components/LandingScreen.vue';
import ContactView from './ContactView.vue';
import ProjectsComponents from '@/components/ProjectsComponents.vue';
const showLoadingScreen = ref(true);

onMounted(() => {
  setTimeout(() => {
    showLoadingScreen.value = false;
  }, 3000);
});
</script>

<template>
  <div v-if="showLoadingScreen">
    <LandingScreen />
  </div>
  <div v-else>
    <div>
      <Videos />
      <Service />

      
      <ProjectsComponents />
      
      <ContactView  />

    </div>
  </div>
</template>
