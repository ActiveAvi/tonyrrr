import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
{
  /*stylesheets and images*/
}
import styles from '../styles/navi.module.css'
import Helm from '../images/004-helm.svg'

// const classes = {
//   nav: (scrollingDown) =>
//     `z-50 sticky top-0 sm:flex justify-between px-2 py-2 bg-warmgray-900 text-gray-50 transition-all ${
//       scrollingDown ? '-top-10' : 'top-0'
//     }`,
//   navLinks: (showLinks) =>
//     `overflow-hidden block sm:pt-1 sm:opacity-100 sm:h-6 sm:flex transition-all ease-in duration-300 transform sm:translate-x-0 ${
//       showLinks ? 'h-48 pt-2' : 'h-0 -translate-x-20 opacity-0'
//     } `,
//   navLink: (showLinks) =>
//     `block pt-1 pb-2 sm:pb-0 sm:inline px-2 uppercase text-md font-mono hover:text-red-200 transition ease-in  ${
//       showLinks ? '' : ''
//     }`,
//   brand: 'font-mono uppercase text-lg hover:text-red-400 transition',
//   navSpan: 'flex-grow',
//   navButton: 'sm:hidden',
// }

const classes = {
  nav: (showLinks) =>
    `msm:${
      showLinks ? '' : 'translate-y-full'
    } fixed  msm:p-4 msm:w-screen msm:h-screen z-20 msm:bg-warmgray-900 text-gray-50 text-center overflow-hidden  sm:bg-warmgray-900 sm:w-1/6 sm:h-screen transition-all ease-in duration-300 transform`,
  navLinks: (showLinks) =>
    `sm:block transition-all ease-in duration-300 transform mt-h-30 `,
  navLink: (showLinks) =>
    `block lowercase msm:text-3xl text-md font-mono hover:text-red-200`,
  brand:
    'hidden sm:inline-block font-mono uppercase text-lg hover:text-red-400 w-max mt-4',
  navSpan: 'flex-grow',
  navButton: 'sm:hidden',
  helm: 'z-30 h-14 w-14 fixed bottom-0 right-0 mr-2 mb-2 sm:hidden',
}

export default function Navi() {
  const router = useRouter()
  const menu = ['/', '/bio', '/blog', '/projects', '/contact']
  const brand = 'TonyRrr!'
  const [scrollingDown, setScrollingDown] = useState(false)
  const [showLinks, setShowLinks] = useState()
  console.log(showLinks)
  // Functions
  let handleMenuToggle = () => {
    let navClass = classes.nav(showLinks)
    if (navClass.includes('hidden')) {
      setShowLinks(true)
    } else {
      setShowLinks(false)
    }
  }

  return (
    <>
      <div
        onSelect={() => setShowLinks(!showLinks)}
        onClick={() => setShowLinks(!showLinks)}>
        <Helm className={classes.helm} />
      </div>

      <nav className={classes.nav(showLinks)}>
        <Link href='/'>
          <a className={classes.brand}>{brand}</a>
        </Link>

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
          {showLinks ? 'no' : 'yes'}
        </ul>
      </nav>
    </>
  )
}
