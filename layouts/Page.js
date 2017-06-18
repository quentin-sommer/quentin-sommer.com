import * as React from 'react'
import Base from './Base'

const Page = ({children}) =>
  <Base>
    <div
      style={{
        maxWidth: '800px',
        margin: '2rem auto',
      }}
    >
      {children}
    </div>
  </Base>

export default Page
