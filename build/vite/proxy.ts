import type { ProxyOptions } from 'vite'

type ProxyTargetList = Record<string, ProxyOptions>

export function createProxy(env: ImportMetaEnv) {
  const { VITE_PROXY_PATH, VITE_PROXY_TARGET } = env
  const proxy: ProxyTargetList = {}

  proxy[VITE_PROXY_PATH] = {
    target: VITE_PROXY_TARGET,
    changeOrigin: true,
    rewrite: path => path.replace(new RegExp(`^${VITE_PROXY_PATH}`), ''),
  }

  return proxy
}