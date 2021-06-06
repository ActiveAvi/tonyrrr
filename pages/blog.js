import { getPostsMetaData } from '../lib/getPostsData'

const classes = {
  blog: 'p-2',
  post: 'p-4',
  title: 'text-lg',
  date: 'text-sm',
  desc: '',
  link: '',
}

export default function Blog({ postsData }) {
  return (
    <div className={classes.blog}>
      {postsData.map((metadata) => {
        return (
          <div className={classes.post}>
            <h2 className={classes.title}>{metadata.title}</h2>
            <span className={classes.date}>{metadata.date}</span>
            <p className={classes.desc}>{metadata.description}</p>
            <a className={classes.link} href={`/blog/${metadata.id}`}>
              Read more
            </a>
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
