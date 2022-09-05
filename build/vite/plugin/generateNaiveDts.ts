import { Plugin } from 'vite'
import path from 'path'
import fs from 'fs'

interface Options {
  /**
   * 生成的 dts 路径
   */
  dts: string

  /**
   * 追加的组件名称
   */
  includeNames?: string[]

  /**
   * 排除的组件名称
   */
  excludeNames?: string[]
}

/**
 * 自动生成 naive-ui 组件的 dts 挂在 global
 */
export function generateNaiveDts(options: Options): Plugin {
  const { dts, includeNames = [], excludeNames = [] } = options

  const pathResolve = (...args: string[]) =>
    path.resolve(process.cwd(), ...args)

  const getAllComponentsNameFromNaiveDts = async (str: string) => {
    const componentsNames: string[] = []

    const componentsDtsPaths = Array.from(str.matchAll(/'(.+?)';/gi)).map(
      (items) => {
        return pathResolve(
          './node_modules/naive-ui/es/',
          items?.[1] ?? '',
          './index.d.ts',
        )
      },
    )

    // promise allSettled read files
    const componentsDtsPromises = componentsDtsPaths.map((path) => {
      return new Promise<string>((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
          if (err) {
            reject(err)
          }
          resolve(data)
        })
      })
    })

    await Promise.allSettled(componentsDtsPromises).then((results) => {
      results.map((res) => {
        // find export start with N name
        if (res.status !== 'fulfilled') {
          return
        }

        const names: string[] = Array.from(
          res.value.matchAll(
            /export\s*\{\s*[\w_$\s,]*(?<!N)\s+(N[\w_$]+)[\w_$\s,]*\s*\}/g,
          ),
        ).map((items) => items?.[1] ?? '')

        componentsNames.push(...names)
      })
    })

    return componentsNames
  }

  return {
    name: 'vite-plugin-generateNaiveDts',
    enforce: 'pre',
    async configResolved() {
      const naiveComponentsPath = pathResolve(
        './node_modules/naive-ui/es/components.d.ts',
      )

      const codeStr = fs.readFileSync(naiveComponentsPath, 'utf-8')
      let componentsNames = await getAllComponentsNameFromNaiveDts(codeStr)
      componentsNames.push(...includeNames)
      componentsNames = componentsNames.filter(
        (name) => !excludeNames.includes(name),
      )
      const dtsContent = `declare global {${componentsNames
        .map((name) => {
          return `\n  const ${name}: typeof import('naive-ui')['${name}']`
        })
        .join('')}
}

export {}
`
      fs.writeFileSync(dts, dtsContent, 'utf-8')
    },
  }
}

export function naiveDts() {
  return generateNaiveDts({
    dts: path.resolve(process.cwd(), 'src/config/naive.d.ts'),
  })
}
