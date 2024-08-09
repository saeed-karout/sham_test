<template>
  <header :class="headerClass" class="fixed inset-x-0 top-0 z-50 transition-all duration-300">
    <nav class="flex items-center justify-between p-3 lg:px-8 px-8 dark:bg-gray-800" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="/" class="min-w-40">
          <span class="sr-only">S.N.C Company</span>
          <img :src="logoSrc" width="90" alt="Company Logo" />
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-16">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          :class="['text-md font-semibold leading-6 hover:text-[#314351] ', isActive(item.href) ? 'text-[#B99269] dark:text-[#B99269]' : 'text-gray-900 dark:text-gray-100']"
        >
          {{ item.name }}
        </a>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end gap-6">
        <div>
          <button @click="darkModeStore.toggleDarkMode" class="text-gray-700 hover:text-gray-900  dark:text-[#B99269]">
            <span v-if="darkModeStore.isDarkMode" class="sr-only">Disable dark mode</span>
            <span v-else class="sr-only">Enable dark mode</span>
            <template v-if="darkModeStore.isDarkMode">
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

    <!-- قائمة الجوال -->
    <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <transition
        name="slide-fade"
        mode="out-in"
      >
        <DialogPanel v-if="mobileMenuOpen" class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a href="/" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto" :src="logoSrc" alt="Company Logo" />
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-[#B99269] dark:text-[#B99269]" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10 dark:divide-gray-700">
              <div class="space-y-2 py-6">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  :class="['-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 dark:hover:bg-gray-800', isActive(item.href) ? 'bg-gray-200 dark:bg-gray-700 dark:text-[#B99269]' : 'dark:text-[#B99269]']"
                >
                  {{ item.name }}
                </a>
              </div>
              <div class="py-6 flex justify-between">
                <button @click="darkModeStore.toggleDarkMode" class="text-gray-700 hover:text-gray-900 dark:text-[#B99269] dark:hover:text-white">
                  <span v-if="darkModeStore.isDarkMode" class="sr-only">Disable dark mode</span>
                  <span v-else class="sr-only">Enable dark mode</span>
                  <template v-if="darkModeStore.isDarkMode">
                    <SunIcon class="h-6 w-6" aria-hidden="true" />
                  </template>
                  <template v-else>
                    <MoonIcon class="h-6 w-6" aria-hidden="true" />
                  </template>
                </button>
                <button @click="toggleLanguage" class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  {{ language }}
                </button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </transition>
    </Dialog>
  </header>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useDarkModeStore } from '@/stores/useDarkModeStore'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/vue/24/outline'
import logoLight from '@/assets/logo_light.svg';
import logoDark from '@/assets/logosham.svg';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Service', href: '/service' },
  { name: 'About us', href: '/about' },
  { name: 'News', href: '/news' },
  { name: 'Contact us', href: '/contact' }
]

const mobileMenuOpen = ref(false)
const language = ref('EN')
const headerClass = ref('')

const darkModeStore = useDarkModeStore()

const logoSrc = computed(() => darkModeStore.isDarkMode ? logoLight : logoDark)

const isActive = (href) => window.location.pathname === href

// وظيفة لتغيير فئة الرأس (header) عند التمرير
const handleScroll = () => {
  if (window.scrollY > 100) {
    headerClass.value = 'bg-white dark:bg-gray-800 shadow-lg'
  } else {
    headerClass.value = ''
  }
}

onMounted(() => {
  darkModeStore.loadDarkModePreference() // تحميل التفضيل عند التحميل الأول للصفحة
  window.addEventListener('scroll', handleScroll)
})
</script>

<style scoped>
header.bg-white {
  background-color: #f8f9fa;
}

header.shadow-lg {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
