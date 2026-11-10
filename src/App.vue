<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import {
  Cartesian3,
  EllipsoidTerrainProvider,
  ImageryLayer,
  OpenStreetMapImageryProvider,
  TileMapServiceImageryProvider,
  Viewer,
  buildModuleUrl,
} from 'cesium'
import 'cesium/Build/Cesium/Widgets/widgets.css'

const globeContainer = ref<HTMLDivElement>()
let viewer: Viewer | undefined

onMounted(() => {
  viewer = new Viewer(globeContainer.value!, {
    animation: false,
    baseLayerPicker: false,
    baseLayer: ImageryLayer.fromProviderAsync(
      TileMapServiceImageryProvider.fromUrl(
        buildModuleUrl('Assets/Textures/NaturalEarthII'),
      ),
    ),
    geocoder: false,
    homeButton: true,
    infoBox: false,
    navigationHelpButton: true,
    requestRenderMode: true,
    sceneModePicker: true,
    shouldAnimate: false,
    terrainProvider: new EllipsoidTerrainProvider(),
    timeline: false,
  })

  viewer.imageryLayers.add(
    new ImageryLayer(
      new OpenStreetMapImageryProvider({
        url: 'https://tile.openstreetmap.org/',
      }),
    ),
  )

  viewer.camera.setView({
    destination: Cartesian3.fromDegrees(116.4074, 39.9042, 20_000_000),
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
