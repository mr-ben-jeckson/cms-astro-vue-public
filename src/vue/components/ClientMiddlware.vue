<template>
  <div>
    <div v-if="isLoading" class="fixed z-50 w-full h-full">
        <div class="flex h-screen bg-pink-600 w-full">
        </div>
    </div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, computed, watch } from 'vue';
import { store } from '@/vue/store/store';
import authMiddleware from "@/http/middleware";
const isLoading = ref<boolean>(true);
interface Props {
    path?: string;
}
const props = withDefaults(defineProps<Props>(), {
  path: '/',
});
onMounted(() => {
    const token = computed(() => store.state.token);
    authMiddleware(props.path, token.value);
    isLoading.value = false;
})
</script>