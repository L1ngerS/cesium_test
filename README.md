# Cesium Vue Demo

A minimal Vue 3 + TypeScript + Vite page that displays an interactive Cesium 3D globe with standard Cesium controls.

## Included features

- Interactive 3D globe navigation with Cesium's home, scene-mode, and navigation-help controls.
- OpenStreetMap imagery for roads, place names, coastlines, and other public map data when the network can reach `tile.openstreetmap.org`.
- A locally packaged Cesium Natural Earth II base map below OpenStreetMap. It remains visible if OpenStreetMap tiles cannot load, without requiring a private token or an external image service.
- Static initial camera position, no timeline or clock animation, and request-driven rendering to avoid automatic camera movement and reduce idle CPU/GPU work.

The demo intentionally uses ellipsoid terrain, so it does not include elevation, mountains, or 3D terrain data.

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

The Vite configuration copies Cesium workers, assets, widgets, and third-party resources into `dist/cesium`. The demo does not require a private Cesium Ion token.
