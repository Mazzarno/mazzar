<template>
  <div class="scroll_container">
    <div class="section">
      <p>Section 1</p>
    </div>
    <div class="section">
      <p>Section 2</p>
    </div>
    <div class="section">
      <p>Section 3</p>
    </div>
    <div class="section">
      <p>Section 4</p>
    </div>
    <div class="section">
      <p>Section 5</p>
    </div>
    <div class="section">
      <p>Section 6</p>
    </div>
    <div class="section">
      <p>Section 7</p>
    </div>
    <div class="section">
      <p>Section 8</p>
    </div>
    <div class="section">
      <p>Section 9</p>
    </div>
    <div class="section">
      <p>Section 10</p>
    </div>
    <div class="section">
      <p>Section 11</p>
    </div>
    <div class="section">
      <p>Section 12</p>
    </div>
    <div class="section">
      <p>Section 13</p>
    </div>
    <div class="section">
      <p>Section 14</p>
    </div>
    <div class="section">
      <p>Section 15</p>
    </div>
    <div class="section">
      <p>Section 16</p>
    </div>
    <div class="section">
      <p>Section 17</p>
    </div>
    <div class="section">
      <p>Section 18</p>
    </div>
  </div>
</template>

<script setup>
function handleScroll() {
  console.log(window.pageYOffset)
}
if (process.client) {
  window.addEventListener('scroll', handleScroll)
}
</script>

<style scoped>
.scroll_container {
  overflow: auto;
  scroll-snap-type: both mandatory;
  width: 35vw;
  height: 30vh;
  white-space: nowrap; /* Set inline elemens to not be wrapped, ie, stay on the x-axis */
}

.section {
  width: 30vw;
  height: 30vh;
  scroll-snap-align: start;
}

/* Contrive some sections to go left to right */

.section:nth-of-type(4n),
.section:nth-of-type(4n + 1),
.section:nth-of-type(4n + 2) {
  display: inline-block;
}

/* Make sections stand out.*/

.scroll_container > div:nth-of-type(odd).section {
  background: pink;
}

.scroll_container > div:nth-of-type(even).section {
  background: wheat;
}
</style>
