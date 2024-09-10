<template>
  <form @submit.prevent="handleSearch" class="hidden md:flex flex-grow justify-center">
    <div class="w-full relative max-w-md mx-3">
      <input
        type="text"
        v-model="search"
        autocomplete="off"
        placeholder="Search..."
        class="w-full rounded-sm px-3 py-2 text-black border-none outline-none focus:ring-2 focus:ring-yellow-500"
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
import { ref } from "vue";
const search = ref<string>('');
const handleSearch = (): void => {
    console.log(search.value);
}
</script>
