import presetRemToPx from '@unocss/preset-rem-to-px'
import {
  defineConfig,
  presetAttributify,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

/**
 * 官方预设：https://alfred-skyblue.github.io/unocss-docs-cn/presets/
 * 调试地址：http://localhost:2023/__unocss.html
 * 开发调试：https://unocss.dev/tools/inspector
 */

export default defineConfig({
  presets: [
    // 默认预设
    presetUno(),
    // 启用属性化模式的其他规则
    presetAttributify(),
    // 将 rem 转换为 px
    presetRemToPx({
      // baseFontSize: 4, // 1rem = 4px
    }),
  ],
  transformers: [
    // 用于 CSS 指令（如 @apply）的转换器
    transformerDirectives(),
    // 用于 Windi CSS 的变体组转换器
    transformerVariantGroup(),
  ],
  theme: {
    colors: {
      primary: '#165dff',
      success: '#00b42a',
      warning: '#faad14',
      danger: '#f53f3f',
    },
  },
  shortcuts: {
    btn: 'px-4 py-2 flex items-center rounded-1 border-none text-white bg-primary hover:(bg-primary/70) active:(bg-primary/90)',
  },
})
