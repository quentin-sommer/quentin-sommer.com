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
  margin: 0.5rem;
  font-size: 1.25rem;
  border-bottom: ${props =>
    props.active ? '2px solid #697082;' : '2px solid white'};
  padding-bottom: 1px;
  font-family: 'Amaranth';
  font-weight: 400;
`

const Menu = ({activeUrl}) => (
  <nav>
    <MenuList>
      <MenuItem active={activeUrl === '/'}>
        <Link href="/" clean>
          Home
        </Link>
      </MenuItem>
      <MenuItem active={activeUrl === '/work'}>
        <Link href="/projects" clean>
          Projects
        </Link>
      </MenuItem>
      <MenuItem active={activeUrl === '/open-source'}>
        <Link href="/open-source" clean>
          Open-Source
        </Link>
      </MenuItem>
      <MenuItem active={activeUrl === '/contact'}>
        <Link href="/contact" clean>
          Contact
        </Link>
      </MenuItem>
    </MenuList>
  </nav>
)

export default Menu
