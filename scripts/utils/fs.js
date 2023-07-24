const path = require('node:path')
const process = require('node:process')
const fs = require('fs-extra')

/**
 * 目录配置
 */
const pagesJson = path.resolve(process.cwd(), 'pages.json')

/**
 * 读取 pages.json
 */
function readPagesJsonSync() {
  if (fs.pathExistsSync(pagesJson)) {
    const data = fs.readJsonSync(pagesJson)
    return Array.isArray(data) ? data : []
  }
  return []
}

/**
 * 写入 pages.json
 */
function writePagesJsonSync(data) {
  return fs.writeJsonSync(pagesJson, data, { spaces: 2 })
}

module.exports = {
  ...fs,
  readPagesJsonSync,
  writePagesJsonSync,
}
