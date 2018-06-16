const IgnorePlugin = require('webpack').IgnorePlugin
const path = require('path')

const disableBableLoderCache = config => {
  // workaround to force the refresh of env-config.js values at each start
  config.module.rules = config.module.rules.map(rule => {
    if (rule.loader === 'babel-loader') {
      rule.options.cacheDirectory = false
    }
    return rule
  })
}

module.exports = {
  webpack: (config, {dev}) => {
    disableBableLoderCache(config)
    return config
  },
  exportPathMap: () => ({
    '/': {page: '/'},
    '/contact': {page: '/contact'},
    '/open-source': {page: '/open-source'},
    '/work': {page: '/work'},
  })
}
