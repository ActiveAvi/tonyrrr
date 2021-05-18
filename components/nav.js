import Link from 'next/link'

export default function Nav() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <Link href='/'>
        <a className='navbar-brand'>TonyRrr!</a>
      </Link>
    </nav>
  )
}
