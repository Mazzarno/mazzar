<script setup lang="ts">
import { shallowRef } from 'vue'
import { TresCanvas, useRenderLoop } from '@tresjs/core'

import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from 'three'

const gl = {
  clearColor: '#82DBC5',
  shadows: true,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping,
}
const boxRef = shallowRef()

const { onLoop } = useRenderLoop()

onLoop(() => {
  if (boxRef.value) {
    boxRef.value.rotation.y += 0.01
  }
})

const cameraRef = ref()
const exampleVideo = '/public/assets/code.mp4'
const texture = ref()
texture.value = await useVideoTexture(exampleVideo, { loop: true })
</script>

<template>
  <div id="app">
    <TresCanvas window-size preset="realistic" v-bind="gl">
      <MouseParallax :factor="0.5" :ease="3" />
      <TresPerspectiveCamera
        :position="[4, -3, 4]"
        :look-at="[0, -4, -0.5]"
        :args="[45, 1, 0.1, 1000]"
      />

      <Plane
        :args="[1.12, 0.7]"
        :position="[1.06, -2.99, -4.13]"
        :rotation="[0, 0, 0]"
      >
        <TresMeshBasicMaterial :map="texture" />
      </Plane>
      <Suspense>
        <GLTFModel
          cast-shadow
          path="/assets/models/Another_bedroom.glb"
          :position="[0, -5, -0.5]"
          :rotation="[0, Math.PI / -2, 0]"
        />
      </Suspense>
      <!-- FLOOR PANEL-->
      <Plane :args="[30, 15]" :position="[0, -5, 2.5]" receive-shadow>
        <TresMeshToonMaterial color="#82DBC5" />
      </Plane>
      <!-- ROOF PANEL-->
      <Plane
        :args="[30, 15]"
        :position="[0, 10, 2.5]"
        :rotation="[Math.PI / 2, 0, 0]"
        receive-shadow
      >
        <TresMeshToonMaterial color="#82DBC5" />
      </Plane>
      <!-- BACK PANEL-->
      <Plane
        :args="[30, 15]"
        :position="[0, 2.5, -5]"
        :rotation="[0, 0, 0]"
        receive-shadow
      >
        <TresMeshToonMaterial color="#82DBC5" />
      </Plane>
      <!-- RIGHT PANEL-->
      <Plane
        :args="[15, 15]"
        :position="[15, 2.5, 2.5]"
        :rotation="[0, 4.713, 0]"
        receive-shadow
      >
        <TresMeshToonMaterial color="#82DBC5" />
      </Plane>
      <!-- LEFT PANEL-->
      <Plane
        :args="[15, 15]"
        :position="[-15, 2.5, 2.5]"
        :rotation="[0, -4.713, 0]"
        receive-shadow
      >
        <TresMeshToonMaterial color="#82DBC5" />
      </Plane>
      <TresGridHelper :position="[0, -5, 0]" />
      <TresAmbientLight :intensity="1" />
      <TresDirectionalLight cast-shadow :position="[0, 1, 0]" :intensity="1" />
    </TresCanvas>
  </div>
</template>

