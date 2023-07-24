/**
 * 获取当前页面的URL参数
 */
export function getCurrentURLParams(): Map<string, string> {
  const params = new Map<string, string>()

  new URLSearchParams(window.location.search).forEach((value, key) => {
    params.set(key, value)
  })

  return params
}

/**
 * 获取指定范围内的随机整数
 */
export function randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min)
}

/**
 * sleep
 */
export function sleep(ms = 800) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * isAndroid
 */
export function isAndroid() {
  return /Android/i.test(navigator.userAgent)
}