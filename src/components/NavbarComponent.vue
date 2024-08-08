<template>
    <header :class="headerClass" class="fixed inset-x-0 top-0 z-50 transition-all px-8 duration-300">
      <nav class="flex items-center justify-between p-3 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="/" class="min-w-40">
            <span class="sr-only">S.N.C Company</span>
            <img src="@/assets/logosham.svg" width="90" alt="Company Logo" />
          </a>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-16">
          <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-md font-semibold leading-6  text-gray-900 hover:#314351" >
            {{ item.name }}
          </a>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end gap-6">
          <div>
            <button @click="toggleDarkMode" class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              <span v-if="isDarkMode" class="sr-only">Disable dark mode</span>
              <span v-else class="sr-only">Enable dark mode</span>
              <template v-if="isDarkMode">
                <SunIcon class="h-6 w-6" aria-hidden="true" />
              </template>
              <template v-else>
                <MoonIcon class="h-6 w-6" aria-hidden="true" />
              </template>
            </button>
          </div>
          <div>
            <button @click="toggleLanguage" class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              {{ language }}
            </button>
          </div>
        </div>
      </nav>
      <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50" />
        <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a href="/" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto" src="../assets/logo.png" alt="Your Company " />
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
              </div>
              <div class="py-6">
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
    <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
      <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { Dialog, DialogPanel } from '@headlessui/vue'
  import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/vue/24/outline'
  
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Service', href: '/service' },
    { name: 'About us', href: '/about' },
    { name: 'News', href: '/news' },
    { name: 'Contact us', href: '/contact' }
  ]
  
  const mobileMenuOpen = ref(false)
  const isDarkMode = ref(false)
  const language = ref('EN')
  const headerClass = ref('')
  
  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
  
  const toggleLanguage = () => {
    language.value = language.value === 'EN' ? 'AR' : 'EN'
  }
  
  // Function to handle scroll and update header class
  const handleScroll = () => {
    if (window.scrollY > 100) {
      headerClass.value = 'bg-white shadow-lg'
    } else {
      headerClass.value = ''
    }
  }
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })
  
  </script>
  

  <style scoped>
header.bg-white {
  background-color: #f8f9fa; /* لون الخلفية أبيض تلجي */
}

header.shadow-lg {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>
