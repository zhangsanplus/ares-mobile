/**
 * @name createVitePlugins
 * @description 封装plugins数组统一调用
 */
import path from 'node:path'
import process from 'node:process'
import vueLegacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import type { PluginOption } from 'vite'

export function pathResolve(dir: string) {
  return path.resolve(process.cwd(), '.', dir)
}

export function createVitePlugins(viteEnv: ImportMetaEnv, isBuild: boolean) {
  const { VITE_APP_ENV, VITE_DEV_TOOLS_SCRIPT } = viteEnv
  const isProd = VITE_APP_ENV === 'production'

  const vitePlugins: PluginOption[] = [
    vue(),
    vueJsx(),
    UnoCSS(),
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: [
        'vue',
        'vue/macros',
        '@vueuse/core',
      ],
      resolvers: [
        // 自动导入 vant 相关函数，如：ElMessage, ElMessageBox...
        VantResolver({
          importStyle: false,
        }),
      ],
      dts: pathResolve('types/auto-imports.d.ts'),
    }),
    Components({
      dirs: [pathResolve('src/components')],
      resolvers: [
        // 自动导入 vant 组件
        VantResolver({
          importStyle: false,
        }),
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ['mdi'],
        }),
      ],
      dts: pathResolve('types/components.d.ts'),
    }),
    Icons(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]',
      svgoOptions: isBuild,
    }),
    createHtmlPlugin({
      inject: {
        data: {
          injectScript: VITE_DEV_TOOLS_SCRIPT,
        },
      },
      minify: isProd,
    }),
    // setup name
    vueSetupExtend(),
  ]

  if (isBuild && isProd) {
    // 旧版浏览器支持
    vitePlugins.push(vueLegacy())
  }

  return vitePlugins
}
