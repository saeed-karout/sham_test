<template>
  <div class="projects-view flex flex-col lg:flex-row mt-24">
    <!-- تمرير البيانات إلى Sidebar -->
    <SidebarProject :services="services" :selectedService="selectedService" @selectService="selectService" />
    
    <main class="flex-grow p-4">
      <h2 class="text-4xl font-bold text-[#B99269] text-center mb-6">Projects</h2>
      <ProjectListComponent :selectedService="selectedService" @view-project="viewProject" />
    </main>
    
    <!-- نافذة منبثقة لمشروع التفاصيل -->
    <div v-if="selectedProject" class="modal-overlay" @click.self="closeProjectDetails">
      <div class="modal-content">
        <button class="close-button pr-2 dark:text-white hover:translate-transform rotate-90 hover:text-red-400 dark:hover:text-red-400" @click="closeProjectDetails">×</button>
        <ProjectDetailsComponent :project="selectedProject" />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectListComponent from '@/components/projects/ProjectListComponent.vue';
import ProjectDetailsComponent from '@/components/projects/ProjectDetails.vue';
import SidebarProject from '@/components/projects/SidebarProject.vue';
import servicesData from '../projects.json';

export default {
  components: {
    ProjectListComponent,
    ProjectDetailsComponent,
    SidebarProject
  },
  data() {
    return {
      services: servicesData,
      selectedService: null,
      selectedProject: null
    };
  },
  methods: {
    selectService(service) {
      this.selectedService = service;
      this.selectedProject = null;
    },
    viewProject(project) {
      this.selectedProject = project;
    },
    closeProjectDetails() {
      this.selectedProject = null;
    }
  },
  mounted() {
    if (!Array.isArray(this.services) || this.services.length === 0) {
      console.error('No services found or data structure is incorrect.');
    }
  }
}
</script>

<style scoped>
.projects-view {
  display: flex;
  height: 100vh;
}

main {
  display: flex;
  flex-direction: column;
  padding: 1rem; /* Add padding to main content */
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  
  border-radius: 8px;
  width: 90%;
  max-width: 600px; /* Adjust max width to fit better on smaller screens */
  position: relative;
  top: 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add shadow for better visibility */
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.5rem; /* Adjust font size for close button */
  cursor: pointer;
  color: #333; /* Adjust color if needed */
}

/* Responsive adjustments */
@media (max-width: 640px) { /* Small screens */
  .modal-content {
    width: 95%;
    max-width: 500px; /* Smaller max width on very small screens */
  }

  .close-button {
    font-size: 1.25rem; /* Smaller close button on small screens */
  }
}

@media (min-width: 1024px) { /* Large screens */
  .modal-content {
    max-width: 800px; /* Larger max width for large screens */
  }
}
</style>
