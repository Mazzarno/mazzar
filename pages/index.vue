<template>
  <div class="container"></div>
</template>

<script setup>
function handleScroll() {
  console.log(window.pageYOffset)
}
if (process.client) {
  window.addEventListener('scroll', handleScroll)
}
</script>

<style>
.container {
  height: 200vh;
}
</style>
