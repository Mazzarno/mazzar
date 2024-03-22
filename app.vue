<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
const { onLoop } = useRenderLoop()

onLoop(({ delta }) => {
  if (group1Ref.value.position.y > -40) {
    group1Ref.value.position.y += delta * -3
  } else group1Ref.value.position.y = 10
})
onLoop(({ delta }) => {
  if (group2Ref.value.position.y > -40) {
    group2Ref.value.position.y += delta * -2
  } else group2Ref.value.position.y = 10
})
onLoop(({ delta }) => {
  if (group3Ref.value.position.y > -40) {
    group3Ref.value.position.y += delta * -5
  } else group3Ref.value.position.y = 10
})
onLoop(({ delta }) => {
  if (group4Ref.value.position.y > -40) {
    group4Ref.value.position.y += delta * -4
  } else group4Ref.value.position.y = 10
})
onLoop(({ delta }) => {
  if (group5Ref.value.position.y > -40) {
    group5Ref.value.position.y += delta * -6
  } else group5Ref.value.position.y = 10
})
onLoop(({ delta }) => {
  if (group6Ref.value.position.y > -40) {
    group6Ref.value.position.y += delta * -7
  } else group6Ref.value.position.y = 10
})

const progress = ref(0)
const cameraRef = ref()
const boxRef = ref()
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
        <MouseParallax :factor="3" :ease="3" />
        <levioso
          :speed="2"
          :rotation-factor="2"
          :float-factor="2"
          :range="[-0.05, 0.05]"
        >
          <Suspense>
            <Text3D
              text="M"
              font="/public/assets/poppins.json"
              center
              need-updates
              :position="[-3.5, 3, 0]"
              :size="2"
            >
              <MeshGlassMaterial color="black" />
            </Text3D>
          </Suspense>
        </levioso>
        <levioso>
          <Suspense>
            <Text3D
              text="A"
              font="/public/assets/poppins.json"
              center
              need-updates
              :position="[-2, 3, 0]"
              :size="2"
            >
              <MeshGlassMaterial color="black" />
            </Text3D>
          </Suspense>
        </levioso>
        <levioso>
          <Suspense>
            <Text3D
              text="Z"
              font="/public/assets/poppins.json"
              center
              need-updates
              :position="[-0.5, 3, 0]"
              :size="2"
            >
              <MeshGlassMaterial color="black" />
            </Text3D>
          </Suspense>
        </levioso>
        <levioso>
          <Suspense>
            <Text3D
              text="Z"
              font="/public/assets/poppins.json"
              center
              need-updates
              :position="[1, 3, 0]"
              :size="2"
            >
              <MeshGlassMaterial color="black" />
            </Text3D>
          </Suspense>
        </levioso>
        <levioso>
          <Suspense>
            <Text3D
              text="A"
              font="/public/assets/poppins.json"
              center
              need-updates
              :position="[2.5, 3, 0]"
              :size="2"
            >
              <MeshGlassMaterial color="black" />
            </Text3D>
          </Suspense>
        </levioso>
        <levioso>
          <Suspense>
            <Text3D
              text="R"
              font="/public/assets/poppins.json"
              center
              need-updates
              :position="[4, 3, 0]"
              :size="2"
            >
              <MeshGlassMaterial color="black" />
            </Text3D>
          </Suspense>
        </levioso>

        <Stars />
        <Levioso>
          <box1 />
        </Levioso>
        <Levioso>
          <TresGroup ref="group1Ref" :position="[0, 10, 0]">
            <!-- BOX & LINE 1 -->
            <Box :args="[0.5, 0.5, 0.5]" :position="[0, 3, 0]" color="#e6dada">
              <line2
                color="#e6dada"
                :line-width="1"
                :position="[0, 1, 0]"
                :points="[
                  [0, -1, 0],
                  [0, 1, 0],
                ]"
              />
            </Box>

            <!-- BOX & LINE 2 -->
            <Box :args="[0.5, 0.5, 0.5]" :position="[1, 4, 5]" color="#e6dada">
              <line2
                color="#e6dada"
                :line-width="1"
                :position="[0, 1, 0]"
                :points="[
                  [0, -1, 0],
                  [0, 1, 0],
                ]"
              />
            </Box>

            <!-- BOX & LINE 3 -->
            <Box :args="[0.5, 0.5, 0.5]" :position="[6, 1, 2]" color="#e6dada">
              <line2
                color="#e6dada"
                :line-width="1"
                :position="[0, 1, 0]"
                :points="[
                  [0, -1, 0],
                  [0, 1, 0],
                ]"
              />
            </Box>
            <!-- BOX & LINE 4 -->
            <Box
              :args="[0.5, 0.5, 0.5]"
              :position="[-4, 3, -10]"
              color="#e6dada"
            >
              <line2
                color="#e6dada"
                :line-width="1"
                :position="[0, 1, 0]"
                :points="[
                  [0, -1, 0],
                  [0, 1, 0],
                ]"
              />
            </Box>

            <!-- BOX & LINE 5 -->
            <Box
              :args="[0.5, 0.5, 0.5]"
              :position="[-20, 6, -20]"
              color="#e6dada"
            >
              <line2
                color="#e6dada"
                :line-width="1"
                :position="[0, 1, 0]"
                :points="[
                  [0, -1, 0],
                  [0, 1, 0],
                ]"
              />
            </Box>

            <!-- BOX & LINE 6 -->
            <Box :args="[0.5, 0.5, 0.5]" :position="[-1, 3, 7]" color="#e6dada">
              <line2
                color="#e6dada"
                :line-width="1"
                :position="[0, 1, 0]"
                :points="[
                  [0, -1, 0],
                  [0, 1, 0],
                ]"
              />
            </Box>
          </TresGroup>
        </Levioso>
        <Levioso>
          <TresGroup ref="group2Ref" :position="[2, 20, 2]">
            <!-- BOX & LINE 1 -->
            <Box :args="[0.5, 0.5, 0.5]" :position="[0, 3, 0]" color="#e6dada">
              <line2
                color="#e6dada"
                :line-width="1"
                :position="[0, 1, 0]"
                :points="[
                  [0, -1, 0],
                  [0, 1, 0],
                ]"
              />
            </Box>

            <!-- BOX & LINE 2 -->
            <Box :args="[0.5, 0.5, 0.5]" :position="[1, 4, 5]" color="#e6dada">
              <line2
                color="#e6dada"
                :line-width="1"
                :position="[0, 1, 0]"
                :points="[
                  [0, -1, 0],
                  [0, 1, 0],
                ]"
              />
            </Box>

            <!-- BOX & LINE 3 -->
            <Box :args="[0.5, 0.5, 0.5]" :position="[6, 1, 2]" color="#e6dada">
              <line2
                color="#e6dada"
                :line-width="1"
                :position="[0, 1, 0]"
                :points="[
                  [0, -1, 0],
                  [0, 1, 0],
                ]"
              />
            </Box>
            <!-- BOX & LINE 4 -->
            <Box
              :args="[0.5, 0.5, 0.5]"
              :position="[-4, 3, -10]"
              color="#e6dada"
            >
              <line2
                color="#e6dada"
                :line-width="1"
                :position="[0, 1, 0]"
                :points="[
                  [0, -1, 0],
                  [0, 1, 0],
                ]"
              />
            </Box>

            <!-- BOX & LINE 5 -->
            <Box
              :args="[0.5, 0.5, 0.5]"
              :position="[-20, 6, -20]"
              color="#e6dada"
            >
              <line2
                color="#e6dada"
                :line-width="1"
                :position="[0, 1, 0]"
                :points="[
                  [0, -1, 0],
                  [0, 1, 0],
                ]"
              />
            </Box>

            <!-- BOX & LINE 6 -->
            <Box :args="[0.5, 0.5, 0.5]" :position="[-1, 3, 7]" color="#e6dada">
              <line2
                color="#e6dada"
                :line-width="1"
                :position="[0, 1, 0]"
                :points="[
                  [0, -1, 0],
                  [0, 1, 0],
                ]"
              />
            </Box>
          </TresGroup>
        </Levioso>
        <Levioso>
          <TresGroup ref="group3Ref" :position="[-1, 30, -1]">
            <!-- BOX & LINE 1 -->
            <Box :args="[0.5, 0.5, 0.5]" :position="[0, 3, 0]" color="#e6dada">
              <line2
                color="#e6dada"
                :line-width="1"
                :position="[0, 1, 0]"
                :points="[
                  [0, -1, 0],
                  [0, 1, 0],
                ]"
              />
            </Box>

            <!-- BOX & LINE 2 -->
            <Box :args="[0.5, 0.5, 0.5]" :position="[1, 4, 5]" color="#e6dada">
              <line2
                color="#e6dada"
                :line-width="1"
                :position="[0, 1, 0]"
                :points="[
                  [0, -1, 0],
                  [0, 1, 0],
                ]"
              />
            </Box>

            <!-- BOX & LINE 3 -->
            <Box :args="[0.5, 0.5, 0.5]" :position="[6, 1, 2]" color="#e6dada">
              <line2
                color="#e6dada"
                :line-width="1"
                :position="[0, 1, 0]"
                :points="[
                  [0, -1, 0],
                  [0, 1, 0],
                ]"
              />
            </Box>
            <!-- BOX & LINE 4 -->
            <Box
              :args="[0.5, 0.5, 0.5]"
              :position="[-4, 3, -10]"
              color="#e6dada"
            >
              <line2
                color="#e6dada"
                :line-width="1"
                :position="[0, 1, 0]"
                :points="[
                  [0, -1, 0],
                  [0, 1, 0],
                ]"
              />
            </Box>

            <!-- BOX & LINE 5 -->
            <Box
              :args="[0.5, 0.5, 0.5]"
              :position="[-20, 6, -20]"
              color="#e6dada"
            >
              <line2
                color="#e6dada"
                :line-width="1"
                :position="[0, 1, 0]"
                :points="[
                  [0, -1, 0],
                  [0, 1, 0],
                ]"
              />
            </Box>

            <!-- BOX & LINE 6 -->
            <Box :args="[0.5, 0.5, 0.5]" :position="[-1, 3, 7]" color="#e6dada">
              <line2
                color="#e6dada"
                :line-width="1"
                :position="[0, 1, 0]"
                :points="[
                  [0, -1, 0],
                  [0, 1, 0],
                ]"
              />
            </Box>
          </TresGroup>
        </Levioso>
        <Levioso>
          <TresGroup ref="group4Ref" :position="[-2, 40, 3]">
            <!-- BOX & LINE 1 -->
            <Box :args="[0.5, 0.5, 0.5]" :position="[0, 3, 0]" color="#e6dada">
              <line2
                color="#e6dada"
                :line-width="1"
                :position="[0, 1, 0]"
                :points="[
                  [0, -1, 0],
                  [0, 1, 0],
                ]"
              />
            </Box>

            <!-- BOX & LINE 2 -->
            <Box :args="[0.5, 0.5, 0.5]" :position="[1, 4, 5]" color="#e6dada">
              <line2
                color="#e6dada"
                :line-width="1"
                :position="[0, 1, 0]"
                :points="[
                  [0, -1, 0],
                  [0, 1, 0],
                ]"
              />
            </Box>

            <!-- BOX & LINE 3 -->
            <Box :args="[0.5, 0.5, 0.5]" :position="[6, 1, 2]" color="#e6dada">
              <line2
                color="#e6dada"
                :line-width="1"
                :position="[0, 1, 0]"
                :points="[
                  [0, -1, 0],
                  [0, 1, 0],
                ]"
              />
            </Box>
            <!-- BOX & LINE 4 -->
            <Box
              :args="[0.5, 0.5, 0.5]"
              :position="[-4, 3, -10]"
              color="#e6dada"
            >
              <line2
                color="#e6dada"
                :line-width="1"
                :position="[0, 1, 0]"
                :points="[
                  [0, -1, 0],
                  [0, 1, 0],
                ]"
              />
            </Box>

            <!-- BOX & LINE 5 -->
            <Box
              :args="[0.5, 0.5, 0.5]"
              :position="[-20, 6, -20]"
              color="#e6dada"
            >
              <line2
                color="#e6dada"
                :line-width="1"
                :position="[0, 1, 0]"
                :points="[
                  [0, -1, 0],
                  [0, 1, 0],
                ]"
              />
            </Box>

            <!-- BOX & LINE 6 -->
            <Box :args="[0.5, 0.5, 0.5]" :position="[-1, 3, 7]" color="#e6dada">
              <line2
                color="#e6dada"
                :line-width="1"
                :position="[0, 1, 0]"
                :points="[
                  [0, -1, 0],
                  [0, 1, 0],
                ]"
              />
            </Box>
          </TresGroup>
        </Levioso>
        <Levioso>
          <TresGroup ref="group5Ref" :position="[3, 50, -5]">
            <!-- BOX & LINE 1 -->
            <Box :args="[0.5, 0.5, 0.5]" :position="[0, 3, 0]" color="#e6dada">
              <line2
                color="#e6dada"
                :line-width="1"
                :position="[0, 1, 0]"
                :points="[
                  [0, -1, 0],
                  [0, 1, 0],
                ]"
              />
            </Box>

            <!-- BOX & LINE 2 -->
            <Box :args="[0.5, 0.5, 0.5]" :position="[1, 4, 5]" color="#e6dada">
              <line2
                color="#e6dada"
                :line-width="1"
                :position="[0, 1, 0]"
                :points="[
                  [0, -1, 0],
                  [0, 1, 0],
                ]"
              />
            </Box>

            <!-- BOX & LINE 3 -->
            <Box :args="[0.5, 0.5, 0.5]" :position="[6, 1, 2]" color="#e6dada">
              <line2
                color="#e6dada"
                :line-width="1"
                :position="[0, 1, 0]"
                :points="[
                  [0, -1, 0],
                  [0, 1, 0],
                ]"
              />
            </Box>
            <!-- BOX & LINE 4 -->
            <Box
              :args="[0.5, 0.5, 0.5]"
              :position="[-4, 3, -10]"
              color="#e6dada"
            >
              <line2
                color="#e6dada"
                :line-width="1"
                :position="[0, 1, 0]"
                :points="[
                  [0, -1, 0],
                  [0, 1, 0],
                ]"
              />
            </Box>

            <!-- BOX & LINE 5 -->
            <Box
              :args="[0.5, 0.5, 0.5]"
              :position="[-20, 6, -20]"
              color="#e6dada"
            >
              <line2
                color="#e6dada"
                :line-width="1"
                :position="[0, 1, 0]"
                :points="[
                  [0, -1, 0],
                  [0, 1, 0],
                ]"
              />
            </Box>

            <!-- BOX & LINE 6 -->
            <Box :args="[0.5, 0.5, 0.5]" :position="[-1, 3, 7]" color="#e6dada">
              <line2
                color="#e6dada"
                :line-width="1"
                :position="[0, 1, 0]"
                :points="[
                  [0, -1, 0],
                  [0, 1, 0],
                ]"
              />
            </Box>
          </TresGroup>
        </Levioso>
        <Levioso>
          <TresGroup ref="group6Ref" :position="[-3, 60, -3]">
            <!-- BOX & LINE 1 -->
            <Box :args="[0.5, 0.5, 0.5]" :position="[0, 3, 0]" color="#e6dada">
              <line2
                color="#e6dada"
                :line-width="1"
                :position="[0, 1, 0]"
                :points="[
                  [0, -1, 0],
                  [0, 1, 0],
                ]"
              />
            </Box>

            <!-- BOX & LINE 2 -->
            <Box :args="[0.5, 0.5, 0.5]" :position="[1, 4, 5]" color="#e6dada">
              <line2
                color="#e6dada"
                :line-width="1"
                :position="[0, 1, 0]"
                :points="[
                  [0, -1, 0],
                  [0, 1, 0],
                ]"
              />
            </Box>

            <!-- BOX & LINE 3 -->
            <Box :args="[0.5, 0.5, 0.5]" :position="[6, 1, 2]" color="#e6dada">
              <line2
                color="#e6dada"
                :line-width="1"
                :position="[0, 1, 0]"
                :points="[
                  [0, -1, 0],
                  [0, 1, 0],
                ]"
              />
            </Box>
            <!-- BOX & LINE 4 -->
            <Box
              :args="[0.5, 0.5, 0.5]"
              :position="[-4, 3, -10]"
              color="#e6dada"
            >
              <line2
                color="#e6dada"
                :line-width="1"
                :position="[0, 1, 0]"
                :points="[
                  [0, -1, 0],
                  [0, 1, 0],
                ]"
              />
            </Box>

            <!-- BOX & LINE 5 -->
            <Box
              :args="[0.5, 0.5, 0.5]"
              :position="[-20, 6, -20]"
              color="#e6dada"
            >
              <line2
                color="#e6dada"
                :line-width="1"
                :position="[0, 1, 0]"
                :points="[
                  [0, -1, 0],
                  [0, 1, 0],
                ]"
              />
            </Box>

            <!-- BOX & LINE 6 -->
            <Box :args="[0.5, 0.5, 0.5]" :position="[-1, 3, 7]" color="#e6dada">
              <line2
                color="#e6dada"
                :line-width="1"
                :position="[0, 1, 0]"
                :points="[
                  [0, -1, 0],
                  [0, 1, 0],
                ]"
              />
            </Box>
          </TresGroup>
        </Levioso>

        <TresGridHelper :position="[0, 0, 0]" :args="[10, 10]" />
        <TresGridHelper :position="[0, -10, 0]" :args="[10, 10]" />
        <TresGridHelper :position="[0, -20, 0]" :args="[10, 10]" />
        <TresGridHelper :position="[0, -30, 0]" :args="[10, 10]" />
      </TresCanvas>
    </section>
  </div>
</template>

<style>
#header {
  height: 100vh;
  width: 100vw;
}
#app {
  background-color: #333;
}
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
#canvas {
  height: 100%;
  width: 100%;
}
</style>
