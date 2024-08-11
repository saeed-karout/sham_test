<script setup>
import {RouterView} from 'vue-router'
import NavbarComponent from './components/NavbarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import UpToTopCom from './components/UpToTopCom.vue';



   
</script>

<template>
   

    <div class="dark:bg-[#1f2937f3] ">
        <NavbarComponent />

        <RouterView />

        <FooterComponent />

        <UpToTopCom />
    </div>
</template>
