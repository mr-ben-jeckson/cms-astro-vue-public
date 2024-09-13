<template>
  <div>
    <nav
      ref="navForm"
      class="flex items-center justify-between p-4 bg-pink-600 text-white"
    >
      <!-- Left Side: Logo -->
      <div class="flex items-center">
        <a href="/" title="home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2.1em"
            height="3em"
            viewBox="0 0 256 366"
          >
            <path
              d="M182.022 9.147c2.982 3.702 4.502 8.697 7.543 18.687L256 246.074a276.5 276.5 0 0 0-79.426-26.891L133.318 73.008a5.63 5.63 0 0 0-10.802.017L79.784 219.11A276.5 276.5 0 0 0 0 246.04L66.76 27.783c3.051-9.972 4.577-14.959 7.559-18.654a24.54 24.54 0 0 1 9.946-7.358C88.67 0 93.885 0 104.314 0h47.683c10.443 0 15.664 0 20.074 1.774a24.55 24.55 0 0 1 9.95 7.373"
            ></path>
            <path
              fill="#ff5d01"
              d="M189.972 256.46c-10.952 9.364-32.812 15.751-57.992 15.751c-30.904 0-56.807-9.621-63.68-22.56c-2.458 7.415-3.009 15.903-3.009 21.324c0 0-1.619 26.623 16.898 45.14c0-9.615 7.795-17.41 17.41-17.41c16.48 0 16.46 14.378 16.446 26.043l-.001 1.041c0 17.705 10.82 32.883 26.21 39.28a35.7 35.7 0 0 1-3.588-15.647c0-16.886 9.913-23.173 21.435-30.48c9.167-5.814 19.353-12.274 26.372-25.232a47.6 47.6 0 0 0 5.742-22.735c0-5.06-.786-9.938-2.243-14.516"
            ></path>
          </svg>
        </a>
      </div>

      <!-- Center: Search Bar (visible only on md and up) -->
      <div class="overflow-hidden w-full">
        <Search />
      </div>

      <!-- Right Side: Navigation Links -->
      <div class="hidden md:flex space-x-8 text-lg">
        <a href="/" title="Home" class="hover:text-yellow-500 animate-fadeIn transition-colors">Home</a>
        <a href="#" class="hover:text-yellow-500 animate-fadeIn transition-colors">Posts</a>
        <a href="#" class="hover:text-yellow-500 animate-fadeIn transition-colors">About</a>
        <a href="#" class="hover:text-yellow-500 animate-fadeIn transition-colors">Contact</a>
        <a
          :key="Date.now() + 'login'"
          v-if="noAuthCheck"
          href="/auth/login"
          title="Login"
          class="hover:text-yellow-500 transition-colors animate-fadeIn"
          >Login</a
        >
        <a
          :key="Date.now() + 'register'"
          v-if="noAuthCheck"
          href="/auth/register"
          class="hover:text-yellow-500 transition-colors animate-fadeIn"
          >Register</a
        >
        <a
          @click="logOut"
          :key="Date.now() + 'logout'"
          v-if="!noAuthCheck"
          href="/auth/register"
          class="hover:text-yellow-500 transition-colors animate-fadeIn"
          >Logout</a
        >
      </div>

      <!-- Mobile Menu Toggle -->
      <div @click="showMobileMenu" class="flex md:hidden hover:cursor-pointer animate-fadeIn">
        <svg
          width="2em"
          height="2em"
          viewBox="0 -5.5 21 21"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          fill="#ffffff"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <title>menu_list [#ffffff]</title>
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-179.000000, -205.000000)"
                fill="#ffffff"
              >
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <path
                    d="M123,55 L144,55 L144,53 L123,53 L123,55 Z M123,47 L144,47 L144,45 L123,45 L123,47 Z M123,51 L144,51 L144,49 L123,49 L123,51 Z"
                    id="menu_list-[#ffffff]"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </nav>
    <!-- Mobile Menu -->
    <MobileNav v-if="isMobileNav" :auth="token ? true : false" @close="showMobileMenu" />
  </div>
</template>
<script setup lang="ts">
import Search from "./Search.vue";
import MobileNav from "./MobileNav.vue";
import { gsap } from "gsap";
import { ref, onMounted, computed } from "vue";
import { store } from "@/vue/store/store";
const navForm = ref<HTMLElement | null>(null);
const noAuthCheck = ref<boolean>(true);
const token = computed(() => store.state.token);
const logOut = (): void => {
  store.dispatch("logout");
};
const isMobileNav = ref<boolean>(false);
const showMobileMenu = (): void => {
  isMobileNav.value = !isMobileNav.value;
};
onMounted(() => {
  if (token.value) {
    noAuthCheck.value = false;
  }
  gsap.fromTo(navForm.value, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 2 });
  window.addEventListener("resize", (): void => {
    isMobileNav.value = false;
  });
});
</script>
