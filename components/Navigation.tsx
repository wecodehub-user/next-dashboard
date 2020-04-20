import * as React from 'react'
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/NavLink'
import { Home, List } from 'react-feather'

const Navigation: React.FunctionComponent = () => (
    <Nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
            <NavLink active={true} href="/">
                <Home className="feather" /> Dashboard
            </NavLink>
            <NavLink active={false} href="/table">
                <List className="feather" /> Table
            </NavLink>
        </div>
  </Nav>
)

export default Navigation