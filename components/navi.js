import Link from 'next/link'
import { useState, useEffect } from 'react'

const classes = {
  nav: (scrollingDown) =>
    `z-50 sticky top-0 sm:flex justify-between px-2 py-2 bg-gray-700 text-gray-50 transition-all ${
      scrollingDown ? '-top-10' : 'top-0'
    }`,
  navLinks: (showLinks) =>
    `overflow-hidden block sm:pt-1 sm:opacity-100 sm:h-6 sm:flex transition-all ease-in duration-300 transform sm:translate-x-0 ${
      showLinks ? 'h-48 pt-2' : 'h-0 -translate-x-20 opacity-0'
    } `,
  navLink: (showLinks) =>
    `block sm:inline px-2 uppercase text-md font-mono hover:text-red-200 transition ease-in  ${
      showLinks ? '' : ''
    }`,
  brand: 'font-mono uppercase text-lg hover:text-red-400 transition',
  navSpan: 'flex-grow',
  navButton: 'sm:hidden float-right px-2',
}

export default function Navi() {
  const menu = ['/', '/bio', '/blog', '/projects', '/contact']
  const brand = 'TonyRrr!'
  const [scrollingDown, setScrollingDown] = useState(false)
  const [showLinks, setShowLinks] = useState()

  // Functions
  let handleMenuToggle = () => {
    let navClass = classes.navLinks(showLinks)
    if (navClass.includes('h-0')) {
      setShowLinks(true)
    } else {
      setShowLinks(false)
    }
  }

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

  let throttleWait
  const throttle = (callback, time) => {
    if (throttleWait) return
    throttleWait = true
    setTimeout(() => {
      callback()
      throttleWait = false
    }, time)
  }

  // Effects and Clean-up
  useEffect(() => {
    const listener = window.addEventListener('scroll', () => {
      throttle(handleScroll, 150)
    })
    return () => window.removeEventListener('scroll', listener)
  }, [])

  return (
    <nav className={classes.nav(scrollingDown)}>
      <Link href='/'>
        <a className={classes.brand}>{brand}</a>
      </Link>
      <span className={classes.navSpan} />
      <button className={classes.navButton} onClick={() => handleMenuToggle()}>
        x
      </button>
      <ul className={classes.navLinks(showLinks)}>
        {menu.map((item, index) => (
          <li key={index}>
            <Link href={item}>
              <a className={classes.navLink(showLinks)}>
                {item != '/' ? item.slice(1) : 'home'}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
