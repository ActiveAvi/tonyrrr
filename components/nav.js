import Link from 'next/link'

export default function Nav() {
  const menu = ['/', '/bio', '/blog', '/projects', '/contact']
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <Link href='/'>
        <a className='navbar-brand'>TonyRrr!</a>
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          {menu.map((route) => {
            return (
              <li className='nav-item' key={route}>
                <Link href={route}>
                  <a className='nav-link'>{route.slice(1)}</a>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
