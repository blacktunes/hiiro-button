import type { Plugin } from 'vite'
import path from 'path'

export function importStylus(pathToStylFile: string): Plugin {
  return {
    name: 'vite-stylus-import-plugin',
    async transform(code, id) {
      if (/.stylus$/g.test(id)) {
        return {
          code: `
            @import "${path.resolve(__dirname, pathToStylFile)}"

            ${code}
          `,
          map: null,
        }
      }
      return null
    },
    enforce: "pre"
  }
}
