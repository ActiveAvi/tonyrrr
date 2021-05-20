import Link from 'next/link'
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap'
import styles from './navi.module.css'

export default function Navi() {
  const menu = ['/', '/bio', '/blog', '/projects', '/contact']
  return (
    <Navbar bg='dark' variant='dark' expand='sm'>
      <Link href='/'>
        <Navbar.Brand className={styles.brand} bg='dark'>
          TonyRrr!
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle
        className={styles.toggler}
        aria-controls='basic-navbar-nav'
      />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav>
          {menu.map((route) => {
            return (
              <Nav.Link key={route} className={styles.navlink} href={route}>
                {route.slice(1)}
              </Nav.Link>
            )
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
