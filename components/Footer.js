import * as React from 'react'
import styled from 'styled-components'
import P from './P'
import SocialLinks from './SocialLinks'
import HR from './HR'
import sizes from '../lib/sizes'

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: ${sizes.tablet}px) {
    flex-direction: row;
  }
`
const PhotoCredit = styled.a`
  background-color:black;
  color:white;
  text-decoration:none;
  padding:4px 6px;
  font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;
  font-size:12px;
  font-weight:bold;
  line-height:1.2;
  display:inline-block;
  border-radius:3px;
`

const Footer = () =>
  <StyledFooter>
    <div>
      <P style={{marginBottom: '0'}}>Header photo</P>
      <PhotoCredit
        href="http://unsplash.com/@aleksdahlberg?utm_campaign=photographer-credit"
        target="_blank"
        rel="noopener noreferrer"
        title="Download free do whatever you want high-resolution photos from Aleks Dahlberg"
      >
        <span style={{display: 'inline-block', padding: '2px 3px'}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{
              height: '12px',
              width: 'auto',
              position: 'relative',
              verticalAlign: 'middle',
              top: '-1px',
              fill: 'white',
            }}
            viewBox="0 0 32 32"
          >
            <path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z" />
          </svg>
        </span>
        <span style={{display: 'inline-block', padding: '2px 3px'}}>
          Aleks Dahlberg
        </span>
      </PhotoCredit>
    </div>
    <div>
      <SocialLinks />
    </div>
    <div>
      <P>© 2017 Quentin Sommer</P>
    </div>
  </StyledFooter>

export default Footer
