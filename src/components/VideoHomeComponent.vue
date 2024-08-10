<template>
  <div class="relative h-screen z-20">
    <video autoplay loop muted class="absolute inset-0 w-full h-full object-cover z-[-1]">
      <source src="/video2.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>

    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
      <div class="mx-auto max-w-2xl py-56 sm:py-48 lg:py-56">
        <div class="text-center">
          <div class="text-container">
            <transition name="fade">
              <h1 v-if="showText" key="text" class="text-4xl font-semibold tracking-tight sm:text-6xl fade-text">
                {{ currentText }}
              </h1>
            </transition>
          </div>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a href="#" class="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" style="background-color: #314351; color: #B99269;">
              Get started
            </a>
            <a href="#" class="text-sm font-semibold leading-6 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  setup() {
    const texts = [
     "We are Sham Contracting",
      "We are a Leading Real Estate Developer",
      "We are transforming Lifestyles"
    ];

    const currentTextIndex = ref(0);
    const currentText = ref(texts[currentTextIndex.value]);
    const showText = ref(true);

    onMounted(() => {
      const intervalId = setInterval(() => {
        showText.value = false;
        setTimeout(() => {
          currentTextIndex.value = (currentTextIndex.value + 1) % texts.length;
          currentText.value = texts[currentTextIndex.value];
          showText.value = true;
        }, 1000); // نصف ثانية لتخفيف النص الحالي
      }, 5000);

      onUnmounted(() => {
        clearInterval(intervalId);
      });
    });

    return {
      currentText,
      showText,
    };
  },
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.fade-text {
  color: #ffffff;
  text-shadow: 1px 5px 4px #314351;
}

/* تثبيت ارتفاع النص */
.text-container {
  min-height: 4rem; /* اضبط هذا الارتفاع بناءً على حجم النص */
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
