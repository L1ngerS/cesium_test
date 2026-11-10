import { fileURLToPath, URL } from 'node:url'
import { defineConfig, normalizePath } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteStaticCopy } from 'vite-plugin-static-copy'

const cesiumSource = normalizePath(
  fileURLToPath(
    new URL('./node_modules/cesium/Build/CesiumUnminified', import.meta.url),
  ),
)

export default defineConfig({
  plugins: [
    vue(),
    viteStaticCopy({
      targets: [
        { src: `${cesiumSource}/Workers/**/*`, dest: 'cesium/Workers' },
        { src: `${cesiumSource}/Assets/**/*`, dest: 'cesium/Assets' },
        { src: `${cesiumSource}/Widgets/**/*`, dest: 'cesium/Widgets' },
        { src: `${cesiumSource}/ThirdParty/**/*`, dest: 'cesium/ThirdParty' },
      ],
    }),
  ],
  define: {
    CESIUM_BASE_URL: JSON.stringify('/cesium/'),
  },
})
