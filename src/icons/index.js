import SvgIcon from '@/components/svg-icon'
const svgRequire = require.context('./svg', false, /\.svg$/)
function importAll(r) {
  r.keys().forEach(r)
}
importAll(svgRequire)

export default (app) => {
  app.component('svg-icon', SvgIcon)
}
