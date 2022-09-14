import pkg from '../../../package.json'
const { dependencies, devDependencies, name, version } = pkg
export const APP_INFO = {
  pkg: {
    dependencies,
    devDependencies,
    name,
    version,
  },
  lastBuildTime: Number(new Date()),
}
