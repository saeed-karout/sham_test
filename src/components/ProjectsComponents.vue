<template>

  <div >


    <div class="text-center pt-20  ">
      <h2 class="text-3xl font-bold leading-tight sm:text-4xl xl:text-5xl" style="color: #B99269;">
        Our Projects
      </h2>
                     <hr class="my-4 mt-8 border-t-2 border-gray-300 dark:border-yellow-500 w-1/3 mx-auto">

    </div>
  
    <section class="flex flex-col lg:h-vh justify-center items-center">
      <div class="flex overflow-hidden w-full max-w-screen-lg relative">
        <div class="flex transition-transform duration-800" :style="{ transform: `translateX(-${currentIndex * 80 / imagesToShow}%)` }">
          <div
            v-for="(image, index) in extendedImages"
            :key="index"
            class="relative flex flex-col items-center m-1 transition ease-in-out duration-500 shrink-0 w-1/6 "
          >
            <article
              class="mx-auto rounded-3xl overflow-hidden bg-cover ring-2 ring-inset ring-white/50 bg-center min-h-100 relative transform duration-500 group"
              :style="{ backgroundImage: `url(${image.src})` }"
            >
              <div class="relative h-full group-hover:bg-opacity-0 min-h-150 flex flex-wrap flex-col pt-[30rem] md:pt-[22rem] transform duration-500">
                <div class="group-hover:bg-black/30 duration-500 group-hover:backdrop-blur p-8 lg:p-10 h-full justify-end flex flex-col">
                  <p class="opacity-0 text-white text-sm 2xl:text-lg group-hover:opacity-80 transform duration-500">
                    {{ image.description }}
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
        <button @click="prevSlide" class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 rounded-full z-10">‹</button>
        <button @click="nextSlide" class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 rounded-full z-10">›</button>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

  
        
    



const images = [
  {
    src: "https://images.unsplash.com/photo-1530035415911-95194de4ebcc?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Immerse yourself in a seamless experience where every touchpoint anticipates your needs.",
  },
  {
    src: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Engage with a platform where interaction is intuitive, ensuring your journey is fluid and responsive.",
  },
  {
    src: "https://images.unsplash.com/photo-1586996292898-71f4036c4e07?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Discover our commitment to thoughtful design, prioritizing accessibility and user satisfaction.",
  },
  {
    src: "https://images.unsplash.com/photo-1522775417749-29284fb89f43?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Experience innovation at every step, with forward-thinking solutions designed to enhance your daily interactions.",
  },
  {
    src: "https://i.pinimg.com/564x/34/65/b8/3465b890b11571e2c876ae74dc1b3139.jpg",
    description: "Join us in embracing sustainability, where design and functionality meet eco-conscious decisions.",
  },
  {
    src: "https://images.unsplash.com/photo-1530035415911-95194de4ebcc?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Immerse yourself in a seamless experience where every touchpoint anticipates your needs.",
  },
  {
    src: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Engage with a platform where interaction is intuitive, ensuring your journey is fluid and responsive.",
  },
  {
    src: "https://images.unsplash.com/photo-1586996292898-71f4036c4e07?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Discover our commitment to thoughtful design, prioritizing accessibility and user satisfaction.",
  },
  {
    src: "https://images.unsplash.com/photo-1522775417749-29284fb89f43?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Experience innovation at every step, with forward-thinking solutions designed to enhance your daily interactions.",
  },
  {
    src: "https://i.pinimg.com/564x/34/65/b8/3465b890b11571e2c876ae74dc1b3139.jpg",
    description: "Join us in embracing sustainability, where design and functionality meet eco-conscious decisions.",
  }
];

const imagesToShow = 4;
const currentIndex = ref(0);

// إنشاء قائمة ممتدة من الصور لتكرارها في البداية والنهاية
const extendedImages = computed(() => {
  return [
    ...images, ...images.slice(0, imagesToShow),

      

  ];
});

const nextSlide = () => {
  if (currentIndex.value < images.length) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0;
  }
};

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = images.length - 1;
  }
};

onMounted(() => {
  setInterval(() => {
    nextSlide();
  }, 5000);
});
</script>

<style scoped>
    #new-features {
    position: relative;
  }
  #new-features::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('@/assets/bg.png');
    background-size: contain;
    background-repeat: repeat;
    background-position: inherit;
    opacity: 3%;  /* درجة الشفافية هنا */
    z-index: -1;   /* للتأكد من أن الخلفية تبقى خلف المحتوى */
  }
</style>
