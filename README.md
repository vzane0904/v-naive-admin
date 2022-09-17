<div align="center"> <a href="https://github.com/zane0904/v-naive-admin"> <img alt="VNaive" style="height:240px;"  src="./src/assets/svg/logo.svg"> </a> <br> <br>

[![license](https://img.shields.io/github/license/anncwb/vue-vben-admin.svg)](LICENSE)

<p align="center">
    <a href="https://github.com/vuejs/core">
        <img src="https://img.shields.io/badge/Vue3.2.31-brightgreen.svg">
    </a>
    <a href="https://www.naiveui.com/zh-CN/light">
        <img src="https://img.shields.io/badge/Naive--ui-^2.31.1-brightgreen.svg">
    </a>
        <a href="https://github.com/vuejs/pinia">
        <img src="https://img.shields.io/badge/Pinia-^2.0.12-brightgreen.svg">
    </a>
    <a href="https://github.com/vitejs/vite">
        <img src="https://img.shields.io/badge/Vite-^2.9.15-brightgreen.svg">
    </a>
    <a href="https://github.com/nuysoft/Mock">
        <img src="https://img.shields.io/badge/mockjs-^1.1.0-brightgreen.svg">
    </a>
  	<a href="https://github.com/zane0904/v-naive-admin/blob/master/LICENSE">
        <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg">
    </a>
</p>
<h1>V Naive Admin</h1>
</div>

**English** | [中文](./README.zh-CN.md)

## brief introduction

V-Naive Admin is a free and open source middle and back office template. The latest mainstream technologies such as' vue3 vite2 TypeScript 'have been used to develop the out of the box front-end solution for the middle and back ends. I am writing an open source project for the first time, and I am also in a learning stage. The code may not be written gracefully. If you have better suggestions for my code and hope you can put forward a valuable button, I will humbly learn. Thank you.

## security

[![OSCS Status](https://www.oscs1024.com/platform/badge/zane0904/v-naive-admin.svg?size=small)](https://www.murphysec.com/dr/1vtzlp7pg8nXvdUE47)

We have accessed [OSCS Murphy Security Scan](https://www.murphysec.com/dr/1vtzlp7pg8nXvdUE47)The admin source code has not been scanned out of any risk items. More than 100% of the items are harmless to humans and animals! You can use it with confidence. Of course, if you don't trust, we recommend that you read the clone admin source code before using it. We are 100% open source, and you can see if there are risks.

## characteristic

- 🎉 **Latest technology stack**：Developed using Vue3/Vite3 and other front-end cutting-edge technologies
- 🎉 **TypeScript**: Language of application level JavaScript
- 🎉 **Components** (Under development) Secondary encapsulation of multiple commonly used components
- 🎉 **jurisdiction** Built in multiple dynamic routing permission generation schemes
- 🎉 **theme**：Free, flexible and configurable theme
- 🎉 **internationalization**：Built in internationalization scheme
- 🎉 **Mock data** Built in Mock data scheme
- 🎉 **Naive-ui** A new UI promoted by Youda, fully TypeScript written, with many components, convenient theme configuration and free use
- 🎉 **Pinia** Pinia is Vue's repository. It has the same functions as Vuex, and is more comfortable than Vuex in ease of use. You can't put down the code prompt
- 🎉 **axios** Easy to use, concise and efficient http library
- 🎉 **Eslint** Built in code development specification to solve the problem of writing style inconsistency between multiple developers

## Online preview

- [V-Naive-Admin](https://www.mmxxn.cn/) - Full Chinese website

Test account: Admin / Pass123456!

## Completed

✅ Basic functions of background management system

✅ eslint husky prettier stylelint cz-customizable

✅ Three common routing modes ROLE / BACK / MOVE

✅ (Dark / Light)theme / System theme / Top bar theme / Menu Theme

✅ Automatically introduce most UI components/custom global (src/components/\*) components Icon / plug-in Api Reduce the number of imports

✅ The secondary packaging axios is simpler to use, and multiple functions are added to help development [see README](./src/http/README.md)

✅ Support Mock data independent of backend

✅ Pinia I don't know until I experience it (It's great to tell you secretly 🤭)

## To be completed

🔳 admin doc

🔳 update Vite3

🔳 Vue Router keepAlive

🔳 Vue Router animation

🔳 Visualize Vue Router configuration

🔳 Encapsulate common components

🔳 Vue-i18n project has completed plug-in configuration, and has not completed variable compilation

😭 Bug It must be necessary

🟡 To be supplemented...

# use Gitpod

Open the project in Gitpod (a free online development environment for GitHub) and start coding immediately

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/zane0904/v-naive-admin)

# docs

[Document address](http://doc.mmxxn.cn/)

## prepare

- [node](http://nodejs.org/)-[git](https://git-scm.com/)-[pnpm](https://pnpm.io/) - Project development environment
- [Vite](https://vitejs.dev/) - be familiar with `vite` characteristic
- [Vue3](https://v3.vuejs.org/) - be familiar with `Vue` Basic Grammar
- [Pinia](https://pinia.web3doc.top/) - `Pinia` Chinese documents
- [TypeScript](https://www.typescriptlang.org/) - be familiar with `TypeScript `Basic Grammar
- [Es6+](http://es6.ruanyifeng.com/) - be familiar with es6 Basic Grammar
- [Vue-Router-Next](https://next.router.vuejs.org/) - be familiar with `vue-router` Basic use
- [Naive UI](https://www.naiveui.com/zh-CN/light) - ui Basic use
- [Mock.js](http://mockjs.com/) - mockjs Official website

## Installation and use

- Get project code

```bash
git clone https://github.com/zane0904/v-naive-admin.git
```

- Installation Dependencies

```bash
cd v-naive-admin

pnpm install

```

- run

```bash
pnpm dev
```

- build

```bash
pnpm build
```

## Update Log

[CHANGELOG](./CHANGELOG.zh_CN.md)

## Project address

- [VNaive-admin](https://github.com/zane0904/v-naive-admin.git) - Full version

## How to contribute

You are very welcome to join [Mention one Issue](https://github.com/zane0904/v-naive-admin/issues/new) Or submit a Pull Request。

**Pull Request:**

1. Fork code!
2. Create your own branch: `git checkout -b feat/xxxx`
3. Submit your changes: `git commit -am 'feat(function): add xxxxx'`
4. Push your branch: `git push origin feat/xxxx`
5. Submit `pull request`

## Git Contribution submission specification

- reference resources [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) standard ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

- `feat` Add new functions
- `fix` Fix the problem / BUG
- `refactor` restructure
- `docs` Documentation/Notes
- `resou` Resource changes (add or delete src/assets resources)
- `style` The code style does not affect the running results
- `perf` Optimization/performance improvement
- `test` Test related
- `build` Construction process and external dependency changes (such as upgrading the npm package and modifying the webpack configuration)
- `ci` Continuous integration
- `chore` Dependent update/scaffold configuration modification, etc
- `revert` Undo Modification

## Browser support

The `Chrome 80+` browser is recommended for local development

Support modern browsers, not IE

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                                             not support                                                                                              |                                                                                            last 2 versions                                                                                             |                                                                                                  last 2 versions                                                                                                  |                                                                                                last 2 versions                                                                                                |                                                                                                last 2 versions                                                                                                |

## Relevant warehouse

If these plug-ins are helpful to you, they can be supported by a star

- [vite-plugin-mock](https://github.com/anncwb/vite-plugin-mock) - Used for local and development environment data mock
- [vite-plugin-html](https://github.com/anncwb/vite-plugin-html) - Used for html template conversion and compression
- [vite-plugin-style-import](https://github.com/anncwb/vite-plugin-style-import) - Used for component library style import on demand
- [vite-plugin-theme](https://github.com/anncwb/vite-plugin-theme) - Used to switch color related configurations such as theme color online
- [vite-plugin-imagemin](https://github.com/anncwb/vite-plugin-imagemin) - Used to package compressed image resources
- [vite-plugin-compression](https://github.com/anncwb/vite-plugin-compression) - Used for packaging output. gz | Brotil file
- [vite-plugin-svg-icons](https://github.com/anncwb/vite-plugin-svg-icons) - Used to quickly generate svg sprite map
- [unplugin-vue-components/vite](https://github.com/antfu/unplugin-vue-components) - Automatically importing plug-ins saves a lot of import statements from the UI library
- [unplugin-auto-import/vite](https://github.com/antfu/unplugin-auto-import) - Auto import plug-in Api saves a lot of import statements of UI library
- [rollup-plugin-visualizer](https://github.com/btd/rollup-plugin-visualizer) - Rollup Packaging Volume Analysis Plug in

## Maintainer

[@zane0904](https://github.com/zane0904)

## communication

`V-Naive-Admin` It is a completely open source and free project, which helps developers develop medium and large management systems more easily, and also provides QQ communication group usage questions. Welcome to ask questions in the group.

- [GitHub discussions](https://github.com/zane0904/v-naive-admin/discussions)

- QQ group `None`

## License

[![license](https://img.shields.io/github/license/anncwb/vue-vben-admin.svg)](LICENSE)

[MIT © VNaive-20222](./LICENSE)

This project can be used for commercial purposes free of charge. Please abide by the MIT agreement and retain the author's technical support statement.
