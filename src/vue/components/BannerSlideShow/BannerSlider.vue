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
                v-if="showContent && currentSlide?.mediaId == image.mediaId"
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
const slide = ref<any[]>([
  {
    mediaId: "1sdsd",
    url:
      "https://images.pexels.com/photos/28389852/pexels-photo-28389852/free-photo-of-traditional-colorful-turkish-carpet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    header: "Hello Slider",
    intro: "Welcome to banner slide show",
    button: false,
  },
  {
    mediaId: "45687a",
    url:
      "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    header: "Hello Slider 2",
    intro: "Welcome to banner slide show 2",
    button: true,
    buttonLink: "#",
    buttonName: "Expore Now",
  },
]);

interface CurrentSlide {
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
