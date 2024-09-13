<template>
  <div class="fixed flex top-0 right-0 z-50 w-full h-screen bg-black/20 overflow-hidden">
    <div
      ref="mobileForm"
      class="relative shadow-lg flex flex-col min-w-80 h-full bg-white justify-center items-center"
    >
      <button
        @click="actionClose"
        type="button"
        class="absolute top-2 -right-6 w-12 h-12 rounded-full bg-pink-600 hover:bg-black transition-opacity flex justify-center items-center"
      >
        <svg
          width="2em"
          height="2em"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
              stroke="#ffffff"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>
            <path
              d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8"
              stroke="#ffffff"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>
          </g>
        </svg>
      </button>
      <div class="py-2 overflow-hidden">
        <Search mobile />
      </div>
      <a
        href="/"
        class="animate-fadeIn p-2 font-bold text-xl hover:text-pink-600 transition-colors text-black"
        >Home</a
      >
      <a
        href="#"
        class="animate-fadeIn p-2 font-bold text-xl hover:text-pink-600 transition-colors text-black"
        >Posts</a
      >
      <a
        href="#"
        class="animate-fadeIn p-2 font-bold text-xl hover:text-pink-600 transition-colors text-black"
        >About us</a
      >
      <a
        href="#"
        class="animate-fadeIn p-2 font-bold text-xl hover:text-pink-600 transition-colors text-black"
        >Contact us</a
      >
      <a
        v-if="isAuth"
        href="#"
        class="animate-fadeIn p-2 font-bold text-xl hover:text-pink-600 transition-colors text-black"
        >Log Out</a
      >
      <a
        v-if="!isAuth"
        href="/auth/login"
        class="animate-fadeIn p-2 font-bold text-xl hover:text-pink-600 transition-colors text-black"
        >Login</a
      >
      <a
        v-if="!isAuth"
        href="/auth/register"
        class="animate-fadeIn p-2 font-bold text-xl hover:text-pink-600 transition-colors text-black"
        >Register</a
      >
    </div>
    <div @click="actionClose" class="flex w-full h-screen hover:cursor-pointer"></div>
  </div>
</template>
<script setup lang="ts">
import { gsap } from "gsap";
import Search from "./Search.vue";
import { computed, onMounted, ref } from "vue";
const mobileForm = ref<HTMLElement | null>(null);
const props = defineProps<{
  auth: boolean;
}>();

const isAuth = computed(() => props.auth);
const emit = defineEmits<{
  (e: "close"): void;
}>();

const actionClose = (): void => {
  closeEffect();
  setTimeout(() => {
    emit("close");
  }, 1000);
};

const closeEffect = () => {
  gsap.fromTo(
    mobileForm.value,
    { translateX: 0, x: 0 },
    { translateX: -320, x: 40, duration: 1 }
  );
};

onMounted(() => {
  gsap.fromTo(
    mobileForm.value,
    { translateX: -90, x: 40 },
    { translateX: 0, x: 0, duration: 1 }
  );
});
</script>
