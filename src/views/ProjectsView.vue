<template>
    <div class="projects-page">
      <SidebarComponent :categories="categories" @filter-projects="filterProjects" />
      <ProjectListComponent :projects="projects" :selectedCategory="selectedCategory" @view-project="openProjectModal" />
      
      <ProjectDetailModal v-if="selectedProject" :project="selectedProject" @close="closeProjectModal" />
    </div>
  </template>
  <script ->
  export default {
    components: {
      SidebarComponent,
      ProjectListComponent,
      ProjectDetailModal
    },
    data() {
      return {
        categories: ['أبنية', 'شقق ذكية', 'عمارة', 'ديكور'],
        projects: [],
        selectedCategory: null,
        selectedProject: null
      };
    },
    created() {
      this.loadProjects();
    },
    methods: {
      async loadProjects() {
        try {
          const response = await fetch('/projects.json');
          this.projects = await response.json();
        } catch (error) {
          console.error('Error loading projects:', error);
        }
      },
      filterProjects(category) {
        this.selectedCategory = category;
      },
      openProjectModal(project) {
        this.selectedProject = project;
      },
      closeProjectModal() {
        this.selectedProject = null;
      }
    }
  };
</script>

  <style>
  .projects-page {
    display: flex;
  }
  </style>
  