import vueLegacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import eruda from 'vite-plugin-eruda'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import type { PluginOption } from 'vite'

/**
 * @name createVitePlugins
 * @description 封装plugins数组统一调用
 */
export function createVitePlugins(viteEnv: ImportMetaEnv, _isBuild: boolean) {
  const isProd = viteEnv.VITE_APP_ENV === 'production'

  const vitePlugins: PluginOption[] = [
    vue(),
    vueJsx(),
    UnoCSS(),
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue', 'vue-router', 'pinia', '@vueuse/core'],
      dts: 'types/auto-imports.d.ts',
    }),
    Components({
      dirs: [], // 避免解析到src/components
      resolvers: [
        VantResolver({ importStyle: false }),
        IconsResolver({
          customCollections: ['custom'],
        }),
      ],
      dts: 'types/components.d.ts',
    }),
    // https://github.com/unplugin/unplugin-icons
    Icons({
      compiler: 'vue3',
      autoInstall: true,
      defaultStyle: 'vertical-align: -0.15em;fill: currentcolor;',
      customCollections: {
        custom: FileSystemIconLoader('src/icons'),
      },
      iconCustomizer(collection, icon, props) {
        props.width = '1em'
        props.height = '1em'
      },
    }),
    vueSetupExtend(),
  ]

  if (viteEnv.VITE_DEV_TOOLS === 'true') {
    vitePlugins.push(eruda())
  }

  if (isProd) {
    // 旧版浏览器支持
    vitePlugins.push(vueLegacy())
  }

  return vitePlugins
}
