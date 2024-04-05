<script setup lang="ts">
const { onLoop } = useRenderLoop()
const { $anime } = useNuxtApp()
onLoop(({ delta }) => {
  if (boxRef.value) {
    boxRef.value.value.rotation.y += delta * -0.6
    boxRef.value.value.position.y += delta * -0.6
    setTimeout(() => {
      boxRef.value.value.rotation.y += delta * 1.2
      boxRef.value.value.position.y += delta * 0.6
    }, 1000)
    boxRef.value.value.rotation.y += delta * 0
    boxRef.value.value.position.y += delta * 0
  }
})

const boxRef = ref()
const lineRef = ref()
onMounted(() => {
  $anime({
    targets: boxRef.value.value.position,
    y: 1,
    x: 2,
    z: 3,
    easing: 'easeInOutSine',
    duration: 5000,
    direction: 'alternate',
    loop: true,
  })
})
</script>
<template>
  <Box ref="boxRef" :args="[0.5, 0.5, 0.5]" color="#FBFBFB">
    <Sparkles
      :sequence-alpha="[
        [0, 0],
        [0.6, 1.0],
        [0.7, 0.0],
        [1.0, 1.0],
      ]"
      :sequence-color="['yellow', 'white', 'purple', 'blue', 'black']"
      :sequence-offset="[
        [0.7, [0, 0, 0]],
        [0.75, [0, 0.1, 0]],
        [1.0, [0, 0.5, 0]],
      ]"
      :sequence-size="[
        [0.0, 0.0],
        [0.7, 1.0],
      ]"
      :sequence-surface-distance="[
        [0.0, 0.0],
        [0.7, 1.0],
      ]"
      :lifetime-sec="2.0"
      :size="10"
      :surface-distance="0"
      :mix-color="1.0"
    />
    <line2
      ref="lineRef"
      color="#FBFBFB"
      :line-width="2"
      :position="[0, 1.25, 0]"
      :points="[
        [0, 0.1, 0],
        [0, -1, 0],
      ]"
    />
  </Box>
</template>

<script lang="ts" setup></script>

<style></style>
