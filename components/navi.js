import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const classes = {
  nav: (showLinks) =>
    `${
      showLinks ? ' msm:opacity-90' : 'msm:translate-y-p-800'
    } fixed msm:p-4 msm:w-screen msm:h-screen z-20 msm:bg-warmgray-900 text-gray-50 text-center overflow-hidden sm:bg-warmgray-900 sm:w-1/6 sm:h-screen transition-all ease-in duration-300 transform`,
  navLinks: (showLinks) =>
    `sm:block transition-all ease-in duration-300 transform msm:mt-36 sm:mt-screenh-35 `,
  navLink: (showLinks) =>
    `block lowercase msm:text-3xl text-lg font-mono hover:text-red-200 cursor-pointer`,
  brand: 'block m-auto mb-4 font-mono text-2xl hover:text-red-400 w-max mt-4',
  navSpan: 'flex-grow',
  navButton: 'sm:hidden',
  helm: 'z-30 h-14 w-14 fixed bottom-0 right-0 mr-2 mb-2 sm:hidden animate-spin-slow',
  avatar: 'rounded-full mt-6 w-20 mx-auto',
}

export default function Navi() {
  const menu = ['/', '/bio', '/blog', '/projects', '/contact']
  const brand = 'TonyRrr!'
  const router = useRouter()
  const [showLinks, setShowLinks] = useState(false)

  /* Effects */
  useEffect(() => {
    //add event listener to router
    router.events.on('routeChangeComplete', handleRouteChange)
    //clean-up listener if component unmounts
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  /* Functions */
  const handleRouteChange = () => {
    setShowLinks(false)
  }
  return (
    <>
      <img
        src={require('../images/004-helm.svg')}
        className={classes.helm}
        onClick={() => setShowLinks(!showLinks)}
      />

      <nav className={classes.nav(showLinks)}>
        <Link href='/'>
          <a className={classes.brand}>{brand}</a>
        </Link>

        <img
          src={require('../images/avatar.jpeg')}
          alt='pic of TonyRrr!'
          className={classes.avatar}
        />

        <ul className={classes.navLinks(showLinks)}>
          {menu.map((item, index) => (
            <li key={index}>
              <a
                onClick={() => router.push(item)}
                className={classes.navLink(showLinks)}>
                {item != '/' ? item.slice(1) : 'home'}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
