<template>
  <div id="app">
    <div
      class="absolute top-1/2 left-full transform -translate-x-full -translate-y-1/2 z-50 items-center"
    >
      <div
        @click="stepOne"
        class="h-4 w-4 bg-slate-500 opacity-50 rounded-full m-5 hover:opacity-90 active:opacity-100 active"
      ></div>
      <div
        @click="stepTwo"
        class="h-4 w-4 bg-slate-500 opacity-50 rounded-full m-5 hover:opacity-90 active:opacity-100"
      ></div>
      <div
        @click="stepThree"
        class="h-4 w-4 bg-slate-500 opacity-50 rounded-full m-5 hover:opacity-90 active:opacity-100"
      ></div>
      <div
        @click="stepFour"
        class="h-4 w-4 bg-slate-500 opacity-50 rounded-full m-5 hover:opacity-90 active:opacity-100"
      ></div>
      <div
        @click="stepFive"
        class="h-4 w-4 bg-slate-500 opacity-50 rounded-full m-5 hover:opacity-90 active:opacity-100"
      ></div>
    </div>
    <TresCanvas clear-color="#000000" id="canvas">
      <TresPerspectiveCamera
        :position="[0, 2, 200]"
        :fov="75"
        ref="camRef"
        :scroll="handleScroll"
      />
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
      <TresGridHelper :position="[0, 0, 0]" :args="[10, 10]" />
      <TresGridHelper :position="[0, -10, 0]" :args="[10, 10]" />
      <TresGridHelper :position="[0, -20, 0]" :args="[10, 10]" />
      <TresGridHelper :position="[0, -30, 0]" :args="[10, 10]" />
      <TresGridHelper :position="[0, -40, 0]" :args="[10, 10]" />
    </TresCanvas>
  </div>
</template>
<script setup>
const { onLoop } = useRenderLoop()
const { $anime } = useNuxtApp()
import { ScrollControls } from '@tresjs/cientos'
const camRef = ref()
const scRef = ref()
const progress = ref(0)
const oneStep = ref(true)
const twoStep = ref(false)
const threeStep = ref(false)
const fourStep = ref(false)
const fiveStep = ref(false)
const steps = [
  { id: 0, name: 'one', value: { ycam: 2, snap: [10, -10], func: stepOne } },
  {
    id: 1,
    name: 'two',
    value: { ycam: -18, snap: [-10, -30], func: stepTwo },
  },
  {
    id: 2,
    name: 'three',
    value: { ycam: -38, snap: [-30, -50], func: stepThree },
  },
  {
    id: 3,
    name: 'four',
    value: { ycam: -58, snap: [-50, -70], func: stepFour },
  },
  {
    id: 4,
    name: 'five',
    value: { ycam: -78, snap: [-70, -90], func: stepFive },
  },
]
let currentIndex = 0 // Variable pour suivre l'index actuel dans l'array

const handleScroll = (event) => {
  // Récupère la variation du défilement de la molette de la souris sur l'axe Y
  const deltaY = event.deltaY

  // Détermine le sens du défilement en fonction de la variation
  let scrollDirection
  if (deltaY > 0) {
    scrollDirection = 'down'
  } else if (deltaY < 0) {
    scrollDirection = 'up'
  }

  // Met à jour l'index en fonction du sens du défilement
  if (scrollDirection === 'down') {
    if (currentIndex < steps.length - 1) {
      currentIndex++ // Incrémente l'index si ce n'est pas la limite supérieure
    }
  } else if (scrollDirection === 'up') {
    if (currentIndex > 0) {
      currentIndex-- // Décrémente l'index si ce n'est pas la limite inférieure
    }
  }

  // Applique la valeur ycam correspondante
  const newYcam = steps[currentIndex].value.ycam
  console.log('Nouvelle valeur de ycam :', newYcam)

  // Exécute la fonction func correspondante
  const funcToExecute = steps[currentIndex].value.func
  funcToExecute()
}

onMounted(() => {
  // Ajoute un écouteur d'événements pour détecter le défilement
  window.addEventListener('wheel', handleScroll)
})

onUnmounted(() => {
  // Retire l'écouteur d'événements lors de la destruction du composant
  window.removeEventListener('wheel', handleScroll)
})
// scrol instant + delay + smoothscroll into scene
// PROGRESS VALUE MAX
/*
    if (progress.value < 0.1) {
      stepOne()
    }
    if (progress.value >= 0.1 && progress.value <= 0.4) {
      stepTwo()
    }
    if (progress.value >= 0.4 && progress.value <= 0.6) {
      stepThree()
    }
    if (progress.value >= 0.6 && progress.value <= 0.8) {
      stepFour()
    }
    if (progress.value >= 0.8 && progress.value <= 1) {
      stepFive()
    }
  }
}
*/
// 5 scene
// INTRO
onLoop(({ delta }) => {
  if (camRef.value.position.z > 10) {
    camRef.value.position.z -= delta * 100
  }
  /*
  if (progress.value) {
    console.log(progress.value)
  }
  if (progress.value <= 0.1) {
    progress.value = 0.5
    var heightcam = camRef.value.position.y + 10
    $anime({
      targets: camRef.value.position,
      y: heightcam + 10,
      duration: 1000,
    })
  }
  if (progress.value >= 0.9) {
    progress.value = 0.5
    var heightcam = camRef.value.position.y - 10
    $anime({
      targets: camRef.value.position,
      y: heightcam,
      duration: 1000,
    })
  }*/
})

onMounted(() => {}),
  // SCROLL
  onLoop(() => {})

function stepOne() {
  oneStep.value = true
  $anime({
    targets: camRef.value.position,
    y: 2,
    duration: 1000,
  })
}
function stepTwo() {
  twoStep.value = true
  $anime({
    targets: camRef.value.position,
    y: -8,
    duration: 1000,
    delay: 1000,
  })
}
function stepThree() {
  threeStep.value = true

  $anime({
    targets: camRef.value.position,
    y: -18,
    duration: 1000,
    delay: 1000,
  })
}
function stepFour() {
  fourStep.value = true
  $anime({
    targets: camRef.value.position,
    y: -28,
    duration: 1000,
    delay: 1000,
  })
}
function stepFive() {
  fiveStep.value = true
  $anime({
    targets: camRef.value.position,
    y: -38,
    duration: 1000,
    delay: 1000,
  })
}
</script>

<style scoped>
#app {
  height: 100vh;
  width: 100vw;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}
#canvas {
  height: 100vh;
  width: 100vw;
}
#app::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
</style>
