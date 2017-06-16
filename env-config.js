const prod = process.env.NODE_ENV === 'production'

const defaultConfig = {
  GA_ID: 'dev-ga',
  HOTJAR_ID: 'dev-hotjar',
}

const prodConfig = Object.assign({}, defaultConfig, {
  GA_ID: 'REAL GA',
})

module.exports = prod ? prodConfig : defaultConfig
