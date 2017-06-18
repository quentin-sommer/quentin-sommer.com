import * as React from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
  text-align: ${props => (props.center ? 'center' : 'left')};
  font-family: Amaranth;
`

export default H1
