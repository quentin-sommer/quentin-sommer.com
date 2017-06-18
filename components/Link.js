import * as React from 'react'
import NextLink from 'next/link'
import styled from 'styled-components'
import PropTypes from 'prop-types'

/*
 &:hover {
 text-decoration: underline;
 text-decoration-color: #697082;
 color: #697082;
 };
 */

const A = styled.a`
  color: inherit;
  cursor: pointer;
  ${props =>
    props.clean ? 'text-decoration: none;' : 'text-decoration: underline;'}
`

const Link = ({children, href, external, ...props}) =>
  <NextLink href={href}>
    <A
      href={href}
      {...props}
      {...(external
        ? {target: '_blank', rel: 'external noopener nofollow'}
        : null)}
    >
      {children}
    </A>
  </NextLink>

Link.propTypes = {
  href: PropTypes.string.isRequired,
  external: PropTypes.bool,
}

export default Link
