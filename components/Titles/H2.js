import * as React from 'react'
import styled from 'styled-components'

const H2 = styled.h2`
  text-align: ${props => (props.center ? 'center' : 'left')};
  color: ${props => props.theme.text};
  font-family: Amaranth;
`

export default H2
