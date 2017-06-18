import * as React from 'react'
import styled, {ThemeProvider} from 'styled-components'
import Analytics from '../components/Analytics'
import Header from '../components/Header'
import theme from '../lib/theme'
import Footer from '../components/Footer'

const StyledBase = styled.div`
  background-color: ${props => props.theme.bg};
  min-height: 100vh;
  
`

const Base = ({children}) =>
  <ThemeProvider theme={theme}>
    <StyledBase>
      <Analytics track />
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </StyledBase>
  </ThemeProvider>

export default Base
