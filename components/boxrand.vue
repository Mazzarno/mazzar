<script setup lang="ts">
import { PolyhedronGeometry } from "three";

const { onLoop } = useRenderLoop();
const { $anime } = useNuxtApp();

function boxClick() {
  $anime({
    targets: boxRef.value.value.position,
    z: +2,
    duration: 1000,
    easing: "linear",
  });
}
function boxEnter() {
  $anime({
    targets: boxRef.value.value.position,
    z: 0.5,
    duration: 500,
    easing: "linear",
  });
}
function boxLeave() {
  $anime({
    targets: boxRef.value.value.position,
    z: 0,
    duration: 500,
    easing: "linear",
  });
}
const boxRef = ref();
const lineRef = ref();
/*
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
}) */
</script>
<template>
  <TresGroup>
    <Box
      ref="boxRef"
      :args="[0.5, 0.5, 0.5]"
      :position="[0, 0, 0]"
      color="#FBFBFB"
      @click="boxClick"
      @pointer-enter="boxEnter"
      @pointer-leave="boxLeave"
    >
    </Box>
    <Box
      ref="boxRef"
      :args="[0.5, 0.5, 0.5]"
      :position="[0, 0.5, 0]"
      color="#FBFBFB"
      @pointer-enter="boxEnter"
      @pointer-leave="boxLeave"
    >
    </Box>
    <Box
      ref="boxRef"
      :args="[0.5, 0.5, 0.5]"
      :position="[0, 1, 0]"
      color="#FBFBFB"
      @pointer-enter="boxEnter"
      @pointer-leave="boxLeave"
    >
    </Box>
    <Box
      ref="boxRef"
      :args="[0.5, 0.5, 0.5]"
      :position="[0, 1.5, 0]"
      color="#FBFBFB"
      @pointer-enter="boxEnter"
      @pointer-leave="boxLeave"
    >
    </Box>
    <Box
      ref="boxRef"
      :args="[0.5, 0.5, 0.5]"
      :position="[0, 2, 0]"
      color="#FBFBFB"
      @pointer-enter="boxEnter"
      @pointer-leave="boxLeave"
    >
    </Box>
    <Box
      ref="boxRef"
      :args="[0.5, 0.5, 0.5]"
      :position="[0, 2.5, 0]"
      color="#FBFBFB"
    >
    </Box>
    <Box
      ref="boxRef"
      :args="[0.5, 0.5, 0.5]"
      :position="[0, 3, 0]"
      color="#FBFBFB"
    >
    </Box>
    <Box
      ref="boxRef"
      :args="[0.5, 0.5, 0.5]"
      :position="[0, 3.5, 0]"
      color="#FBFBFB"
    >
    </Box>
    <Box
      ref="boxRef"
      :args="[0.5, 0.5, 0.5]"
      :position="[0, 4, 0]"
      color="#FBFBFB"
    >
    </Box>
    <Box
      ref="boxRef"
      :args="[0.5, 0.5, 0.5]"
      :position="[0, 4.5, 0]"
      color="#FBFBFB"
    >
    </Box>
    <Box
      ref="boxRef"
      :args="[0.5, 0.5, 0.5]"
      :position="[0, 5, 0]"
      color="#FBFBFB"
    >
    </Box>
    <Box
      ref="boxRef"
      :args="[0.5, 0.5, 0.5]"
      :position="[0, 5.5, 0]"
      color="#FBFBFB"
    >
    </Box>
    <Box
      ref="boxRef"
      :args="[0.5, 0.5, 0.5]"
      :position="[0, 6, 0]"
      color="#FBFBFB"
    >
    </Box>
    <Box
      ref="boxRef"
      :args="[0.5, 0.5, 0.5]"
      :position="[0.5, 6, 0]"
      color="#FBFBFB"
    >
    </Box>
    <Box
      ref="boxRef"
      :args="[0.5, 0.5, 0.5]"
      :position="[1, 5.5, 0]"
      color="#FBFBFB"
    >
    </Box>
    <Box
      ref="boxRef"
      :args="[0.5, 0.5, 0.5]"
      :position="[1.5, 5, 0]"
      color="#FBFBFB"
    >
    </Box>
    <Box
      ref="boxRef"
      :args="[0.5, 0.5, 0.5]"
      :position="[1, 5.5, 0]"
      color="#FBFBFB"
    >
    </Box>
    <Box
      ref="boxRef"
      :args="[0.5, 0.5, 0.5]"
      :position="[1.5, 5, 0]"
      color="#FBFBFB"
    >
    </Box>
    <Box
      ref="boxRef"
      :args="[0.5, 0.5, 0.5]"
      :position="[2, 4.5, 0]"
      color="#FBFBFB"
    >
    </Box>
    <Box
      ref="boxRef"
      :args="[0.5, 0.5, 0.5]"
      :position="[2.5, 4, 0]"
      color="#FBFBFB"
    >
    </Box>
    <Box
      ref="boxRef"
      :args="[0.5, 0.5, 0.5]"
      :position="[3, 4.5, 0]"
      color="#FBFBFB"
    >
    </Box>
    <Box
      ref="boxRef"
      :args="[0.5, 0.5, 0.5]"
      :position="[3.5, 5, 0]"
      color="#FBFBFB"
    >
    </Box>
    <Box
      ref="boxRef"
      :args="[0.5, 0.5, 0.5]"
      :position="[4, 5.5, 0]"
      color="#FBFBFB"
    >
    </Box>
    <Box
      ref="boxRef"
      :args="[0.5, 0.5, 0.5]"
      :position="[4.5, 6, 0]"
      color="#FBFBFB"
    >
    </Box>
    <Box
      ref="boxRef"
      :args="[0.5, 0.5, 0.5]"
      :position="[4.5, 5.5, 0]"
      color="#FBFBFB"
    >
    </Box>
    <Box
      ref="boxRef"
      :args="[0.5, 0.5, 0.5]"
      :position="[4.5, 5, 0]"
      color="#FBFBFB"
    >
    </Box>
    <Box
      ref="boxRef"
      :args="[0.5, 0.5, 0.5]"
      :position="[4.5, 4.5, 0]"
      color="#FBFBFB"
    >
    </Box>
    <Box
      ref="boxRef"
      :args="[0.5, 0.5, 0.5]"
      :position="[4.5, 4, 0]"
      color="#FBFBFB"
    >
    </Box>
    <Box
      ref="boxRef"
      :args="[0.5, 0.5, 0.5]"
      :position="[4.5, 3.5, 0]"
      color="#FBFBFB"
    >
    </Box>
    <Box
      ref="boxRef"
      :args="[0.5, 0.5, 0.5]"
      :position="[4.5, 3, 0]"
      color="#FBFBFB"
    >
    </Box>
    <Box
      ref="boxRef"
      :args="[0.5, 0.5, 0.5]"
      :position="[4.5, 2.5, 0]"
      color="#FBFBFB"
    >
    </Box>
    <Box
      ref="boxRef"
      :args="[0.5, 0.5, 0.5]"
      :position="[4.5, 2, 0]"
      color="#FBFBFB"
    >
    </Box>
    <Box
      ref="boxRef"
      :args="[0.5, 0.5, 0.5]"
      :position="[4.5, 1.5, 0]"
      color="#FBFBFB"
    >
    </Box>
    <Box
      ref="boxRef"
      :args="[0.5, 0.5, 0.5]"
      :position="[4.5, 1, 0]"
      color="#FBFBFB"
    >
    </Box>
    <Box
      ref="boxRef"
      :args="[0.5, 0.5, 0.5]"
      :position="[4.5, 0.5, 0]"
      color="#FBFBFB"
    >
    </Box>
    <Box
      ref="boxRef"
      :args="[0.5, 0.5, 0.5]"
      :position="[4.5, 0, 0]"
      color="#FBFBFB"
    >
    </Box>
  </TresGroup>
</template>

<script lang="ts" setup></script>

<style></style>
