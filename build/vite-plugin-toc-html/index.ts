import fs from 'node:fs'
import path from 'node:path'
import { readPagesJson, updatePagesJson } from './pages'
import type { Plugin } from 'vite'

interface Options {
  enabled: boolean
}

export default (options: Options): Plugin => {
  let outDir: string

  return {
    name: 'vite-plugin-toc-html',
    config(config, { command }) {
      if (command === 'build') {
        outDir = config.build?.outDir || 'dist'
      } else {
        updatePagesJson()
      }
    },
    configureServer(server) {
      if (options.enabled) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/__toc__.html') {
            res.setHeader('Content-Type', 'text/html')
            res.end(getHTML())
          } else {
            next()
          }
        })
      }
    },
    closeBundle() {
      // 是否输出 __toc__.html 页面到打包目录
      if (options.enabled) {
        fs.writeFileSync(`${outDir}/__toc__.html`, getHTML())
      }
    },
  }
}

function getHTML() {
  const data = readPagesJson()
  const template = fs.readFileSync(path.resolve(__dirname, './template.html'), 'utf-8')
  return template.replace(
    /<%-\s*VITE_INJECT_DATA\s*%>/g,
    `<script>\nconst pages = ${JSON.stringify(data, null, 2)}\n</script>`,
  )
}
