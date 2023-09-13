module.exports = {
  plugins: {
    // 这里设置设计稿宽度375，是为了与vant统一
    // 其他尺寸的设计稿可能需要进行调整
    // 如果你使用蓝湖，可自定义尺寸为375：https://support.lanhuapp.com/5612/2a6d/6949
    'postcss-px-to-viewport-8-plugin': {
      viewportWidth: 375,
      mediaQuery: true,
    },
  },
};
