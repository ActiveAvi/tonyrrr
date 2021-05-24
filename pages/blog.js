import { getPostsMetaData } from '../lib/getPostsData'
import styles from '../styles/blog.module.css'
import Link from 'next/link'
import { Card, Button } from 'react-bootstrap'

export default function Blog({ postsData }) {
  return (
    <div className={styles.postsContainer}>
      {postsData.map((metadata) => {
        return (
          <Card className={styles.postCard} key={metadata.id}>
            <Link href={`/blog/${metadata.id}`} key={metadata.title}>
              <Card.Title className={styles.postTitle}>
                {metadata.title}
              </Card.Title>
            </Link>
            <Card.Text>{metadata.description}</Card.Text>
            <Button
              href={`/blog/${metadata.id}`}
              variant='outline-primary'
              size='sm'>
              Read post
            </Button>
          </Card>
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
