import path from 'node:path'
import process from 'node:process'
import fs from 'fs-extra'

interface PageInfo {
  path: string
  title: string
}

/**
 * 获取页面路由目录
 * 读取 pages 和 public 文件夹下面的 html 文件
 */
export function getPages() {
  const pagesHtmlFiles = getHtmlFilesList('./src/pages')
  const staticHtmlFiles = getHtmlFilesList('./public')
  const allHtmlFiles = [...pagesHtmlFiles, ...staticHtmlFiles]
  return allHtmlFiles.sort((a, b) => a.path.localeCompare(b.path))
}

/**
 * 同步 pages.json
 */
export function updatePagesJson() {
  writePagesJson(getPages())
  console.log('\x1B[32m\n✨目录同步完成！\n\x1B[0m')
}

/**
 * 读取 pages.json
 */
export function readPagesJson() {
  const pagesJson = path.resolve(process.cwd(), 'pages.json')
  if (!fs.pathExistsSync(pagesJson)) return []

  const data = fs.readJsonSync(pagesJson)
  return Array.isArray(data) ? data : []
}

/**
 * 写入 pages.json
 */
function writePagesJson(data: PageInfo[]) {
  const pagesJson = path.resolve(process.cwd(), 'pages.json')
  return fs.writeJsonSync(pagesJson, data, { spaces: 2 })
}

/**
 * 读取文件夹下面所有 html 文件
 * @param {*} folderPath
 */
function getHtmlFilesList(folderPath: string): PageInfo[] {
  const fullPath = path.resolve(process.cwd(), folderPath)
  return fs.readdirSync(fullPath)
    .filter(file => file.endsWith('.html'))
    .map((fileName) => {
      const filePath = `${fullPath}/${fileName}`
      const content = fs.readFileSync(filePath, 'utf-8')
      const titleMatch = /<title>(.*?)<\/title>/s.exec(content)
      const path = fileName.replace(/\.html/, '')
      const title = titleMatch?.[1].trim() ?? path
      return { path, title }
    })
}
