import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import Fade from 'react-reveal/Fade'
import Image from 'next/image'

const classes = {
  projectSection: `pb-20 py-14 sm:px-20 `,
  projectHeader: 'px-1 text-3xl min-w-xs',
  project: 'max-w-lg m-auto py-28 px-10 sm:px-16',
  carousel: 'md:px-20',
  projectLink: 'text-yellow-100',
  hash: 'text-blue-400 font-extrabold text-2xl',
  image: 'my-5 max-w-sm shadow-lg transition transform hover:scale-95',
}

export default function Projects() {
  // State

  // JSX
  return (
    <section className={classes.projectSection}>
      <Fade left>
        <h1 className={classes.projectHeader}>
          <span className={classes.hash}>#</span>Projects
        </h1>
      </Fade>

      <Fade bottom>
        <Carousel className={classes.carousel} showThumbs={false}>
          <div className={classes.project}>
            <Image
              src='/tonyrrr.png'
              alt='tonyrrr.dev'
              width={'fit'}
              height={'fit'}
              className={classes.image}
              style={{ pointerEvents: 'all' }}
            />
            <h3>
              Project 1:{' '}
              <a className={classes.projectLink} href='https://tonyrrr.dev'>
                tonyrrr.dev
              </a>
            </h3>
            <p>
              This static site was created by me using the following tech-stack:
            </p>
            <ul>
              <li>[frontend]: NextJs, Tailwindcss</li>
              <li>[backend]: IPFS, NodeJs + Express for API</li>
            </ul>
            <p>
              The site is hosted on IPFS, but also has a remote server for
              secured endpoints!
            </p>
          </div>
          <div className={classes.project}>
            <Image
              src='/getautonomy.png'
              alt='getautonomy.info'
              width={'fit'}
              height={'fit'}
              className={classes.image}
              style={{ pointerEvents: 'all' }}
            />
            <h3>
              Project 2:{' '}
              <a
                className={classes.projectLink}
                href='https://getautonomy.info'>
                getautonomy.info
              </a>
            </h3>
            <p>
              There isn't much I hold closer to my heart than Autonomy. Back in
              2019 I: worked on the landing page and CRM automation.
            </p>
          </div>
          <div className={classes.project}>
            <Image
              src='/badnarik.png'
              alt='badnarik.org'
              width={'fit'}
              height={'fit'}
              className={classes.image}
              style={{ pointerEvents: 'all' }}
            />
            <h3>
              Project 3:{' '}
              <a className={classes.projectLink} href='https://badnarik.org/'>
                badnarik.org
              </a>
            </h3>
            <p>
              Badnarik doesn't beat around the bush, that's why I like him. I
              got the pleasure of setting up the ecommerce store for his site.
            </p>
          </div>
        </Carousel>
      </Fade>
    </section>
  )
}
