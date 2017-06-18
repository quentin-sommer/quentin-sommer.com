import * as React from 'react'
import styled from 'styled-components'

const H3 = styled.h3`
  text-align: ${props => (props.center ? 'center' : 'left')};
  font-family: Amaranth;
`

export default H3
