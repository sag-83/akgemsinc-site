/** Public file path that works on GitHub Pages and on the custom domain. */
export function asset(path: string) {
  const clean = path.replace(/^\//, '')
  return `${import.meta.env.BASE_URL}${clean}`
}
