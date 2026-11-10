# Cesium Vue Demo

A minimal Vue 3 + TypeScript + Vite page that displays an interactive Cesium 3D globe with standard Cesium controls.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Drag the globe to rotate it and use the mouse wheel to zoom.

## Production build

```bash
npm run build
npm run preview
```

The Vite configuration copies Cesium workers, assets, widgets, and third-party resources into `dist/cesium`. The demo uses OpenStreetMap's public tile endpoint and Cesium's ellipsoid terrain, so it does not require a private Cesium Ion token.
