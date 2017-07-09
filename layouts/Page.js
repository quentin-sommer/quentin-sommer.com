import * as React from 'react'
import Base from './Base'
import Container from '../components/Container'

const Page = ({children}) =>
  <Base>
    <Container>
      {children}
    </Container>
  </Base>

export default Page
