import * as React from 'react'
import styled from 'styled-components'
import HeaderTitle from './Titles/HeaderTitle'
import Link from './Link'
import Menu from './Menu'
import SocialLinks from './SocialLinks'

const HeaderContainer = styled.div`
  background: url(/static/background.jpg) center;
  min-height: 400px;
  height: 40vh;
  min-height: 350px;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Header = () =>
  <HeaderContainer>
    <div>
      <Link href="/" clean>
        <HeaderTitle center>Quentin Sommer</HeaderTitle>
      </Link>
      <div>
        <SocialLinks />
      </div>
      <Menu />
    </div>
  </HeaderContainer>

export default Header
