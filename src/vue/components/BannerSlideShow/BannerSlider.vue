<template>
  <div class="w-full h-[500px] overflow-hidden">
    <div ref="myCarousel" class="w-full h-full overflow-hidden">
      <Carousel
        :autoplay="5000"
        :wrap-around="true"
        :pauseAutoplayOnHover="true"
        @slide-start="start"
        @slide-end="runContentEffect"
        :transition="500"
        class="w-full h-full"
      >
        <Slide v-for="(image, index) in slide" :key="index">
          <div class="carousel__item h-[500px] w-full">
            <div class="relative w-full h-full">
              <img
                :src="image.url"
                class="w-full h-full object-cover"
                alt="Slide Image"
              />
              <SlideContent
                v-if="showContent && currentSlide.key == image.key"
                :header="currentSlide?.header"
                :intro="currentSlide?.intro"
                :button="currentSlide?.button"
                :buttonName="currentSlide?.buttonName"
                :buttonLink="currentSlide?.buttonLink"
              />
              <div class="absolute z-10 bg-black/20 top-0 right-0 w-full h-full"></div>
            </div>
          </div>
        </Slide>
        <template #addons>
          <Navigation class="z-30" />
          <Pagination class="absolute z-30 bottom-0 justify-center items-start" />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import SlideContent from "./SlideContent.vue";
import "vue3-carousel/dist/carousel.css";
import { gsap } from "gsap";
import { ref, onMounted } from "vue";
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";
const myCarousel = ref<HTMLElement | null>();
const props = defineProps<{
  slideshow: CurrentSlide[]
}>()
const slide = ref<CurrentSlide[]>(props.slideshow);
interface CurrentSlide {
  id: number;
  key: string;
  mediaId: string;
  url: string;
  header: string;
  intro: string;
  button?: boolean;
  buttonName?: string;
  buttonLink?: string;
}

const currentSlide = ref<CurrentSlide>();
const showContent = ref<boolean>(false);
const start = () => {
  showContent.value = false;
};
const runContentEffect = (e: { currentSlideIndex: number }): void => {
  setTimeout(() => {
    currentSlide.value = slide.value[e.currentSlideIndex];
    console.log(e.currentSlideIndex);
    showContent.value = true;
  }, 1000);
};
onMounted(() => {
  showContent.value = true;
  currentSlide.value = slide.value[0];
  gsap.fromTo(
    myCarousel.value,
    {
      opacity: 0,
      scaleX: 0.7, 
      scaleY: 0.7,
    },
    {
      opacity: 1,
      scaleX: 1,
      scaleY: 1,
      ease: 'power3.out', 
      duration: 1.2 
    }
  );
});
</script>
