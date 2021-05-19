import Navi from './navi'

export default function Layout({ preview, children }) {
  return (
    <>
      <Navi />
      {children}
    </>
  )
}
