<template>
    <div>
        
    </div>
</template>
<script setup lang="ts">
import Slide from './Slide.vue';
import { ref } from 'vue';
const slide = ref<any []>([
    {
        url: "",
        header: "",
        intro: "",
        button: true,
        buttonName: "",
        buttonLink: ""
    }
])
</script>