<template>
  <div id="app">
    <div
      class="absolute top-1/2 left-full transform -translate-x-full -translate-y-1/2 z-50 items-center"
    >
      <div
        @click="stepOne"
        :class="{ 'animate-pulse bg-white': oneStep }"
        class="h-4 w-4 bg-slate-600 bg-opacity-90 rounded-full m-5 hover:bg-opacity-100"
      ></div>
      <div
        @click="stepTwo"
        :class="{ 'animate-pulse bg-white': twoStep }"
        class="h-4 w-4 bg-slate-600 bg-opacity-90 rounded-full m-5 hover:bg-opacity-100"
      ></div>
      <div
        @click="stepThree"
        :class="{ 'animate-pulse bg-white': threeStep }"
        class="h-4 w-4 bg-slate-600 bg-opacity-90 rounded-full m-5 hover:bg-opacity-100"
      ></div>
      <div
        @click="stepFour"
        :class="{ 'animate-pulse bg-white': fourStep }"
        class="h-4 w-4 bg-slate-600 bg-opacity-90 rounded-full m-5 hover:bg-opacity-100"
      ></div>
      <div
        @click="stepFive"
        :class="{ 'animate-pulse bg-white': fiveStep }"
        class="h-4 w-4 bg-slate-600 bg-opacity-90 rounded-full m-5 hover:bg-opacity-100"
      ></div>
    </div>
    <TresCanvas clear-color="#000000" id="canvas">
      <TresPerspectiveCamera :position="[0, 2, 100]" :fov="75" ref="camRef" />
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

      <Levioso>
        <TresGroup ref="groupRef">
          <Suspense>
            <FBXModel
              path="./assets/low-poly-mill.fbx"
              :scale="0.2"
              :position="[0, 0, -500]"
            />
          </Suspense>
        </TresGroup>
      </Levioso>

      <boxi :position="[-15, -1, -10]" :rotation="[0, 0.5, 0]" />
      <boxi :position="[15, -5, -8]" :rotation="[0, 0.3, 0]" ref="boxRef" />
      <boxi :position="[10, 12, -15]" :rotation="[0, 0.1, 0]" ref="boxRef" />
      <TresGridHelper :position="[0, 0, 0]" :args="[10, 10]" />
      <TresGridHelper :position="[0, -20, 0]" :args="[10, 10]" />
      <TresGridHelper :position="[0, -40, 0]" :args="[10, 10]" />
      <TresGridHelper :position="[0, -60, 0]" :args="[10, 10]" />
      <TresGridHelper :position="[0, -80, 0]" :args="[10, 10]" />
    </TresCanvas>
  </div>
