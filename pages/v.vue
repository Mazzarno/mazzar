<script setup>
const { onLoop } = useRenderLoop()
const { $anime } = useNuxtApp()
const scRef = ref()
const camRef = ref()
const progress = ref(0)
onLoop(({ delta }) => {
  if (camRef.value.position.z > 10) {
    camRef.value.position.z -= delta * 100
  }
})
const y = 2
/*
onMounted(() => {
  if (useScroll.isScrolling === true) {
    $anime({
      targets: boxRef.value.value.position,
      y: 10,
      x: 20,
      easing: 'easeInOutSine',
      duration: 5000,
      direction: 'alternate',
      loop: true,
    })
  }
})*/ function scrollUp() {
  $anime({
    targets: camRef.value.position,
    y: ,
    duration: 1000,
  })
}
function scrollDown() {
  $anime({
    targets: camRef.value.position,
    y: camRef.value.position * 10,
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
}
</script>
<template>
  <div id="app">
    <TresCanvas clear-color="#000000" id="canvas">
      <TresPerspectiveCamera :position="[0, 2, 200]" :fov="75" ref="camRef" />
      <TresAmbientLight :intensity="1" />
      <Levioso :speed="3" :floatFactor="5" :rotationFactor="0.1">
        <MouseParallax :factor="2" :ease="3" />
      </Levioso>

      <boxi :position="[-5, 1, 0]" :rotation="[0, 0.5, 0]" />
      <boxi :position="[5, 5, 0]" :rotation="[0, 0.3, 0]" />

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
      <!-- BOXI TEST-->

      <TresGridHelper :position="[0, 0, 0]" :args="[10, 10]" />
      <TresGridHelper :position="[0, -10, 0]" :args="[10, 10]" />
      <TresGridHelper :position="[0, -20, 0]" :args="[10, 10]" />
      <TresGridHelper :position="[0, -30, 0]" :args="[10, 10]" />
    </TresCanvas>
  </div>
</template>
<style scoped>
#canvas {
  overflow-y: scroll;
}
#app {
  height: 100vh;
  width: 100vw;
}
</style>
