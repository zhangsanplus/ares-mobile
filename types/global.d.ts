/**
 * 普通函数
 */
interface Fn<T = any, R = T> {
  (...arg: T[]): R
}

/**
 * 异步函数
 */
interface PromiseFn<T = any, R = T> {
  (...arg: T[]): Promise<R>
}

/**
 * 分页请求
 */
interface PagingRequest {
  pageNum: number
  pageSize: number
}

/**
 * 返回分页信息
 */
interface PagingResult<T> {
  count: number
  list: T
}

/**
 * 返回封装
 */
interface HttpResponse<T = unknown> {
  msg: string
  code: number
  data: T
}