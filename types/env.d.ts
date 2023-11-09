interface ImportMetaEnv {
  /** 环境变量 */
  VITE_APP_ENV: 'production' | 'development' | 'test'

  /** 开发服务端口号 */
  VITE_DEV_PORT: number

  /** 开发代理路径 */
  VITE_DEV_PROXY_PATH?: string

  /** 开发代理地址 */
  VITE_DEV_PROXY_TARGET?: string

  /** 调试工具 eruda */
  VITE_DEV_TOOLS: 'true' | 'false'

  /** 打包生成的文件目录 */
  VITE_BUILD_OUTPUT_DIR: string

  /** 接口地址 */
  VITE_API_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
