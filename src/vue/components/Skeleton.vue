<template>
  <div>
    <svg width="100%" height="500" xmlns="http://www.w3.org/2000/svg">
      <!-- Define the gradient for the shimmering effect -->
      <defs>
        <linearGradient id="loading-gradient">
          <stop offset="0%" stop-color="#f5e4e7">
            <animate
              attributeName="offset"
              values="0;1"
              dur="2s"
              repeatCount="indefinite"
            ></animate>
          </stop>
          <stop offset="50%" stop-color="#fcedf6">
            <animate
              attributeName="offset"
              values="0.5;1.5"
              dur="2s"
              repeatCount="indefinite"
            ></animate>
          </stop>
          <stop offset="100%" stop-color="#fcd4db">
            <animate
              attributeName="offset"
              values="1;2"
              dur="2s"
              repeatCount="indefinite"
            ></animate>
          </stop>
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="100%" height="500" fill="url(#loading-gradient)"></rect>
    </svg>
  </div>
</template>
<script setup lang="ts">

</script>
