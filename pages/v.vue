<script setup lang="ts">
const { onLoop } = useRenderLoop()
const scRef = ref()
const camRef = ref()
const progress = ref(0)
onLoop(({ delta }) => {
  if (camRef.value.position.z > 10) {
    camRef.value.position.z -= delta * 100
  }
})
</script>
<template>
  <div id="app">
    <TresCanvas clear-color="#000000" id="lock">
      <TresPerspectiveCamera :position="[0, 2, 200]" :fov="75" ref="camRef" />
      <TresAmbientLight :intensity="1" />
      <Levioso :speed="3" :floatFactor="5" :rotationFactor="0.1">
        <MouseParallax :factor="2" :ease="3" />
      </Levioso>

      <ScrollControls
        :pages="1"
        :distance="30"
        :smooth-scroll="0.05"
        ref="scRef"
        v-model="progress"
      >
        <boxi :position="[-5, 1, 0]" :rotation="[0, 0.5, 0]" />
        <boxi :position="[5, 5, 0]" :rotation="[0, 0.3, 0]" />
      </ScrollControls>
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
#app {
  height: 100vh;
  width: 100vw;
}
</style>
