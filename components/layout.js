import Nav from './nav'

export default function Layout({ preview, children }) {
  return (
    <>
      <Nav />
      {children}
    </>
  )
}
