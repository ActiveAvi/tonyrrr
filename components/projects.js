import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import Fade from 'react-reveal/Fade'

const classes = {
  projectSection: `pb-20 sm:px-20 bg-warmgray-800 `,
  projectHeader: 'px-2 py-14 text-2xl min-w-xs',
  project: 'py-40',
  carousel: 'md:px-20',
}

export default function Projects() {
  // State

  // JSX
  return (
    <section className={classes.projectSection}>
      <Fade left>
        <h1 className={classes.projectHeader}>#Projects</h1>
      </Fade>

      <Carousel className={classes.carousel} showThumbs={false}>
        <div className={classes.project}>
          <h3>Project 1</h3>
          <p>
            project one description, and description of what i did for the
            project, goes here
          </p>
        </div>
        <div className={classes.project}>
          <h3>Project 2</h3>
          <p>
            project two description, and description of what i did for the
            project, goes here
          </p>
        </div>
        <div className={classes.project}>
          <h3>Project 3</h3>
          <p>
            project three description, and description of what i did for the
            project, goes here
          </p>
        </div>
      </Carousel>
    </section>
  )
}
