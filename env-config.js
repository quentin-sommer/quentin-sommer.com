const prod = process.env.NODE_ENV === 'production'

const defaultConfig = {
  __DEV__: true,
  __GA_ID__: 'dev-ga',
}

const prodConfig = Object.assign({}, defaultConfig, {
  __DEV__: false,
  __GA_ID__: 'REAL GA',
})

module.exports = prod ? prodConfig : defaultConfig
