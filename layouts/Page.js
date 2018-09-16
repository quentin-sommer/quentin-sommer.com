import * as React from 'react'
import Head from 'next/head'
import Base from './Base'
import Container from '../components/Container'

const baseTitle = 'Quentin Sommer'
const getFullTitle = title =>
  title === baseTitle ? title : `${title} - ${baseTitle}`
const baseUrl = 'https://www.quentin-sommer.com'

const Page = ({title, description, children, url}) => {
  const fullTitle = getFullTitle(title)
  return (
    <Base url={url}>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${baseUrl}${url}`} />
        <meta
          property="og:image"
          content={`${baseUrl}/static/background.jpg`}
        />
        <meta property="og:description" content={description} />
        <meta property="og:locale" content="en" />
        <meta property="og:site_name" content="Quentin Sommer" />
      </Head>
      <Container>{children}</Container>
    </Base>
  )
}

Page.defaultProps = {
  title: baseTitle,
  description:
    'Personal website where you can find out about my work, open source projects, and contact info',
}
export default Page
