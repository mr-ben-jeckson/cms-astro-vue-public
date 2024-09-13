<template>
  <form ref="searchForm" @submit.prevent="handleSearch" class="flex-grow justify-center" :class="[isMobile ? 'flex' : 'hidden md:flex']">
    <div class="w-full relative max-w-md mx-3">
      <input
        type="text"
        v-model="search"
        autocomplete="off"
        placeholder="Search..."
        class="w-full rounded-sm px-3 py-2 outline-none text-black focus:ring-2 focus:ring-yellow-500"
        :class="[isMobile ? 'border border-pink-600 focus:border-none' : 'border-none']"
      />
      <button v-if="search" type="submit" class="absolute right-5 top-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 16 16"
        >
          <path
            fill="#e58080"
            d="M12.048 11.074L15 14.025l-.975.975l-2.951-2.952A6.205 6.205 0 0 1 1 7.202A6.205 6.205 0 0 1 7.203 1a6.205 6.205 0 0 1 4.845 10.074m-1.382-.512a4.823 4.823 0 0 0-3.463-8.184a4.823 4.823 0 0 0-4.825 4.825a4.823 4.823 0 0 0 8.184 3.463zM8.015 4.567a1.379 1.379 0 1 0 1.823 1.824a2.758 2.758 0 1 1-5.392.812a2.757 2.757 0 0 1 3.569-2.636"
          ></path>
        </svg>
      </button>
    </div>
  </form>
</template>
<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { gsap } from 'gsap';
const search = ref<string>('');
const searchForm = ref<any>(null);
const props = defineProps<{
  mobile?: boolean
}>();
const isMobile = computed(() => props.mobile);
const handleSearch = (): void => {
    console.log(search.value);
}
onMounted(() => {
    if(isMobile.value) {
      gsap.fromTo(searchForm.value, { translateX: -90, x: 40, opacity: 0.5 }, { translateX: 0, x: 0, opacity: 1, duration: 1 })
    } else {
      gsap.fromTo(searchForm.value, { translateY: 90, y: -40, opacity: 0 }, { translateY: 0, y: 0, opacity: 1, duration: 2 })
    }
})
</script>
