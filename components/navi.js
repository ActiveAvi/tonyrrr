import Link from 'next/link'
import { useState, useEffect } from 'react'
import styles from '../styles/navi.module.css'

const classes = {
  nav: (scrollingDown) =>
    `z-50 sticky top-0 sm:flex justify-between px-2 py-2 bg-warmgray-900 text-gray-50 transition-all ${
      scrollingDown ? '-top-10' : 'top-0'
    }`,
  navLinks: (showLinks) =>
    `overflow-hidden block sm:pt-1 sm:opacity-100 sm:h-6 sm:flex transition-all ease-in duration-300 transform sm:translate-x-0 ${
      showLinks ? 'h-48 pt-2' : 'h-0 -translate-x-20 opacity-0'
    } `,
  navLink: (showLinks) =>
    `block pt-1 pb-2 sm:pb-0 sm:inline px-2 uppercase text-md font-mono hover:text-red-200 transition ease-in  ${
      showLinks ? '' : ''
    }`,
  brand: 'font-mono uppercase text-lg hover:text-red-400 transition',
  navSpan: 'flex-grow',
  navButton: 'sm:hidden',
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
      <button
        className={`${classes.navButton} ${styles.menubtn} ${
          showLinks ? styles.active : ''
        }`}
        onClick={() => handleMenuToggle()}
      />
      {/* <svg
        className={`${styles.ham} ${styles.hamRotate} ${styles.ham1} ${
          showLinks ? styles.active : ''
        }`}
        viewBox='0 0 100 100'
        width='80'
        onClick={() => handleMenuToggle()}>
        <path
          className={`${styles.line} ${styles.top}`}
          d='m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40'
        />
        <path className={`${styles.line} ${styles.middle}`} d='m 30,50 h 40' />
        <path
          className={`${styles.line} ${styles.bottom}`}
          d='m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40'
        />
      </svg> */}
      {/* <button className={classes.navButton} onClick={() => handleMenuToggle()}>
        x
      </button> */}
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
