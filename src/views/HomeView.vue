<!-- src/components/Home.vue -->
<script setup>
import Videos from '@/components/VideoHomeComponent.vue';
import Service from '@/components/serviceView.vue';
import ContactView from './ContactView.vue';
import ProjectsComponents from '@/components/ProjectsComponents.vue';
import NewsCarousel from '@/components/NewsCarousel.vue';

</script>

<template>

  
    <div >
      <Videos />
      <div class="">
        <Service />
        
        
        <ProjectsComponents />
        
        <ContactView  />
        <NewsCarousel />
        
      </div>
    </div>
  
</template>
