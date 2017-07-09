import * as React from 'react'
import styled from 'styled-components'

const P = styled.p`
  text-align: ${props => (props.center ? 'center' : 'left')};
  font-size: 1rem;
`

export default P
