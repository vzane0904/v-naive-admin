import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'
console.log(import.meta)
const modules = import.meta.globEager('./**/*.ts')

const mockModules: any[] = []
Object.keys(modules).forEach((key) => {
  if (key.includes('/_')) {
    return
  }
  mockModules.push(...modules[key].default)
})

export function setupProdMockServer() {
  console.log('mockModules: ', mockModules)
  createProdMockServer(mockModules)
}
