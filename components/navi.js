import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap'
import styles from './navi.module.css'

export default function Navi() {
  const menu = ['/', '/bio', '/blog', '/projects', '/contact']
  const [scrollingDown, setScrollingDown] = useState(false)

  let previousScrollPosition = 0

  const handleScroll = (e) => {
    let currentScrollPosition = window.ScrollY || window.pageYOffset
    if (currentScrollPosition > previousScrollPosition) {
      setScrollingDown(true)
    } else {
      setScrollingDown(false)
    }
    previousScrollPosition = currentScrollPosition
  }

  // throttle for the scroll func
  let throttleWait

  const throttle = (callback, time) => {
    if (throttleWait) return
    throttleWait = true
    setTimeout(() => {
      callback()
      throttleWait = false
    }, time)
  }

  // set up event listener for scroll
  // clean up listener if component unmounts
  useEffect(() => {
    const listener = window.addEventListener('scroll', () => {
      throttle(handleScroll, 150)
    })
    return () => window.removeEventListener('scroll', listener)
  }, [])

  let navClasses = `${styles.nav} ${styles.scrollUp}`

  if (scrollingDown) {
    console.log(window.innerWidth)
    navClasses = `${styles.nav} ${styles.scrollDown}`
  }

  return (
    <Navbar className={navClasses} bg='dark' variant='dark' expand='sm'>
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
