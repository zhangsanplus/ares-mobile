const path = require('node:path')
const process = require('node:process')
const colors = require('kolorist')
const { renderVueFile, renderMainFile, renderHtmlFile } = require('./template')
const fs = require('./utils/fs')

console.log(
  colors.blue('请输入新页面信息: '),
  colors.gray('路由名(kebab-case)+空格+中文标题(可选)'),
)

process.stdin.on('data', async (chunk) => {
  // 输入信息
  const inputValue = String(chunk).trim().toString()
  const [inputPath, inputName] = inputValue.split(' ')
  const pagePath = convertKebabCase(inputPath)
  const pageName = inputName || pagePath

  if (!pagePath) {
    console.log(colors.red('路由名必填，请重新输入'))
    return
  }

  // 多页面根目录
  const root = path.resolve(process.cwd(), './src/pages')
  const htmlFile = path.resolve(root, `${pagePath}.html`)
  const pageDir = path.resolve(root, pagePath)
  const vueFile = path.resolve(pageDir, 'App.vue')
  const entryFile = path.resolve(pageDir, 'main.ts')

  // 判断 HTML 文件夹是否存在
  const htmlExists = fs.pathExistsSync(htmlFile)
  if (htmlExists) {
    console.log(colors.red(`页面\`${pagePath}\`已存在，请重新输入`))
    return
  }

  try {
    await fs.mkdirs(pageDir)

    console.log()
    console.log(
      `正在创建 html 文件 ${colors.green('➜')} `,
      colors.blue(htmlFile),
    )
    await fs.outputFile(htmlFile, renderHtmlFile(pagePath, pageName))

    console.log(
      `正在创建 vue 文件  ${colors.green('➜')} `,
      colors.blue(vueFile),
    )
    await fs.outputFile(vueFile, renderVueFile(pagePath, pageName))

    console.log(
      `正在创建 main 文件 ${colors.green('➜')} `,
      colors.blue(entryFile),
    )
    await fs.outputFile(entryFile, renderMainFile(pagePath))

    await addPageInfo(pagePath, pageName)
    console.log()
    console.log(colors.green('✨创建完成！'))
  } catch (e) {
    console.log(colors.red(e.message))
  }

  process.stdin.emit('end')
})

process.stdin.on('end', () => {
  process.exit()
})

/**
 * CamelCase 命名转成 kebab-case 命名
 */
function convertKebabCase(str) {
  return str.replace(/[A-Z]/g, i => `-${i.toLowerCase()}`)
}

/**
 * 添加新的页面信息
 */
async function addPageInfo(pagePath, pageName) {
  const data = fs.readPagesJsonSync()
  data.push({
    path: pagePath,
    title: pageName,
  })
  return fs.writePagesJsonSync(data)
}
