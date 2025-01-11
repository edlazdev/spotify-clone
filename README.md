# Spotify Clone - Astro

![just-the-basics](https://edlazdev.github.io/buckets/edlaz/img/spotify_clone.webp)

## 🚀 Tecnologías

- Astro 
- React
- Svelte
- Zustand
- Tailwind

## 🚀 Estructura

```
└── 📁src
    └── 📁components
        └── AsideMenu.astro
        └── Card.astro
        └── CardPlayButton.tsx
        └── Greeting.svelte
        └── MusicsTable.tsx
        └── MusicsTablePlay.tsx
        └── Player.tsx
        └── PlayerControlButtonBar.tsx
        └── PlayerCurrentSong.tsx
        └── PlayerSoundControl.tsx
        └── PlayerVolumeControl.tsx
        └── PlayerVolumeIconComponent.tsx
        └── PlayListItemCard.astro
        └── SideMenuCard.astro
        └── SideMenuItem.astro
        └── Slider.tsx
    └── 📁hooks
        └── UseCurrentMusic.ts
    └── 📁icons
        └── Home.astro
        └── index.ts
        └── Library.astro
        └── PauseIcon.tsx
        └── PlayerIcons.tsx
        └── PlayIcon.tsx
        └── Search.astro
        └── Time.astro
        └── TimeIcon.tsx
        └── VolumeIcons.tsx
        └── VolumeSilenceIcon.tsx
    └── 📁interfaces
        └── cards.ts
        └── index.ts
        └── player.ts
        └── store.ts
        └── SVGProps.ts
    └── 📁layouts
        └── Layout.astro
    └── 📁lib
        └── colors.ts
        └── data.ts
    └── 📁pages
        └── 📁api
            └── get-info-playlist.js
        └── index.astro
        └── 📁playlist
            └── [id].astro
    └── 📁services
        └── services.ts
    └── 📁store
        └── playerStore.ts
    └── env.d.ts
```

## Instalación

| Comandos                  | Acciones                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

