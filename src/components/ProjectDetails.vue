<!-- ProjectDetailModal.vue -->
<template>
    <div v-if="project" class="modal">
      <div class="modal-content">
        <span class="close" @click="$emit('close')">&times;</span>
        <h2>{{ project.name }}</h2>
        <!-- الصورة الرئيسية الكبيرة -->
        <img :src="selectedImage" alt="Main Image" class="main-image" />
        <!-- الصور الفرعية -->
        <div class="other-images">
          <img
            v-for="(image, index) in project.images"
            :key="index"
            :src="image"
            alt="Project Image"
            @click="selectImage(image)"
            :class="{ 'active-image': image === selectedImage }"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['project'],
    data() {
      return {
        selectedImage: this.project ? this.project.main_image : '',
      };
    },
    methods: {
      selectImage(image) {
        this.selectedImage = image;
      },
    },
  };
  </script>
  
  <style>
  .modal {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    max-width: 80%;
    text-align: center;
  }
  
  .main-image {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
  
  .other-images img {
    width: 100px;
    height: auto;
    margin: 5px;
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.3s;
  }
  
  .other-images img:hover,
  .other-images img.active-image {
    opacity: 1;
  }
  
  .close {
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 30px;
    cursor: pointer;
  }
  </style>
  