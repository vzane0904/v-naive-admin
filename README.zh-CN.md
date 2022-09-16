<div align="center"> <a href="https://github.com/zane0904/v-naive-admin"> <img alt="VNaive"  src="https://raw.githubusercontent.com/zane0904/VNaive/master/src/assets/svg/logo.svg"> </a> <br> <br>

[![license](https://img.shields.io/github/license/anncwb/vue-vben-admin.svg)](LICENSE)

<h1>VNaive admin</h1>
</div>

**中文** | [English](./README.md)

[![license](https://img.shields.io/github/license/anncwb/vue-vben-admin.svg)](LICENSE)

<h1>安全</h1>

[![OSCS Status](https://www.oscs1024.com/platform/badge/zane0904/v-naive-admin.svg?size=small)](https://www.murphysec.com/dr/1vtzlp7pg8nXvdUE47)

我们已接入 [oscs 墨菲安全扫描](https://www.murphysec.com/dr/1vtzlp7pg8nXvdUE47) ，admin 源码中未被扫描出任何风险项，超越 100%的项目，确保人畜无害！大家可以放心使用，当然您如果扔不放心，我们推荐您在使用前 clone admin 源码亲自阅读一番，我们是 100%开源，是否有风险您一看便知。

## 简介

VNaive Admin 是一个免费开源的中后台模版。使用了最新的`vue3 vite2 TypeScript`等主流技术开发，开箱即用的中后台前端解决方案，也可用于学习参考。

## 特性

- 🎉 **最新技术栈**：使用 Vue3/vite3 等前端前沿技术开发
- 🎉 **TypeScript**: 应用程序级 JavaScript 的语言
- 🎉 **组件** 二次封装了多个常用的组件(正在开发)
- 🎉 **权限** 内置多种动态路由权限生成方案
- 🎉 **主题**：自由灵活可配置的主题
- 🎉 **国际化**：内置国际化方案
- 🎉 **Mock 数据** 内置 Mock 数据方案
- 🎉 **Naive-ui** 尤大亲推的一款新 UI,完全 TypeScript 编写、组件多、主题配置方便、使用自由
- 🎉 **pinia** Pinia 是 Vue 的存储库，与 Vuex 功能相同，在使用方便比 Vuex 更舒服，代码提示让你爱不释手
- 🎉 **Eslint** 内置代码开发规范,解决多人开发之间书写风格不一致问题

## 预览

- [V-Naive-Admin](https://www.mmxxn.cn/) - 完整版中文站点

测试账号: Admin / Pass123456!

# 使用 Gitpod

在 Gitpod（适用于 GitHub 的免费在线开发环境）中打开项目，并立即开始编码.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/zane0904/v-naive-admin)

# 文档

[文档地址](http://doc.mmxxn.cn/)

## 准备

- [node](http://nodejs.org/)-[git](https://git-scm.com/)-[pnpm](https://pnpm.io/) -项目开发环境
- [Vite](https://vitejs.dev/) - 熟悉 `vite` 特性
- [Vue3](https://v3.vuejs.org/) - 熟悉 `Vue` 基础语法
- [Pinia](https://pinia.web3doc.top/) - `Pinia` 中文文档
- [TypeScript](https://www.typescriptlang.org/) - 熟悉 `TypeScript `基本语法
- [Es6+](http://es6.ruanyifeng.com/) - 熟悉 es6 基本语法
- [Vue-Router-Next](https://next.router.vuejs.org/) - 熟悉 `vue-router` 基本使用
- [Naive UI](https://www.naiveui.com/zh-CN/light) - ui 基本使用
- [Mock.js](http://mockjs.com/) - mockjs 官网

## 安装使用

- 获取项目代码

```bash
git clone https://github.com/zane0904/v-naive-admin.git
```

- 安装依赖

```bash
cd v-naive-admin

pnpm install

```

- 运行

```bash
pnpm dev
```

- 打包

```bash
pnpm build
```

## 更新日志

[CHANGELOG](./CHANGELOG.zh_CN.md)

## 项目地址

- [VNaive-admin](https://github.com/zane0904/v-naive-admin.git) - 完整版

## 如何贡献

非常欢迎你的加入！[提一个 Issue](https://github.com/zane0904/v-naive-admin/issues/new) 或者提交一个 Pull Request。

**Pull Request:**

1. Fork 代码!
2. 创建自己的分支: `git checkout -b feat/xxxx`
3. 提交你的修改: `git commit -am 'feat(function): add xxxxx'`
4. 推送您的分支: `git push origin feat/xxxx`
5. 提交`pull request`

## Git 贡献提交规范

- 参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范 ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

- `feat` 增加新功能
- `fix` 修复问题/BUG
- `refactor` 重构
- `docs` 文档/注释
- `resou` 资源变更（新增或删除 src/assets 资源
- `style` 代码风格相关无影响运行结果的
- `perf` 优化/性能提升
- `test` 测试相关
- `build` 构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等
- `ci` 持续集成
- `chore` 依赖更新/脚手架配置修改等
- `revert` 撤销修改

## 浏览器支持

本地开发推荐使用`Chrome 80+` 浏览器

支持现代浏览器, 不支持 IE

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                                             not support                                                                                              |                                                                                            last 2 versions                                                                                             |                                                                                                  last 2 versions                                                                                                  |                                                                                                last 2 versions                                                                                                |                                                                                                last 2 versions                                                                                                |

## 相关仓库

如果这些插件对你有帮助，可以给一个 star 支持下

- [vite-plugin-mock](https://github.com/anncwb/vite-plugin-mock) - 用于本地及开发环境数据 mock
- [vite-plugin-html](https://github.com/anncwb/vite-plugin-html) - 用于 html 模版转换及压缩
- [vite-plugin-style-import](https://github.com/anncwb/vite-plugin-style-import) - 用于组件库样式按需引入
- [vite-plugin-theme](https://github.com/anncwb/vite-plugin-theme) - 用于在线切换主题色等颜色相关配置
- [vite-plugin-imagemin](https://github.com/anncwb/vite-plugin-imagemin) - 用于打包压缩图片资源
- [vite-plugin-compression](https://github.com/anncwb/vite-plugin-compression) - 用于打包输出.gz|.brotil 文件
- [vite-plugin-svg-icons](https://github.com/anncwb/vite-plugin-svg-icons) - 用于快速生成 svg 雪碧图

## 维护者

[@VNaive](https://github.com/zane0904)

## 交流

`V-Naive-Admin` 是完全开源免费的项目，在帮助开发者更方便地进行中大型管理系统开发，同时也提供 QQ 交流群使用问题欢迎在群内提问。

- QQ 群 `暂无`

## License

[MIT © VNaive-20222](./LICENSE)
