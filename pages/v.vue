<script setup>
const { onLoop } = useRenderLoop();
const { $anime } = useNuxtApp();
const scRef = ref();
const camRef = ref();
const lineRef = ref();
const progress = ref(0);

const oneStep = ref(true);
const twoStep = ref(false);
const threeStep = ref(false);
const fourStep = ref(false);
const fiveStep = ref(false);

let points = [
  [0, 0.1, 0],
  [0, -1, 0],
];

// INTRO
onLoop(({ delta }) => {
  if (camRef.value.position.z > 10) {
    camRef.value.position.z -= delta * 100;
  }
});

// SCROLL
onLoop(() => {
  if (progress.value <= 0.05) {
    stepOne();
  }
  if (progress.value >= 0.1 && progress.value <= 0.4) {
    stepTwo();
  }
  if (progress.value >= 0.4 && progress.value <= 0.6) {
    stepThree();
  }
  if (progress.value >= 0.6 && progress.value <= 0.8) {
    stepFour();
  }
  if (progress.value >= 0.8 && progress.value <= 1) {
    stepFive();
  }
});
function stepOne() {
  progress.value = 0;
  oneStep.value = true;
  $anime({
    targets: camRef.value.position,
    y: 2,
    duration: 1000,
  });
}
function stepTwo() {
  progress.value = 0.2;
  twoStep.value = true;
  $anime({
    targets: camRef.value.position,
    y: -8,
    duration: 1000,
  });
}
function stepThree() {
  progress.value = 0.5;
  threeStep.value = true;
  $anime({
    targets: camRef.value.position,
    y: -18,
    duration: 1000,
  });
}
function stepFour() {
  progress.value = 0.7;
  fourStep.value = true;
  $anime({
    targets: camRef.value.position,
    y: -28,
    duration: 1000,
  });
}
function stepFive() {
  progress.value = 0.9;
  fiveStep.value = true;
  $anime({
    targets: camRef.value.position,
    y: -38,
    duration: 1000,
  });
}
/*
function scrollUp() {
  $anime({
    targets: camRef.value.position,
    y: up,
    duration: 1000,
  })
}
function scrollDown() {
  $anime({
    targets: camRef.value.position,
    y: down,
    duration: 1000,
  })
}
if (process.client) {
  window.addEventListener('wheel', function (event) {
    if (event.deltaY < 0) {
      window.addEventListener('wheel', scrollUp)
    } else if (event.deltaY > 0) {
      window.addEventListener('wheel', scrollDown)
    }
  })
})*/
console.log(oneStep);
console.log(twoStep);
console.log(threeStep);
console.log(fourStep);
console.log(fiveStep);
</script>
<template>
  <div id="app">
    <div
      class="absolute top-1/2 left-full transform -translate-x-full -translate-y-1/2 z-50 items-center"
    >
      <div
        @click="stepOne"
        class="h-4 w-4 bg-slate-500 opacity-50 rounded-full m-5 hover:opacity-90 active:opacity-100 active"
      ></div>
      <div
        @click="stepTwo"
        class="h-4 w-4 bg-slate-500 opacity-50 rounded-full m-5 hover:opacity-90 active:opacity-100"
      ></div>
      <div
        @click="stepThree"
        class="h-4 w-4 bg-slate-500 opacity-50 rounded-full m-5 hover:opacity-90 active:opacity-100"
      ></div>
      <div
        @click="stepFour"
        class="h-4 w-4 bg-slate-500 opacity-50 rounded-full m-5 hover:opacity-90 active:opacity-100"
      ></div>
      <div
        @click="stepFive"
        class="h-4 w-4 bg-slate-500 opacity-50 rounded-full m-5 hover:opacity-90 active:opacity-100"
      ></div>
    </div>
    <TresCanvas clear-color="#000000" id="canvas">
      <TresPerspectiveCamera :position="[0, 2, 200]" :fov="75" ref="camRef" />
      <ScrollControls
        v-model="progress"
        :pages="1"
        :distance="0"
        ref="scRef"
      ></ScrollControls>
      <TresAmbientLight :intensity="1" />
      <Levioso :speed="3" :floatFactor="5" :rotationFactor="0.1">
        <MouseParallax :factor="2" :ease="3" />
      </Levioso>

      <boxi :position="[-5, 1, 0]" :rotation="[0, 0.5, 0]" />
      <boxi :position="[5, 5, 0]" :rotation="[0, 0.3, 0]" />
      <line2
        ref="lineRef"
        color="#FBFBFB"
        :line-width="2"
        :position="[0, 1.25, 0]"
        :points="points"
      />
      <Precipitation
        :randomness="1"
        :speed="0.01"
        :count="150"
        :area="[75, 50, 100]"
      />
      <stars />
      <boxi :position="[-15, -1, -10]" :rotation="[0, 0.5, 0]" />
      <boxi :position="[15, -5, -8]" :rotation="[0, 0.3, 0]" />
      <boxi :position="[10, 12, -15]" :rotation="[0, 0.1, 0]" />
      <TresGridHelper :position="[0, 0, 0]" :args="[10, 10]" />
      <TresGridHelper :position="[0, -10, 0]" :args="[10, 10]" />
      <TresGridHelper :position="[0, -20, 0]" :args="[10, 10]" />
      <TresGridHelper :position="[0, -30, 0]" :args="[10, 10]" />
    </TresCanvas>
  </div>
</template>
<style scoped>
#app {
  height: 100vh;
  width: 100vw;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}
#app::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
</style>
