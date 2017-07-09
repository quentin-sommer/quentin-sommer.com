import * as React from 'react'
import styled from 'styled-components'
import sizes from '../lib/sizes'

const Container = styled.div`
  margin: 3rem .75rem;
  max-width: 100%;
  @media (min-width: ${sizes.tablet}px) {
    max-width: 700px;
    width: 95%;
    margin-left: auto;
    margin-right: auto;
  }
`

export default Container
