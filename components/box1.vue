<script lang="ts" setup>
const { onLoop } = useRenderLoop()

onLoop(({ delta }) => {
  if (boxRef.value) {
    boxRef.value.value.rotation.y += delta * 3
  }
})
function onClick() {
  if (boxRef.value) {
    boxRef.value.value.material.color.set('#4e4a4a')
    useGsap.fromTo(
      boxRef.value.value.scale,
      { x: 1, y: 1, z: 1, duration: 0 },
      { x: 1.25, y: 1.25, z: 1.25, duration: 1 },
    )
    setTimeout(() => {
      boxRef.value.value.material.color.set('#e6dada')
    }, 1000)
  }
}

function onPointerEnter() {
  if (boxRef.value) {
    boxRef.value.value.material.color.set('#b6acac')
  }
}

function onPointerLeave() {
  if (boxRef.value) {
    setTimeout(() => {}, 1000)
  }
}
const boxRef = ref()
</script>
<template>
    <Box
      @click="onClick"
      @pointer-enter="onPointerEnter"
      @pointer-leave="onPointerLeave"
      ref="boxRef"
      :args="[0.5, 0.5, 0.5]"
      :position="[0, 3, 0]"
      color="#e6dada"
    >
      <line2
        color="#e6dada"
        :line-width="2"
        :position="[0, 1.25, 0]"
        :points="[
          [0, 0.1, 0],
          [0, -1, 0],
        ]"
      />
    </Box>
</template>

<style></style>
