import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import * as glob from 'glob'

// 找出 src/pages 下面的 html 模板，形成配置文件
export function entryPoints() {
  const htmlPaths = glob.sync('src/pages/*.html')
  const config: Record<string, string> = {}
  for (const htmlPath of htmlPaths) {
    if (fs.statSync(htmlPath).isFile()) {
      const { name } = path.parse(htmlPath)
      config[name] = path.resolve(process.cwd(), htmlPath).replace(/\\/g, '/')
    }
  }
  return config
}
