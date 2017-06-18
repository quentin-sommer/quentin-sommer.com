import * as React from 'react'
import styled from 'styled-components'
import Link from './Link'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`
const Img = styled.img`
  width: 1.75rem;
  height: 1.75rem;
  margin: 0 .5rem;
`
const SocialLinks = () =>
  <Wrapper>
    <Link external href="https://twitter.com/quentin_smr">
      <Img src="/static/twitter.svg" alt="twitter social logo" />
    </Link>
    <Link external href="https://github.com/quentin-sommer">
      <Img src="/static/github.svg" alt="twitter social logo" />
    </Link>
  </Wrapper>

export default SocialLinks
