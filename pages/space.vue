<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
const { onLoop } = useRenderLoop()

onLoop(({ delta }) => {
  if (group1Ref.value.position.y > -40) {
    group1Ref.value.position.y += delta * -1.5
  } else group1Ref.value.position.y = 10
})
onLoop(({ delta }) => {
  if (group2Ref.value.position.y > -40) {
    group2Ref.value.position.y += delta * -2
  } else group2Ref.value.position.y = 10
})
onLoop(({ delta }) => {
  if (group3Ref.value.position.y > -40) {
    group3Ref.value.position.y += delta * -2.5
  } else group3Ref.value.position.y = 10
})
onLoop(({ delta }) => {
  if (group4Ref.value.position.y > -40) {
    group4Ref.value.position.y += delta * -3.5
  } else group4Ref.value.position.y = 10
})
onLoop(({ delta }) => {
  if (group5Ref.value.position.y > -40) {
    group5Ref.value.position.y += delta * -4
  } else group5Ref.value.position.y = 10
})
onLoop(({ delta }) => {
  if (group6Ref.value.position.y > -40) {
    group6Ref.value.position.y += delta * -4.5
  } else group6Ref.value.position.y = 10
})

const progress = ref(0)
const cameraRef = ref()
const group1Ref = ref()
const group2Ref = ref()
const group3Ref = ref()
const group4Ref = ref()
const group5Ref = ref()
const group6Ref = ref()
</script>

<template>
  <div id="app">
    <section id="header">
      <TresCanvas clear-color="#333" window-size preset="realistic">
        <TresPerspectiveCamera
          :position="[0, 2, 10.5]"
          :fov="75"
          ref="cameraRef"
        />
        <!-- SCROLL -->
        <ScrollControls :pages="1" :distance="30" :smooth-scroll="0.05" />
        <!-- PARALLAX -->
        <MouseParallax :factor="3" :ease="3" />
        <!-- TEXT -->
        <mazzar />

        <!-- BOX GROUP 1 -->
        <Levioso>
          <TresGroup ref="group1Ref" :position="[0, 20, 0]">
            <box1 :position="[0, 2, 0]" />
            <box2 :position="[5, 1, 5]" />
            <box3 :position="[-5, 3, -5]" />
            <box1 :position="[2, 5, 10]" />
            <box2 :position="[-5, 6, 2]" />
            <box3 :position="[-10, 7, -10]" />
          </TresGroup>
        </Levioso>
        <!-- BOX GROUP 2 -->
        <Levioso>
          <TresGroup ref="group2Ref" :position="[2, 20, 2]">
            <box1 :position="[0, 3, 0]" />
            <box2 :position="[1, 4, 5]" />
            <box3 :position="[6, 1, 2]" />
            <box1 :position="[-4, 3, -10]" />
            <box2 :position="[-5, 6, 2]" />
            <box3 :position="[-1, 3, 7]" />
          </TresGroup>
        </Levioso>
        <!-- BOX GROUP 3 -->
        <Levioso>
          <TresGroup ref="group3Ref" :position="[2, 20, 2]">
            <box1 :position="[0, 3, 0]" />
            <box2 :position="[1, 4, 5]" />
            <box3 :position="[6, 1, 2]" />
            <box1 :position="[-4, 3, -10]" />
            <box2 :position="[-5, 6, 2]" />
            <box3 :position="[-1, 3, 7]" />
          </TresGroup>
        </Levioso>
        <!-- BOX GROUP 4 -->
        <Levioso>
          <TresGroup ref="group4Ref" :position="[-2, 40, 3]">
            <box1 :position="[0, 3, 0]" />
            <box2 :position="[1, 4, 5]" />
            <box3 :position="[6, 1, 2]" />
            <box1 :position="[-4, 3, -10]" />
            <box2 :position="[-5, 6, 2]" />
            <box3 :position="[-1, 3, 7]" />
          </TresGroup>
        </Levioso>
        <!-- BOX GROUP 5 -->
        <Levioso>
          <TresGroup ref="group5Ref" :position="[3, 50, -5]">
            <box1 :position="[0, 3, 0]" />
            <box2 :position="[1, 4, 5]" />
            <box3 :position="[6, 1, 2]" />
            <box1 :position="[-4, 3, -10]" />
            <box2 :position="[-5, 6, 2]" />
            <box3 :position="[-1, 3, 7]" />
          </TresGroup>
        </Levioso>
        <!-- BOX GROUP 6 -->
        <Levioso>
          <TresGroup ref="group6Ref" :position="[-3, 60, -3]">
            <box1 :position="[0, 3, 0]" />
            <box2 :position="[1, 4, 5]" />
            <box3 :position="[6, 1, 2]" />
            <box1 :position="[-4, 3, -10]" />
            <box2 :position="[-5, 6, 2]" />
            <box3 :position="[-1, 3, 7]" />
          </TresGroup>
        </Levioso>
        <TresGridHelper :position="[0, 0, 0]" :args="[10, 10]" />
        <TresGridHelper :position="[0, -10, 0]" :args="[10, 10]" />
        <TresGridHelper :position="[0, -20, 0]" :args="[10, 10]" />
        <TresGridHelper :position="[0, -30, 0]" :args="[10, 10]" />
        <Stars />
      </TresCanvas>
    </section>
  </div>
</template>


