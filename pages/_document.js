import * as React from 'react'
import Document, {Head, Main, NextScript} from 'next/document'
import styled, {ServerStyleSheet} from 'styled-components'
import {TypographyStyle, GoogleFont} from 'react-typography'
import typography from '../lib/typography'
import theme from '../lib/theme'

export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    return (
      <html style={{backgroundColor: theme.bg}}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta http-equiv="x-ua-compatible" content="ie=edge" />
          <TypographyStyle typography={typography} />
          <GoogleFont typography={typography} />
          {styleTags}
        </Head>
        <body>
          <div className="root">
            {main}
          </div>
          <NextScript />
        </body>
      </html>
    )
  }
}
