import { getPostsMetaData } from '../lib/getPostsData'
import styles from '../styles/blog.module.css'

export default function Blog({ postsData }) {
  return (
    <div className={styles.postsContainer}>
      {postsData.map((metadata) => {
        return (
          <div>
            <h2>{metadata.title}</h2>
            <p>{metadata.description}</p>
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
