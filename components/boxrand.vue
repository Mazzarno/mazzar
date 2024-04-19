<script setup lang="ts">
const { onLoop } = useRenderLoop()
const { $anime } = useNuxtApp()
const itemRefs = ref([])
const boxGroup = ref()
const boxes = [
  { id: 1, args: [1, 1, 1], pos: [-2, -2, 2], color: '#dee2e6' },
  { id: 1, args: [1, 1, 1], pos: [-0, -2, 2], color: '#dee2e6' },
  { id: 1, args: [1, 1, 1], pos: [2, -2, 2], color: '#dee2e6' },
  { id: 1, args: [1, 1, 1], pos: [-2, 0, 2], color: '#dee2e6' },
  { id: 1, args: [1, 1, 1], pos: [-2, 2, 2], color: '#dee2e6' },
  { id: 1, args: [1, 1, 1], pos: [0, 2, 2], color: '#dee2e6' },
  { id: 1, args: [1, 1, 1], pos: [2, 2, 2], color: '#dee2e6' },
  { id: 1, args: [1, 1, 1], pos: [2, 0, 2], color: '#dee2e6' },
  { id: 2, args: [1, 1, 1], pos: [1, 1, 1], color: '#dee2e6' },
  { id: 3, args: [1, 1, 1], pos: [-1, 1, 1], color: '#dee2e6' },
  { id: 4, args: [1, 1, 1], pos: [-1, -1, 1], color: '#dee2e6' },
  { id: 5, args: [1, 1, 1], pos: [1, -1, 1], color: '#dee2e6' },
  { id: 1, args: [1, 1, 1], pos: [0, 0, 0], color: '#dee2e6' },
  { id: 2, args: [1, 1, 1], pos: [1, 1, -1], color: '#dee2e6' },
  { id: 3, args: [1, 1, 1], pos: [-1, 1, -1], color: '#dee2e6' },
  { id: 4, args: [1, 1, 1], pos: [-1, -1, -1], color: '#dee2e6' },
  { id: 5, args: [1, 1, 1], pos: [1, -1, -1], color: '#dee2e6' },
  { id: 1, args: [1, 1, 1], pos: [-2, -2, -2], color: '#dee2e6' },
  { id: 1, args: [1, 1, 1], pos: [-0, -2, -2], color: '#dee2e6' },
  { id: 1, args: [1, 1, 1], pos: [2, -2, -2], color: '#dee2e6' },
  { id: 1, args: [1, 1, 1], pos: [-2, 0, -2], color: '#dee2e6' },
  { id: 1, args: [1, 1, 1], pos: [-2, 2, -2], color: '#dee2e6' },
  { id: 1, args: [1, 1, 1], pos: [0, 2, -2], color: '#dee2e6' },
  { id: 1, args: [1, 1, 1], pos: [2, 2, -2], color: '#dee2e6' },
  { id: 1, args: [1, 1, 1], pos: [2, 0, -2], color: '#dee2e6' },
]
onLoop(({ delta }) => {
  if (boxGroup) {
    boxGroup.value.rotation.y -= delta
  }
})
function boxEnter(index) {
  const actualY = itemRefs.value[index].value.position.y
  $anime({
    targets: itemRefs.value[index].value.position,
    y: actualY - 1,
    duration: 500,
    easing: 'linear',
  })
}
function boxLeave(index) {
  setTimeout(() => {
    const actuallY = itemRefs.value[index].value.position.y
    $anime({
      targets: itemRefs.value[index].value.position,
      y: actuallY + 1,
      duration: 500,
      easing: 'linear',
    })
  }, 500)
}
function boxClick(index) {
  $anime({
    targets: itemRefs.value[index].value.material.color,
    r: 173,
    g: 181,
    b: 189,
    duration: 500,
    easing: 'linear',
  })
}
</script>
<template>
  <TresGroup ref="boxGroup" :position="[0, -15, 0]">
    <Box
      v-for="(box, index) in boxes"
      @pointer-enter="boxEnter(index)"
      @pointer-leave="boxLeave(index)"
      @click="boxClick(index)"
      :key="index"
      :args="box.args"
      :position="box.pos"
      :color="box.color"
      :ref="(el) => itemRefs.push(el)"
    ></Box>
  </TresGroup>
</template>

<script lang="ts" setup></script>

<style></style>
