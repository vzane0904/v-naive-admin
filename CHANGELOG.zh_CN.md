## 1.2.0-beta.1(2022-12.24)

### 升级说明

- 移除 moment 时间插件 使用 dayjs
- 删除第二套登录模板
- 登录页右上角不在显示版本信息

### ✨ Features

- 更换 logo、README(logo)

### 🐛 Bug Fixes

- 使用动态路由时获取不到组件控制台给出 warn 提示

## 1.2.0-beta.0(2022-12.19)

### 升级说明

- 去掉 mock 数据使用接口数据
- 系统管理(用户/角色/菜单)增删改查权限控制
- 阿里字体图标资源不再放入项目使用 CDN 方式

### ✨ Features

- 全局组件 Modal/table/Descriptions 开发
- 用户头像更换

### 🐛 Bug Fixes

- 异步动态路由不再使用 import(`${componentName}`)方式改为 import.meta.glob 的方式加载
- pinia 数据调整
- github action dist 改为压缩包上传，防止传输过程丢包
- lodash 使用方式更改

## 1.1.1(2022-10.8)

### 升级说明

小问题不用在意

### ✨ Features

- 新增加载 loading
- 引入 init.css

### 🐛 Bug Fixes

## 1.1.0(2022-10.8)

### 升级说明

- Vite2 升级 Vite3
- src/config/settings.ts 配置项联动 pinia 数据
- 封装 Descriptions useDescription
- about Components
- 修复左侧菜单样式(折叠 / 展开 / 白色 / 深色)

### ✨ Features

### 🐛 Bug Fixes

- 修复 getEnv 方法返回数据类型
- 修复主题样式

## 1.0.1(2022-9.27)

### 升级说明

- .eslintrc.js 新增规则
- .gitignore 忽略 eslintcache 文件
- README.md 更新浏览器信息
- **APP_INFO** eslint-disable-next-line no-underscore-dangle
- 更新墨菲安全检测信息

## v 1.0.0 (2022-9.19)

### 升级说明

- v1.0.0 版本发布正式版
