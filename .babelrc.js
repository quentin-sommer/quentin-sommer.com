module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['transform-define', require('./env-config')],
    [
      'styled-components',
      {
        ssr: true,
        displayName: true,
        preprocess: false,
        transpileTemplateLiterals: true,
      },
    ],
  ],
}
