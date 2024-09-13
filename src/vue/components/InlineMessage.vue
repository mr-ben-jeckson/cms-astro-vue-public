<template>
  <div v-if="message" :class="['animate-fadeIn px-4 py-2 w-full rounded-sm border flex justify-between items-center', severityClass]">
    <span>{{ message }}</span>
    <button type="button" @click="handleClose" class="ml-2 text-lg font-bold text-current focus:outline-none">×</button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  severity: string;
  message: string;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const message = computed(() => props.message);

const severityClass = computed(() => {
  switch (props.severity) {
    case "warning":
      return 'bg-yellow-100 text-yellow-800 border-yellow-300';
    case "error":
      return 'bg-red-100 text-red-800 border-red-300';
    case "success":
      return 'bg-green-100 text-green-800 border-green-300';
    case "info":
      return 'bg-blue-100 text-blue-800 border-blue-300';
    default:
      return '';
  }
});

function handleClose() {
  emit('close');
}
</script>
