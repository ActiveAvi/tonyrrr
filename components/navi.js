import Link from 'next/link'
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap'

export default function Navi() {
  const menu = ['/', '/bio', '/blog', '/projects', '/contact']
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Link href='/'>
        <Navbar.Brand bg='dark'>TonyRrr!</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav>
          {menu.map((route) => {
            console.log(route)
            return (
              <>
                <Nav.Link href={route}>{route.slice(1)}</Nav.Link>
              </>
            )
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
