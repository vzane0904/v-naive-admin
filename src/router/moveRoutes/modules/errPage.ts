export default {
  // 错误页
  403: () => import('@/views/errPage/403/index.vue'),
  404: () => import('@/views/errPage/404/index.vue'),
  500: () => import('@/views/errPage/500/index.vue'),
}
