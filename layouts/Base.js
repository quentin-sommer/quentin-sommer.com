import * as React from 'react'
import styled, {ThemeProvider} from 'styled-components'
import Analytics from '../components/Analytics'
import Header from '../components/Header'
import theme from '../lib/theme'
import Footer from '../components/Footer'
import Container from '../components/Container'

const StyledBase = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Base = ({children, url}) =>
  <ThemeProvider theme={theme}>
    <StyledBase>
      <Analytics track />
      <Header url={url} />
      <div style={{flex: 1}}>
        {children}
      </div>
      <Container style={{marginTop: 0}}>
        <Footer />
      </Container>
    </StyledBase>
  </ThemeProvider>

export default Base
