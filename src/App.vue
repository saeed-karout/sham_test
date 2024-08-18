<script setup>
import {RouterView} from 'vue-router'
import NavbarComponent from './components/NavbarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import UpToTopCom from './components/UpToTopCom.vue';



   
</script>

<template>
   

    <div >
        <NavbarComponent />

        <RouterView />

        <FooterComponent />

        <UpToTopCom />
    </div>
</template>
