<template>
  <TresGroup :position="[0, 0, 0]">
    <levioso
      :speed="0.5"
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
        >
          <MeshGlassMaterial color="black" />
        </Text3D>
      </Suspense>
    </levioso>
    <levioso
      :speed="0.5"
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
        >
          <MeshGlassMaterial color="black" />
        </Text3D>
      </Suspense>
    </levioso>
    <levioso
      :speed="0.5"
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
        >
          <MeshGlassMaterial color="black" />
        </Text3D>
      </Suspense>
    </levioso>
    <levioso
      :speed="0.5"
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
        >
          <MeshGlassMaterial color="black" />
        </Text3D>
      </Suspense>
    </levioso>
    <levioso
      :speed="0.5"
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
        >
          <MeshGlassMaterial color="black" />
        </Text3D>
      </Suspense>
    </levioso>
    <levioso
      :speed="0.5"
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
        >
          <MeshGlassMaterial color="black" />
        </Text3D>
      </Suspense>
    </levioso>
  </TresGroup>
</template>

<script lang="ts" setup></script>

<style></style>
