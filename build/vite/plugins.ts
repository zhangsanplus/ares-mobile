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
import eruda from 'vite-plugin-eruda'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import type { PluginOption } from 'vite'

/**
 * @name createVitePlugins
 * @description 封装plugins数组统一调用
 */
export function createVitePlugins(viteEnv: ImportMetaEnv, isBuild: boolean) {
  const { VITE_APP_ENV, VITE_DEV_TOOLS } = viteEnv
  const isProd = VITE_APP_ENV === 'production'

  const vitePlugins: PluginOption[] = [
    vue(),
    vueJsx(),
    UnoCSS(),
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue', 'vue/macros', 'vue-router', '@vueuse/core'],
      dts: 'types/auto-imports.d.ts',
    }),
    Components({
      dirs: [], // 避免解析到src/components
      resolvers: [
        VantResolver({
          importStyle: false,
        }),
        IconsResolver({
          enabledCollections: ['mdi'],
        }),
      ],
      dts: 'types/components.d.ts',
    }),
    Icons(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/icons')],
      symbolId: 'icon-[dir]-[name]',
      svgoOptions: isBuild,
    }),
    vueSetupExtend(),
  ]

  if (VITE_DEV_TOOLS === 'true') {
    vitePlugins.push(eruda())
  }

  if (isBuild && isProd) {
    // 旧版浏览器支持
    vitePlugins.push(vueLegacy())
  }

  return vitePlugins
}
