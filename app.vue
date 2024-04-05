<template>
  <div id="app">
    <div class="absolute top-0 w-full z-50">
      <nuxtLink to="/">
        <button class="m-5 p-5 bg-white bg-opacity-20 rounded-2xl">
          <p>Accueil</p>
        </button>
      </nuxtLink>
      <nuxtLink to="/house">
        <button class="m-5 p-5 bg-white bg-opacity-20 rounded-2xl">
          <p>House</p>
        </button>
      </nuxtLink>
      <nuxtLink to="/space">
        <button class="m-5 p-5 bg-white bg-opacity-20 rounded-2xl">
          <p>Space</p>
        </button>
      </nuxtLink>
      <nuxtLink to="/exp">
        <button class="m-5 p-5 bg-white bg-opacity-20 rounded-2xl">
          <p>EXP</p>
        </button>
      </nuxtLink>
      <nuxtLink to="/v">
        <button class="m-5 p-5 bg-white bg-opacity-20 rounded-2xl">
          <p>v</p>
        </button>
      </nuxtLink>
    </div>
    <NuxtPage></NuxtPage>
  </div>
</template>
<style scoped>
#app {
  height: 100vh;
  width: 100vw;
}
</style>
