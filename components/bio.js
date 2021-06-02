import Fade from 'react-reveal/Fade'

const classes = {
  bioSection: `py-14 bg-warmgray-800 pb-10 sm:px-20 flex flex-wrap`,
  bioContainer: `p-6 max-w-lg m-auto`,
  bioHeader: ` px-1 text-3xl min-w-xs mb-10`,
  bioText: `px-5 max-w-lg`,
  hash: 'text-blue-400 text-2xl font-extrabold',
}

export default function Bio() {
  // State
  // JSX
  return (
    <section className={classes.bioSection}>
      <Fade left>
        <h1 className={classes.bioHeader}>
          <span className={classes.hash}>#</span>Bio
        </h1>
      </Fade>

      <Fade bottom>
        <p className={classes.bioText}>
          Salutations! I be TonyRrrr, a farm-raised, nature-loving,
          techy-geared, mad-libbing, autonomy-spreading, freedom lover, and this
          site is a transport vehicle for my public goods and services. If
          you're looking to float a website or app on the seas of the Open Net,
          I offer consultation and development services. Focusing on
          decentralization technologies such as IPFS, ENS, and IC, my aim is to
          take power away from the Internet authorities and give it back to the
          freedom-seeking web pirates.
        </p>
      </Fade>
    </section>
  )
}
