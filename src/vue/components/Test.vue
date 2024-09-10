<template>
  <div class="w-full">
    <div class="w-full flex justify-center items-center mb-8">
      <h3 class="flex justify-between items-center max-w-md text-gray-400 text-3xl">Hello Vue Lover</h3>
    </div>
    <div class="w-full flex justify-center items-center">
      <div class="flex justify-between items-center max-w-md">
        <button
          @click="remove"
          class="bg-red-600 text-sm text-white p-2 hover:bg-black/20"
          :disabled="state == 0"
        >
          -
        </button>
        <p class="px-2 text-xl my-auto text-black font-semibold">{{ state }}</p>
        <button @click="add" class="bg-blue-600 text-sm text-white p-2 hover:bg-black/20">
          +
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const state = ref<number>(0);
const add = (): void => {
  state.value += 1;
};
const remove = (): void => {
  if (state.value > 0) state.value -= 1;
};
</script>
