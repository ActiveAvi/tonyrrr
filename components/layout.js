import Navi from './navi'

const classes = {
  main: `text-gray-300 font-mono `,
  content: 'sm:ml-1/6 bg-warmgray-800',
}

export default function Layout({ preview, children }) {
  return (
    <div className={classes.main}>
      <Navi />
      <main className={classes.content}>{children}</main>
    </div>
  )
}
