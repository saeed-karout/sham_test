<template>
  <div class="flex flex-col items-center justify-start h-auto w-full lg:w-64 px-3 py-5 text-[#B99269]">
    <div class="services-title p-4 text-2xl font-bold mb-6">Services</div>
    <nav class="w-full space-y-4">
      <button
        v-for="service in services"
        :key="service.id"
        @click="selectService(service)"
        :class="[
          'w-full p-4 rounded-lg opacity-80 transition-colors duration-300',
          selectedService && selectedService.id === service.id ? 'bg-gray-600 text-white' : 'bg-gray-700 hover:bg-gray-600 text-[#B99269]'
        ]"
      >
        {{ service.name }}
      </button>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    services: Array,
    selectedService: Object
  },
  emits: ['selectService'],
  methods: {
    selectService(service) {
      this.$emit('selectService', service);
    }
  },
  mounted() {
    // If there are services and no selected service, select the first service
    if (this.services.length > 0 && !this.selectedService) {
      this.selectService(this.services[0]);
    }
  }
};
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #f0f0f0;
  padding: 20px;
}
</style>
