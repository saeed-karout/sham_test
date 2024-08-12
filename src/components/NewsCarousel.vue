<template>
  
          <h1
                  class=" text-center mt-15 text-4xl font-bold leading-10 " style="color:#B38E60;">
                  Latest News</h1>
         <hr class="my-4 mt-8 border-t-2 border-gray-300 dark:border-yellow-500 w-1/3 mx-auto">

  <div class=" w-full flex items-baseline justify-center  overflow-hidden mb-6 ">
    <div
      class="relative lg:w-[290px] lg:h-[290px] md:w-[220px] md:h-[220px] sm:w-[180px] sm:h-[180px] w-[100px] h-[100px] [transform-style:preserve-3d] animate-rotate ">
      <span v-for="(image, index) in images" :key="index" :style="{ '--i': index + 1 }" class="span-style">
        <img :src="image.src" :alt="image.alt" class="img-style" />
      </span>
    </div>
  </div>
</template>

<script setup>
const images = [
  {
    src: 'https://ashpilia-arts.com/wp-content/uploads/2021/02/20.jpg',
    alt: 'img - 1',
  },
  {
    src: 'https://kisss.cc/wp-content/uploads/2018/07/2567.jpg',
    alt: 'img - 2',
  },
  {
    src: 'https://i.ytimg.com/vi/VVA7YLHEqMY/hqdefault.jpg',
    alt: 'img - 3',
  },
  {
    src: 'https://i.ytimg.com/vi/VVA7YLHEqMY/hqdefault.jpg',
    alt: 'img - 4',
  },
  {
    src: 'https://www.shamnet.com.sa/wp-content/uploads/2016/09/قصر-الجبر-035.jpg',
    alt: 'img - 5',
  },
  {
    src: 'https://decor30.com/wp-content/uploads/2018/11/%D8%A7%D8%AD%D8%AF%D8%AB-%D8%AF%D9%8A%D9%83%D9%88%D8%B1%D8%A7%D8%AA-%D9%82%D8%B5%D9%88%D8%B1.jpg',
    alt: 'img - 6',
  },
  {
    src: 'https://decor30.com/wp-content/uploads/2018/11/%D8%AF%D9%8A%D9%83%D9%88%D8%B1%D8%A7%D8%AA-%D9%82%D8%B5%D9%88%D8%B1-%D8%A7%D9%84%D8%A7%D9%85%D8%B1%D8%A7%D8%A1-2019-500x463.jpg',
    alt: 'img - 7',
  },
  {
    src: 'https://decor30.com/wp-content/uploads/2018/11/%D8%AF%D9%8A%D9%83%D9%88%D8%B1%D8%A7%D8%AA-%D9%82%D8%B5%D9%88%D8%B1-%D8%B1%D9%87%D9%8A%D8%A8%D8%A9-500x333.jpg',
    alt: 'img - 8',
  },
]
</script>
<style scoped>
@keyframes rotate {
  0% {
    transform: perspective(1000px) rotateY(0deg);
  }
  100% {
    transform: perspective(1000px) rotateY(360deg);
  }
}

.animate-rotate {
  animation: rotate 30s linear infinite;
  
}

.span-style {
  @apply absolute top-0 left-0 w-full h-full origin-center;
  transform: rotateY(calc(var(--i) * 45deg)) translateZ(120px);
  @media (min-width: 640px) {
    transform: rotateY(calc(var(--i) * 45deg)) translateZ(216px);
  }
  @media (min-width: 768px) {
    transform: rotateY(calc(var(--i) * 45deg)) translateZ(265px);
  }
  @media (min-width: 1024px) {
    transform: rotateY(calc(var(--i) * 45deg)) translateZ(350px);
  }
}

.img-style {
  @apply absolute top-0 left-0 w-full h-full rounded-sm object-cover transition-transform duration-[2000ms];
}




</style>
