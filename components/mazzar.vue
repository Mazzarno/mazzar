<template>
  <TresGroup :position="[0, 0, 0]">
    <levioso
      :speed="5"
      :rotation-factor="0.5"
      :float-factor="0.5"
      :range="[-0.025, 0.025]"
    >
      <Suspense>
        <Text3D
          text="M"
          font="/public/assets/poppins.json"
          center
          need-updates
          :position="[-3.5, 3, 0]"
          :size="1.75"
          color="#dee2e6"
          ref="mRef"
        ></Text3D>
      </Suspense>
    </levioso>
    <levioso
      :speed="5"
      :rotation-factor="0.5"
      :float-factor="0.5"
      :range="[-0.025, 0.025]"
    >
      <Suspense>
        <Text3D
          text="A"
          font="/public/assets/poppins.json"
          center
          need-updates
          :position="[-2, 3, 0]"
          :size="1.5"
          ref="aRef"
        ></Text3D>
      </Suspense>
    </levioso>
    <levioso
      :speed="5"
      :rotation-factor="0.5"
      :float-factor="0.5"
      :range="[-0.025, 0.025]"
    >
      <Suspense>
        <Text3D
          text="Z"
          font="/public/assets/poppins.json"
          center
          need-updates
          :position="[-0.5, 3, 0]"
          :size="1.5"
          ref="zRef"
        ></Text3D>
      </Suspense>
    </levioso>
    <levioso
      :speed="5"
      :rotation-factor="0.5"
      :float-factor="0.5"
      :range="[-0.025, 0.025]"
    >
      <Suspense>
        <Text3D
          text="Z"
          font="/public/assets/poppins.json"
          center
          need-updates
          :position="[1, 3, 0]"
          :size="1.5"
          ref="zzRef"
        ></Text3D>
      </Suspense>
    </levioso>
    <levioso
      :speed="5"
      :rotation-factor="0.5"
      :float-factor="0.5"
      :range="[-0.025, 0.025]"
    >
      <Suspense>
        <Text3D
          text="A"
          font="/public/assets/poppins.json"
          center
          need-updates
          :position="[2.5, 3, 0]"
          :size="1.5"
          ref="aaRef"
        ></Text3D>
      </Suspense>
    </levioso>
    <levioso
      :speed="5"
      :rotation-factor="0.5"
      :float-factor="0.5"
      :range="[-0.025, 0.025]"
    >
      <Suspense>
        <Text3D
          text="R"
          font="/public/assets/poppins.json"
          center
          need-updates
          :position="[4, 3, 0]"
          :size="1.5"
          ref="rRef"
        ></Text3D>
      </Suspense>
    </levioso>
  </TresGroup>
</template>

<script lang="ts" setup>
const { onLoop } = useRenderLoop()
const mRef = ref()
const aRef = ref()
const aaRef = ref()
const zRef = ref()
const zzRef = ref()
const rRef = ref()

onLoop(({ delta }) => {
  if (mRef.value) {
    mRef.value.value.rotation.y -= delta * 2
    aRef.value.value.rotation.y -= delta * 2
    zRef.value.value.rotation.y -= delta * 2
    zzRef.value.value.rotation.y -= delta * 2
    aaRef.value.value.rotation.y -= delta * 2
    rRef.value.value.rotation.y -= delta * 2
  }
})
</script>

<style></style>
