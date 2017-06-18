import * as React from 'react'
import styled from 'styled-components'
import Link from './Link'

const MenuList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  margin:0;
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
          <Link href="/" clean>Home</Link>
        </MenuItem>
        <MenuItem active={route === '/work'}>
          <Link href="/work" clean>Work</Link>
        </MenuItem>
        <MenuItem active={route === '/open-source'}>
          <Link href="/open-source" clean>
            Open Source
          </Link>
        </MenuItem>
        <MenuItem active={route === '/contact'}>
          <Link href="/contact" clean>
            Contact
          </Link>
        </MenuItem>
      </MenuList>
    </nav>
  )
}

export default Menu
