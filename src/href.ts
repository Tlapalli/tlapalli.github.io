/** Prefixes a site path with the configured base (none today; GitHub Pages serves the site at the root). */
export const href = (path: string) => import.meta.env.BASE_URL.replace(/\/$/, '') + path
