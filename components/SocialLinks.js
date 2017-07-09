import * as React from 'react'
import styled from 'styled-components'
import Link from './Link'

const Wrapper = styled.div`
  display: flex;
  justify-content: ${props => (props.center ? 'center' : null)};
  height: 100%;
`
const ImgLeft = styled.img`
  width: 1.75rem;
  height: 1.75rem;
  margin: 0 .5rem 0 0;
`
const ImgRight = styled.img`
  width: 1.75rem;
  height: 1.75rem;
  margin: 0 0 0 .5rem;
`
const SocialLinks = ({center}) =>
  <Wrapper center={center}>
    <Link external href="https://twitter.com/quentin_smr">
      <ImgLeft src="/static/twitter.svg" alt="twitter social logo" />
    </Link>
    <Link external href="https://github.com/quentin-sommer">
      <ImgRight src="/static/github.svg" alt="twitter social logo" />
    </Link>
  </Wrapper>

export default SocialLinks
