<script setup lang="ts">
import { provide, useAttrs, onMounted } from 'vue';
import { store, addPersistence } from '@/vue/store/store';

// Add persistence to the store
onMounted(() => {
  addPersistence(store);
});

// Provide the store to child components
provide('store', store);

// Get all attributes passed to this component
const attrs = useAttrs();
</script>

<template>
  <!-- Use a div as the root element and spread the attrs -->
  <div v-bind="attrs">
    <slot></slot>
  </div>
</template>
