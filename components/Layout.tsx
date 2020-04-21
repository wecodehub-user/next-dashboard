import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Header from './Header'
import Navigation from './Navigation'

type Props = {}

const Layout: React.FunctionComponent<Props> = ({ children }) => (
  <div>
    <Header name='Company Name' />
    <Container fluid={true}>
      <Row>
        <Navigation />
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
          {children}
        </main>
      </Row>
  </Container>
  </div>
)

export default Layout
