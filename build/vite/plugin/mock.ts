import { viteMockServe } from 'vite-plugin-mock'
export const mock = (
  isOPen: boolean, //开发环境开启mock
  prodMock: boolean, //生产环境开启mock
  isBuild: boolean, //当前运行环境 true => build FALSE => serve
  _command: String,
) => {
  return viteMockServe({
    ignore: /^_/,
    mockPath: 'mock',
    prodEnabled: isBuild && prodMock, // 生产打包开关
    localEnabled: isOPen && !isBuild,
    logger: true, //是否在控制台显示请求日志
    supportTs: true, //打开后，可以读取 ts 文件模块。 打开后将无法监视.js 文件
    injectCode: `
    import { setupProdMockServer } from '/mock/_createProductionServer';

    setupProdMockServer();
    `, // 这段不走 vite 浏览器阶段编译，是纯 esbuild 编译
  })
}
