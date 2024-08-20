<template>
    <div class=" dark:bg-[#293340]">
        <div class="project-details " v-if="project">
            <!-- عنوان المشروع -->
            <h2 class="text-3xl font-bold text-[#B99269] text-center mb-4">{{ project . name }}</h2>

            <div class="flex flex-row align-middle items-start justify-between">
                <!-- الصورة الرئيسية -->
                <div class="">
                    <div class="main-image" v-if="selectedImage">
                        <img :src="selectedImage" :alt="project.name" />
                    </div>

                    <!-- معرض الصور المصغرة -->
                    <div class="thumbnail-gallery">
                        <img v-for="(image, index) in project.images" :key="index" :src="image"
                            :alt="`${project.name} - ${index + 1}`" @click="selectImage(image)"
                            :class="{ active: selectedImage === image }" />
                    </div>
                </div>


                <div>

                    <!-- وصف المشروع -->
                    <div class="w-full mt-4">
                        <p>{{ project . description }}</p>
                    </div>

                </div>
            </div>


        </div>
    </div>
</template>

<script>
    export default {
        props: {
            project: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                selectedImage: null
            };
        },
        mounted() {
            if (this.project && this.project.main_images && this.project.main_images.length > 0) {
                this.selectedImage = this.project.main_images[0];
            }
        },
        methods: {
            selectImage(image) {
                this.selectedImage = image;
            }
        }
    };
</script>

<style scoped>
    .project-details {
        display: flex;
        flex-direction: column;
        width: 75%;
        max-width: 500px;
        margin: 0 auto;

    }

    .main-image img {
        width: 100%;
        height: auto;
        border-radius: 8px;
    }

    .thumbnail-gallery {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 10px;
    }

    .thumbnail-gallery img {
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 4px;
        cursor: pointer;
        transition: opacity 0.3s ease;
    }

    .thumbnail-gallery img.active {
        opacity: 0.6;
    }

    .description {
        margin-top: 20px;
        font-size: 1rem;
        line-height: 1.5;
    }
</style>
