import * as React from 'react'
import Page from '../layouts/Page'
import H1 from '../components/Titles/H1'
import H2 from '../components/Titles/H2'
import SocialLinks from '../components/SocialLinks'
import P from '../components/P'
import Link from '../components/Link'

const ContactPage = () =>
  <Page>
    <H1>Contact</H1>
    <H2>Social media</H2>
    <SocialLinks />
    <H2>Email</H2>
    <P>
      <Link external href="mailto:hello@quentin-sommer.com">
        hello@quentin-sommer.com
      </Link>
    </P>
  </Page>

export default ContactPage
