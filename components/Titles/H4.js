import * as React from 'react'
import styled from 'styled-components'

const H4 = styled.h4`
  text-align: ${props => (props.center ? 'center' : 'left')};
  font-family: Amaranth;
`

export default H4
