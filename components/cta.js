import Link from 'next/link'

const classes = {
  section: 'py-36 bg-warmgray-900 px-5',
  header: 'w-fit mx-auto',
  buttonBox: 'w-fit mx-auto py-4',
  button: 'bg-blue-200 hover:bg-blue-300 rounded py-1 px-3 text-gray-900',
}

export default function Cta() {
  return (
    <section className={classes.section}>
      <h1 className={classes.header}>Ready to start on your website / app?</h1>
      <div className={classes.buttonBox}>
        <Link href='/contact'>
          <button className={classes.button}>Schedule meeting</button>
        </Link>
      </div>
    </section>
  )
}
