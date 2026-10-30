// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// GitHub Pages org site (repo Tlapalli/tlapalli.github.io). With a custom domain, change `site` (and add public/CNAME).
// Pages build links with `href()`, so a `base` path would also work if the site ever moves under one.
export default defineConfig({
  site: 'https://tlapalli.github.io',
  integrations: [
    starlight({
      title: 'Ollin docs',
      description: 'Documentation of Ollin, the TypeScript 2D/2.5D game engine by Tlapalli.',
      logo: { src: './src/assets/brand/ollin.png' },
      favicon: '/favicon.png',
      customCss: ['@fontsource-variable/unbounded', '@fontsource-variable/inter', './src/styles/docs.css'],
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Tlapalli/ollin' }],
      editLink: { baseUrl: 'https://github.com/Tlapalli/tlapalli.github.io/edit/main/' },
      sidebar: [
        { label: 'Getting started', slug: 'docs/getting-started' },
        { label: 'Guide', slug: 'docs/guide' },
      ],
    }),
  ],
})
