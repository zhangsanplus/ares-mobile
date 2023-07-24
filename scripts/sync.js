const path = require('node:path')
const process = require('node:process')
const colors = require('kolorist')
const fs = require('./utils/fs')

/**
 * 同步页面路由目录
 * 读取 pages 和 public 文件夹下面的 html 文件后写入到 pages.json 中
 */

try {
  const root = process.cwd()
  const pagesHtmlFiles = getHtmlFilesList(path.resolve(root, './src/pages'))
  const staticHtmlFiles = getHtmlFilesList(path.resolve(root, './public'))
  const pagesJson = fs.readPagesJsonSync()
  const allHtmlFiles = [...pagesHtmlFiles, ...staticHtmlFiles]
  const newPages = []

  allHtmlFiles
    .sort((a, b) => a.localeCompare(b))
    .forEach((name) => {
      const page = pagesJson.find(i => i.path === name)
      if (!page) {
        newPages.push({
          path: name,
          title: name,
        })
      } else {
        newPages.push(page)
      }
    })

  fs.writePagesJsonSync(newPages)
  console.log(colors.green('✨目录同步完成！'))
} catch (error) {
  console.error(error)
}

/**
 * 读取文件夹下面所有 html 文件
 * @param {*} folderPath
 * @returns
 */
function getHtmlFilesList(folderPath) {
  return fs
    .readdirSync(folderPath)
    .filter(file => file.endsWith('.html'))
    .filter(i => i !== '__nav__.html')
    .map(i => i.replace(/\.html/, ''))
}