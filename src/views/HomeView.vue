<!-- src/components/Home.vue -->
<script setup>
import Videos from '@/components/VideoHomeComponent.vue';
import Service from '@/components/serviceView.vue';
import ContactView from './ContactView.vue';
import ProjectsComponents from '@/components/ProjectsComponents.vue';
import NewsCarousel from '@/components/NewsCarousel.vue';
import LandingScreen from '@/components/LandingScreen.vue';

    import {
        ref,
        onMounted
    } from 'vue';



     const showLoadingScreen = ref(true);

    onMounted(() => {
        setTimeout(() => {
            showLoadingScreen.value = false;
        }, 3000);
    });
</script>

<template>

    <div  v-if="showLoadingScreen">
       
       
       
       <LandingScreen />
     
    </div>


    
    <div v-else >
      <Videos />
      
        <Service />
        
        
        <ProjectsComponents />
        
        <ContactView  />
        <NewsCarousel />
        
      
    </div>
  
</template>
