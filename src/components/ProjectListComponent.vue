<template>
    <div class="project-list">
      <div v-for="project in filteredProjects" :key="project.id" class="project-item" @click="$emit('view-project', project)">
        <img :src="project.main_image" :alt="project.name" />
        <h3>{{ project.name }}</h3>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['projects', 'selectedCategory'],
    computed: {
      filteredProjects() {
        if (this.selectedCategory) {
          return this.projects.filter(project => project.category === this.selectedCategory);
        }
        return this.projects;
      }
    }
  };
  </script>
  