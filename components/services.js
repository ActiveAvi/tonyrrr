import Fade from 'react-reveal/Fade'

const classes = {
  container: `pt-20 pb-10 px-6 max-w-5xl m-auto`,
  header: `text-white text-3xl max-w-lg m-auto`,
  cardBox: `sm:flex`,
  card: ` my-16 max-w-xs p-6`,
  cardImg: ``,
  cardHeader: `text-red-400`,
  cardBody: ``,
  serviceSpeed: ``,
  serviceDecentral: ``,
  serviceMobile: '',
}

export default function Services() {
  return (
    <div className={classes.container}>
      <Fade>
        <h3 className={classes.header}>#Goods and Services</h3>
      </Fade>

      <div className={classes.cardBox}>
        <Fade bottom>
          <div className={`${classes.card} ${classes.serviceSpeed}`}>
            <h3 className={classes.cardHeader}>⚡ Blazing-fast websites</h3>
            <p className={classes.cardBody}>
              Speed of content delivery is one of my first considerations when
              deciding which tools to employ. I work closely with Next.js to
              produce websites that don't hang when requested.
            </p>
          </div>
        </Fade>
        <Fade bottom>
          <div className={`${classes.card} ${classes.serviceDecentral}`}>
            <h3 className={classes.cardHeader}>🕸️ Censorship Resistant</h3>
            <p className={classes.cardBody}>
              When censonship runs rampant on the digital ocean, you best be
              securing your means to aquire booty! Using tools like IPFS,
            </p>
          </div>
        </Fade>
        <Fade bottom>
          <div className={`${classes.card} ${classes.serviceMobile}`}>
            <h3 className={classes.cardHeader}>📱 Website or App?</h3>
            <p className={classes.cardBody}>
              It's difficult to tell the difference these days. Progressive Web
              Apps (PWAs) allow a site to integrate totally with the mobile
              experience.
            </p>
          </div>
        </Fade>
      </div>
    </div>
  )
}
