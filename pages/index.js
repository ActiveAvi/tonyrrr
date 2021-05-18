import Link from 'next/link'
import styles from '../theme/index.module.css'
import { getPostsMetaData } from '../lib/getPostsData'

export default function Home({ postsData }) {
  return (
    <div className={styles.infoContainer}>
      <h1>Welcome aboard fellow freedom-seekers!</h1>
      <picture>
        <source
          srcSet={require('../images/gates-epstein.jpg?webp')}
          type='image/webp'
        />
        <source
          srcSet={require('../images/gates-epstein.jpg')}
          type='image/jpg'
        />
        <img
          className={styles.infoImg}
          src={require('../images/gates-epstein.jpg')}
          alt='Gates and Epstein chilling at Epsteins mansion'
        />
      </picture>
      <p className={styles.infoDescription}>
        Epstein and Gates were hanging out, why?
      </p>
      <hr />
      {postsData.map((metadata) => {
        return (
          <div key={metadata.id}>
            <Link href={`/blog/${metadata.id}`} key={metadata.title}>
              <a className={styles.postTitle}> {metadata.title} </a>
            </Link>
            <p className={styles.postDescription}> {metadata.description} </p>
          </div>
        )
      })}
    </div>
  )
}

export async function getStaticProps() {
  const postsData = getPostsMetaData()
  return {
    props: {
      postsData: postsData,
    },
  }
}
