import * as React from 'react'
import styled from 'styled-components'
import Link from './Link'

const MenuList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  margin: 0;
`

const MenuItem = styled.li`
  margin: .5rem;
  font-size: 1.25rem;
  border-bottom: ${props =>
    props.active ? '2px solid #697082;' : '2px solid white'};
  padding-bottom: 1px;
  font-family: 'Amaranth';
  font-weight: 400;
`

const Menu = () => {
  const route = typeof window !== 'undefined' ? location.pathname : ''
  return (
    <nav>
      <MenuList>
        <MenuItem active={route === '/'}>
          <Link href="/" clean prefetch>
            Home
          </Link>
        </MenuItem>
        <MenuItem active={route.includes('/work')}>
          <Link href="/work" clean prefetch>
            Work
          </Link>
        </MenuItem>
        <MenuItem active={route.includes('/open-source')}>
          <Link href="/open-source" clean prefetch>
            OSS
          </Link>
        </MenuItem>
        <MenuItem active={route.includes('/contact')}>
          <Link href="/contact" clean prefetch>
            Contact
          </Link>
        </MenuItem>
      </MenuList>
    </nav>
  )
}

export default Menu
