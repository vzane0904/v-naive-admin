export default {
  // 首页
  homeComponent: () => import('@/views/home.vue'),
  // 权限
  permissionWebComponent: () => import('@/views/permission/web/index.vue'),
  permissionBackComponent: () => import('@/views/permission/back/index.vue'),
  // 功能
  functionHttpComponent: () => import('@/views/function/http/index.vue'),
  functionSessionTimeoutComponent: () =>
    import('@/views/function/sessionTimeout/index.vue'),
  functionCopyComponent: () => import('@/views/function/copy/index.vue'),
  functionMsgComponent: () => import('@/views/function/msg/index.vue'),
  functionFullScreenComponent: () =>
    import('@/views/function/fullScreen/index.vue'),
  // 多级菜单
  levelMenu1Menu1Component: () => import('@/views/level/menu1/menu1/index.vue'),
  levelMenu2Component: () => import('@/views/level/menu2.vue'),
  // 系统管理
  systemAccountComponent: () => import('@/views/system/user/index.vue'),
  systemRoleComponent: () => import('@/views/system/role/index.vue'),
  systemMenuComponent: () => import('@/views/system/menu/index.vue'),
  systemDeptComponent: () => import('@/views/system/dept/index.vue'),
  systemChangePasswordComponent: () =>
    import('@/views/system/changePassword/index.vue'),
  // 关于
  aboutComponent: () => import('@/views/system/about/index.vue'),
}
