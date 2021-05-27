import Zoom from 'react-reveal/Zoom'

const classes = {
  bioSection: `bg-warmgray-900 pb-10`,
  bioContainer: `p-6 max-w-lg m-auto`,
  bioHeader: `py-10 text-3xl`,
  bioText: ``,
}

export default function Bio() {
  // State
  // JSX
  return (
    <section className={classes.bioSection}>
      <div className={classes.bioContainer}>
        <Zoom>
          <h1 className={classes.bioHeader}>#Who goes there?</h1>
        </Zoom>

        <Zoom>
          <p className={classes.bioText}>
            Salutations! I be TonyRrrr, a farm-raised, nature-loving,
            techy-geared, mad-libbing, autonomy-spreading, freedom lover, and
            this site is a transport vehicle for my public goods and services.
            If you're looking to float a website or app on the seas of the Open
            Net, I offer consultation and development services. Focusing on
            decentralization technologies such as IPFS, ENS, and IC, my aim is
            to take power away from the Internet authorities and give it back to
            the freedom-seeking web pirates.
          </p>
        </Zoom>
      </div>
    </section>
  )
}
