const files = require.context('.', true, /\.js$/)

let configRouter = []

files.keys().forEach(key => {
  if (key === './index.js') return
  configRouter = configRouter.concat(files(key).default)
    .sort((a, b) => { return a.sort ? (a.sort - b.sort) : -1 })
})

export default configRouter
