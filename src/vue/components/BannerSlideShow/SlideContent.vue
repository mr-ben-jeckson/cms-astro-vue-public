<template>
  <div
    class="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white"
  >
    <h1 ref="typingText" class="text-4xl md:text-6xl font-bold mb-2">{{ header }}</h1>
    <p class="text-xl md:text-2xl font-light animate-fadeIn">{{ intro }}</p>
  </div>
</template>
<script setup lang="ts">
import SplitType from 'split-type';
import { ref, computed, onMounted } from "vue";
import { gsap } from "gsap";
import "vue3-carousel/dist/carousel.css";
interface Props {
  header: string;
  intro: string;
  button?: boolean;
  buttonName?: string;
  buttonLink?: string;
}
const props = defineProps<Props>();
const items = computed(() => props);
const typingText = ref<HTMLElement | null>(null);
const { header, intro, button, buttonName, buttonLink } = items.value;
onMounted(() => {
  if (typingText.value) {
    const text = new SplitType(typingText.value, { types: 'chars' });
    gsap.from(text.chars, {
      opacity: 0,
      y: 10,
      stagger: 0.05,  // Typing speed
      ease: 'power4.out',
    });
  }
})
</script>
