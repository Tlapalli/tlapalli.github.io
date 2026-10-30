// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// ponytail: served from GitHub Pages under /ollin-site; with a custom domain, set `site` to it and drop `base`.
export default defineConfig({
  site: 'https://tlapalli.github.io',
  base: '/ollin-site',
  integrations: [
    starlight({
      title: 'Ollin',
      description: 'A fast 2D/2.5D game engine in TypeScript, with a small friendly API.',
      logo: { src: './src/assets/ollin.svg' },
      customCss: ['./src/styles/custom.css'],
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Tlapalli/ollin' }],
      editLink: { baseUrl: 'https://github.com/Tlapalli/ollin-site/edit/main/' },
      sidebar: [
        { label: 'Getting started', slug: 'getting-started' },
        { label: 'Guide', slug: 'guide' },
      ],
    }),
  ],
})
