<script setup>
const { onLoop } = useRenderLoop()
const { $anime } = useNuxtApp()
const scRef = ref()
const camRef = ref()
const lineRef = ref()
const progress = ref(0)
const stepone = true
const steptwo = false
const stepthree = false
const stepfour = false
const stepfive = false

let points = [
  [0, 0.1, 0],
  [0, -1, 0],
]

// INTRO
onLoop(({ delta }) => {
  if (camRef.value.position.z > 10) {
    camRef.value.position.z -= delta * 100
  }
})

onLoop(({ delta }) => {
  if (lineRef.value) {
    points = [
      [0, delta * 100, 0],
      [0, -delta * 100, 0],
    ]
  }
})

// SCROLL
onLoop(() => {
  stepOne()
  stepTwo()
  stepThree()
  stepFour()
  stepFive()
})
function stepOne() {
  if (progress.value <= 0.15) {
    $anime({
      targets: camRef.value.position,
      y: 2,
      duration: 1000,
    })
  }
}
function stepTwo() {
  if (progress.value >= 0.2 && progress.value <= 0.4) {
    $anime({
      targets: camRef.value.position,
      y: -8,
      duration: 1000,
    })
  }
}
function stepThree() {
  if (progress.value >= 0.4 && progress.value <= 0.6) {
    $anime({
      targets: camRef.value.position,
      y: -18,
      duration: 1000,
    })
  }
}
function stepFour() {
  if (progress.value >= 0.6 && progress.value <= 0.8) {
    $anime({
      targets: camRef.value.position,
      y: -28,
      duration: 1000,
    })
  }
}
function stepFive() {
  if (progress.value >= 0.8 && progress.value <= 1) {
    $anime({
      targets: camRef.value.position,
      y: -38,
      duration: 1000,
    })
  }
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
</script>
<template>
  <div id="app">
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
}
</style>
