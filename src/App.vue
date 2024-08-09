<script setup>
    import {
        RouterView
    } from 'vue-router'
    import NavbarComponent from './components/NavbarComponent.vue';
    import FooterComponent from './components/FooterComponent.vue';
    import LandingScreen from '@/components/LandingScreen.vue';



    import {
        ref,
        onMounted
    } from 'vue';
import UpToTopCom from './components/UpToTopCom.vue';



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

    <div v-else class=" dark:bg-gray-800 dark:opacity-80">
        <NavbarComponent />

        <RouterView />

        <FooterComponent />

        <UpToTopCom />
    </div>
</template>
