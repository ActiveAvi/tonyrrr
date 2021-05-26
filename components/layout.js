import Navi from './navi'

const classes = {
  main: `bg-gray-900 text-gray-50 font-mono`,
}

export default function Layout({ preview, children }) {
  return (
    <div className={classes.main}>
      <Navi />
      {children}
    </div>
  )
}
