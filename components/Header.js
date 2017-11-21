import * as React from 'react'
import styled from 'styled-components'
import HeaderTitle from './Titles/HeaderTitle'
import Link from './Link'
import Menu from './Menu'
import SocialLinks from './SocialLinks'
import sizes from '../lib/sizes'

const HeaderContainer = styled.div`
  background: url(/static/background-small.jpg) center;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  padding-top: 3rem;
  @media (min-width: ${sizes.tablet}px) {
    padding-top: 4rem;
    background: url(/static/background.jpg) center;
    background-position: center;
    background-size: cover;
    height: 40vh;
    min-height: 350px;
  }
`
const TopMarginDiv = styled.div`
  margin-top: ${props => props.margin}rem;
`
const Header = ({url}) => (
  <HeaderContainer>
    <div>
      <Link href="/" clean>
        <HeaderTitle center>Quentin Sommer</HeaderTitle>
      </Link>
      <TopMarginDiv margin="0">
        <SocialLinks center />
      </TopMarginDiv>
      <TopMarginDiv margin="2">
        <Menu activeUrl={url} />
      </TopMarginDiv>
    </div>
  </HeaderContainer>
)

export default Header
