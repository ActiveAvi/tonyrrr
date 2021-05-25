import Navi from './navi'

const classes = {
  main: `text-gray-300 font-mono`,
}

export default function Layout({ preview, children }) {
  return (
    <div className={classes.main}>
      <Navi />
      {children}
    </div>
  )
}
