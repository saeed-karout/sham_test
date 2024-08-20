<template>
  <div v-if="selectedService">
    <h2 class="text-2xl font-bold mb-4 text-[#B99269] text-center">
      {{ selectedService.name }}
    </h2>
    <div class="projects-container">
      <div
        v-for="project in selectedService.projects"
        :key="project.id"
        class="project-item cursor-pointer transition-transform duration-200"
        @click="$emit('view-project', project)"
      >
        <div class="project-content">
          <img 
            class="project-image" 
            :src="project.main_images[0]" 
            :alt="project.name" 
          />
          <h3 class="project-title text-xl text-center">
            {{ project.name }}
          </h3>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    selectedService: {
      type: Object,
      default: null
    }
  },
  emits: ['view-project']
};
</script>

<style scoped>
.projects-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 10px; /* Add padding if needed */
}

.project-item {
  flex: 1 1 calc(100% - 20px); /* Default to full width with margins */
  max-width: calc(100% - 20px); /* Default to full width with margins */
  transition: transform 0.3s ease;
  box-sizing: border-box; /* Ensure padding/margins are included in width */
}

.project-content {
  width: 100%;
}

.project-image {
  width: 100%;
  height: auto; /* Adjust height to auto to maintain aspect ratio */
  max-height: 200px; /* Limit maximum height */
  object-fit: cover;
  border-radius: 8px;
}

.project-title {
  margin-top: 8px;
  font-size: 1rem; /* Adjust font size for smaller screens */
}

.project-item:hover {
  transform: scale(1.05);
}

/* Media Queries for different screen sizes */
@media (min-width: 640px) { /* Small screens and up */
  .project-item {
    flex: 1 1 calc(50% - 20px); /* 2 items per row */
    max-width: calc(50% - 20px); /* 2 items per row */
  }
}

@media (min-width: 768px) { /* Medium screens and up */
  .project-item {
    flex: 1 1 calc(33.333% - 20px); /* 3 items per row */
    max-width: calc(33.333% - 20px); /* 3 items per row */
  }
}

@media (min-width: 1024px) { /* Large screens and up */
  .project-item {
    flex: 1 1 calc(25% - 20px); /* 4 items per row */
    max-width: calc(25% - 20px); /* 4 items per row */
  }
}
</style>
