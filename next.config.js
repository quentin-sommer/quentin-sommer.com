const IgnorePlugin = require('webpack').IgnorePlugin
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
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

const injectBundleAnalyzerPlugin = config => {
  config.plugins.push(
    new BundleAnalyzerPlugin({
      // this disable the plugin builtin web server and only outpus to a file
      analyzerMode: 'disabled',
      generateStatsFile: true,
      statsFilename: 'stats.json', // Will be available at `.next/stats.json`
      // For all options see https://github.com/th0r/webpack-bundle-analyzer#as-plugin
    })
  )
}

module.exports = {
  webpack: (config, {dev}) => {
    if (!dev) {
      injectBundleAnalyzerPlugin(config)
    }
    disableBableLoderCache(config)
    return config
  },
}