</template>
<script setup>
const { onLoop } = useRenderLoop();
const { $anime } = useNuxtApp();
const boxRef = ref();
const camRef = ref();
const groupRef = ref();
const oneStep = ref(true);
const twoStep = ref(false);
const threeStep = ref(false);
const fourStep = ref(false);
const fiveStep = ref(false);
import { FBXModel } from "@tresjs/cientos";
const steps = [
  { id: 0, name: "one", value: { ycam: 2, snap: [10, -10], func: stepOne } },
  {
    id: 1,
    name: "two",
    value: { ycam: -18, snap: [-10, -30], func: stepTwo, active: true },
  },
  {
    id: 2,
    name: "three",
    value: { ycam: -38, snap: [-30, -50], func: stepThree, active: false },
  },
  {
    id: 3,
    name: "four",
    value: { ycam: -58, snap: [-50, -70], func: stepFour, active: false },
  },
  {
    id: 4,
    name: "five",
    value: { ycam: -78, snap: [-70, -90], func: stepFive, active: false },
  },
];
let currentIndex = 0;
let isFunctionExecuted = false; // Variable pour suivre si une fonction a été utilisée
let timer; // Variable pour stocker le temporisateur
let startY; // Variable pour stocker la position Y de départ du toucher
let rotatePlanet;
const handleScroll = (event) => {
  if (isFunctionExecuted) {
    // Si une fonction a été utilisée récemment, ignore le scroll
    return;
  }

  // Détermine la variation du défilement de la molette de la souris sur l'axe Y
  let deltaY;
  if (event.deltaY !== undefined) {
    deltaY = event.deltaY;
  } else if (event.touches !== undefined && event.touches[0] !== undefined) {
    if (startY === undefined) {
      startY = event.touches[0].clientY; // Définir la position Y de départ du toucher
      return; // Sortir de la fonction car nous avons seulement besoin de startY pour le premier toucher
    } else {
      deltaY = event.touches[0].clientY - startY; // Calculer la variation de défilement Y
      startY = event.touches[0].clientY; // Mettre à jour la position Y de départ du toucher
    }
  }

  // Détermine le sens du défilement en fonction de la variation
  let scrollDirection;
  if (deltaY > 0) {
    scrollDirection = "down";
  } else if (deltaY < 0) {
    scrollDirection = "up";
  } else {
    return; // Si deltaY est égal à zéro, il n'y a pas de défilement à traiter
  }

  // Met à jour l'index en fonction du sens du défilement
  if (scrollDirection === "down") {
    if (currentIndex < steps.length - 1) {
      currentIndex++; // Incrémente l'index si ce n'est pas la limite supérieure
    }
  } else if (scrollDirection === "up") {
    if (currentIndex > 0) {
      currentIndex--; // Décrémente l'index si ce n'est pas la limite inférieure
    }
  }

  // Applique la valeur ycam correspondante
  const newYcam = steps[currentIndex].value.ycam;

  // Exécute la fonction func correspondante
  const funcToExecute = steps[currentIndex].value.func;
  funcToExecute();

  // Empêche l'utilisation du scroll pendant 1 seconde
  isFunctionExecuted = true;
  timer = setTimeout(() => {
    isFunctionExecuted = false;
  }, 1500);
};

onMounted(() => {
  // Ajoute un écouteur d'événements pour détecter le défilement
  window.addEventListener("wheel", handleScroll);
  // Ajoute un écouteur d'événements pour détecter le début du toucher
  window.addEventListener("touchstart", (event) => {
    startY = event.touches[0].clientY;
  });
});

onUnmounted(() => {
  // Retire l'écouteur d'événements lors de la destruction du composant
  window.removeEventListener("wheel", handleScroll);
  window.removeEventListener("touchstart", handleScroll);
});

onLoop(({ delta }) => {
  if (camRef.value.position.z > 10) {
    camRef.value.position.z -= delta * 100;
  }

  if (groupRef.value) {
    groupRef.value.rotation.y += 0.005;
  }
});
function stepOne() {
  oneStep.value = true;
  twoStep.value = false;
  threeStep.value = false;
  fourStep.value = false;
  fiveStep.value = false;

  $anime({
    targets: camRef.value.position,
    y: 2,
    duration: 1000,
    easing: "linear",
  });
}
function stepTwo() {
  oneStep.value = false;
  twoStep.value = true;
  threeStep.value = false;
  fourStep.value = false;
  fiveStep.value = false;
  $anime({
    targets: camRef.value.position,
    y: -18,
    duration: 1000,
    easing: "linear",
  });
}
function stepThree() {
  oneStep.value = false;
  twoStep.value = false;
  threeStep.value = true;
  fourStep.value = false;
  fiveStep.value = false;

  $anime({
    targets: camRef.value.position,
    y: -38,
    duration: 1000,
    easing: "linear",
  });
}
function stepFour() {
  oneStep.value = false;
  twoStep.value = false;
  threeStep.value = false;
  fourStep.value = true;
  fiveStep.value = false;

  $anime({
    targets: camRef.value.position,
    y: -58,
    duration: 1000,
    easing: "linear",
  });
}
function stepFive() {
  oneStep.value = false;
  twoStep.value = false;
  threeStep.value = false;
  fourStep.value = false;
  fiveStep.value = true;

  $anime({
    targets: camRef.value.position,
    y: -78,
    duration: 1000,
    easing: "linear",
  });
}
</script>

<style scoped>
body,
html,
#app {
  position: fixed;
}
html,
body {
  height: 100%;
  width: 100%;
  overflow: auto;
}
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
