import * as React from 'react'
import Document, {Head, Main, NextScript} from 'next/document'
import styled, {ServerStyleSheet} from 'styled-components'
import {TypographyStyle, GoogleFont} from 'react-typography'
import typography from '../lib/typography'

export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    return (
      <html>
        <Head>
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
