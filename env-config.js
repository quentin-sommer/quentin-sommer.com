const prod = process.env.NODE_ENV === 'production'

const defaultConfig = {
  __DEV__: true,
  __GA_ID__: 'dev-ga',
}

const prodConfig = Object.assign({}, defaultConfig, {
  __DEV__: false,
  __GA_ID__: 'UA-77436866-4',
})

module.exports = prod ? prodConfig : defaultConfig
