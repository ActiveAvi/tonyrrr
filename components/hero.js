import Link from 'next/link'

const classes = {
  hero: `pt-36 bg-center bg-cover h-screen text-center`,
  heroHeader: `text-lg msm:px-8 sm:text-2xl font-medium text-gray-50 max-w-xs`,
  heroText: `text-gray-50 mb-6 max-w-sm msm:px-10`,
  heroInner: `grid grid-cols-1 content-center justify-items-center m-auto w-11/12 max-w-lg h-56  bg-gray-900 bg-opacity-40 min-h-40 rounded-full shadow-big`,
  heroButton: `w-max bg-blue-600 text-gray-50 rounded p-1 cursor-pointer transition duration-300 hover:bg-yellow-200 hover:text-gray-700`,
}

export default function Hero({ img, header, text, button }) {
  let heroHeader = header || 'Web Development befitting a pirate'
  let heroText =
    text ||
    `Hi, I'm TonyRrr! I like to build things on the Internet, especially the decentralized parts.`
  let heroButton = button || 'Work with me'

  return (
    <div
      className={`${classes.hero}`}
      style={{
        backgroundImage: 'url(' + require('../images/theship.jpeg') + ')',
      }}>
      <div className={classes.heroInner}>
        <h1 className={classes.heroHeader}>{heroHeader}</h1>
        <p className={classes.heroText}>{heroText}</p>
        <Link href='/contact'>
          <button className={classes.heroButton}>{heroButton}</button>
        </Link>
      </div>
    </div>
  )
}
