/*
  1.MOVE模式 ->
    - router/backRoutes/* 通过变量定义路由名称 后端返回动态菜单时不需要返回页面路径,返回变量名称就可以,配合path 拿到变量名生成路由
      - 优点: 如果前端页面路径有改动不需要在去通过菜单配置修改组件页面地址
      - 缺点: 对于查找某个路由页面比较麻烦，需要先看接口返回的路由变量名称，通过名称在去查找
  2.ROLE模式 router/roleRoutes/* 自定义路由，通过角色去判断路由是否能访问
  2.BACK模式 后端完全返回，前端做动态处理
*/
export enum RoleEnum {
  BACK = 'BACK',
  ROLE = 'ROLE',
  MOVE = 'MOVE',
}
export type roleModel = `${RoleEnum}`
