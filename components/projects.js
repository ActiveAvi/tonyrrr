import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

const classes = {
  projectSection: `pb-20 bg-warmgray-900 `,
  projectHeader: 'px-6 py-14 text-3xl max-w-lg m-auto',
  project: 'py-40',
  carousel: 'sm:px-20 md:px-40',
}

export default function Projects() {
  // State

  // JSX
  return (
    <section className={classes.projectSection}>
      <h1 className={classes.projectHeader}>#Projects</h1>
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
