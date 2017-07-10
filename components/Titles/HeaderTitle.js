import * as React from 'react'
import styled from 'styled-components'
import H1 from './H1'
import sizes from '../../lib/sizes'

const HeaderTitle = styled(H1)`
  text-shadow: 0 0px 12px rgba(150, 150, 150, 0.3);
  color: white;
  margin-bottom: 1rem;
  font-size: 2rem;
  @media (min-width: ${sizes.tablet}px) {
    font-size: 3rem;
  }
`

export default HeaderTitle
