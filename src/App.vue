<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import {
  Cartesian3,
  EllipsoidTerrainProvider,
  ImageryLayer,
  OpenStreetMapImageryProvider,
  Viewer,
} from 'cesium'
import 'cesium/Build/Cesium/Widgets/widgets.css'

const globeContainer = ref<HTMLDivElement>()
let viewer: Viewer | undefined

onMounted(() => {
  viewer = new Viewer(globeContainer.value!, {
    animation: true,
    baseLayerPicker: false,
    geocoder: false,
    homeButton: true,
    baseLayer: new ImageryLayer(
      new OpenStreetMapImageryProvider({
        url: 'https://tile.openstreetmap.org/',
      }),
    ),
    infoBox: false,
    navigationHelpButton: true,
    sceneModePicker: true,
    terrainProvider: new EllipsoidTerrainProvider(),
    timeline: true,
  })

  viewer.camera.flyTo({
    destination: Cartesian3.fromDegrees(116.4074, 39.9042, 20_000_000),
    duration: 0,
  })
})

onBeforeUnmount(() => {
  viewer?.destroy()
  viewer = undefined
})
</script>

<template>
  <main class="globe-demo">
    <header class="intro">
      <p class="eyebrow">Vue 3 + Cesium</p>
      <h1>Interactive 3D Globe</h1>
      <p>Drag to rotate, scroll to zoom, and use the built-in Cesium controls to explore.</p>
    </header>
    <div ref="globeContainer" class="globe" aria-label="Interactive Cesium 3D globe" />
  </main>
</template>
