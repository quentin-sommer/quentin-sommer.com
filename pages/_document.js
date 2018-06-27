import * as React from 'react'
import Document, {Head, Main, NextScript} from 'next/document'
import {ServerStyleSheet} from 'styled-components'
import {TypographyStyle} from 'react-typography'
import typography from '../lib/typography'
import theme from '../lib/theme'

const fonts = `
@font-face {
  font-family: 'Amaranth';
  font-display: swap;
  font-style: normal;
  font-weight: 400;
  src: url('/static/fonts/amaranth-latin-400.eot');
  src:
    local('Amaranth Regular '),
    local('Amaranth-Regular'),
    url('/static/fonts/amaranth-latin-400.eot?#iefix') format('embedded-opentype'),
    url('/static/fonts/amaranth-latin-400.woff2') format('woff2'),
    url('/static/fonts/amaranth-latin-400.woff') format('woff'),
    url('/static/fonts/amaranth-latin-400.svg#Amaranth') format('svg');
}
@font-face {
  font-family: 'Amaranth';
  font-display: swap;
  font-style: normal;
  font-weight: 700;
  src: url('/static/fonts/amaranth-latin-700.eot');
  src:
    local('Amaranth Bold '),
    local('Amaranth-Bold'),
    url('/static/fonts/amaranth-latin-700.eot?#iefix') format('embedded-opentype'),
    url('/static/fonts/amaranth-latin-700.woff2') format('woff2'),
    url('/static/fonts/amaranth-latin-700.woff') format('woff'),
    url('/static/fonts/amaranth-latin-700.svg#Amaranth') format('svg');
}
`.replace(/(?:\n|\s)/g, '')

export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    return (
      <html style={{backgroundColor: theme.bg}} lang="en">
        <Head>
          <link
            rel="icon"
            type="image/png"
            href="/static/favicon/favicon-16x16.png"
            sizes="16x16"
          />
          <link
            rel="icon"
            type="image/png"
            href="/static/favicon/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/static/favicon/favicon-96x96.png"
            sizes="96x96"
          />
          <link rel="icon" type="icon" href="/static/favicon/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="theme-color" content={theme.bg} />
          <style dangerouslySetInnerHTML={{__html: fonts}} />
          <TypographyStyle typography={typography} />
          {styleTags}
        </Head>
        <body>
          <div className="root">{main}</div>
          <NextScript />
        </body>
      </html>
    )
  }
}
