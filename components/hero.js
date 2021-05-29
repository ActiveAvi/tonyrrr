import styles from '../styles/hero.module.css'
import Link from 'next/link'

const classes = {
  hero: `pt-36 bg-center bg-cover h-screen text-center`,
  heroHeader: `text-lg sm:text-2xl font-medium text-gray-50 max-w-xs`,
  heroText: `text-gray-50 mb-6 max-w-sm w-max`,
  heroInner: `grid grid-cols-1 content-center justify-items-center m-auto w-11/12 max-w-lg h-56  bg-gray-900 bg-opacity-40 min-h-40 rounded-full shadow-big`,
  heroButton: `w-max bg-blue-600 text-gray-50 rounded p-1 cursor-pointer transition duration-300 hover:bg-yellow-200 hover:text-gray-700`,
}

export default function Hero({ img, header, text, button }) {
  let heroHeader = header || 'Welcome! Greetings and salutations friend.'
  let heroText = text || 'This is the hero body!'
  let heroButton = button || 'Consult with me'

  return (
    <div className={`${classes.hero} ${styles.heroImg}`}>
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
