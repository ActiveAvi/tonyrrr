import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import { getAllPostsPath, getPostData } from '../../lib/getPostsData.js'

const classes = {
  blog: 'p-2',
  header: `text-xl`,
  body: ``,
}

const components = {
  h1: (props) => <h1 className={classes.header} {...props} />,

  p: (props) => <p className={classes.body} {...props} />,
}

export default function Blog({ postMetadata, postContent }) {
  return (
    <div className={classes.blog}>
      <MDXRemote {...postContent} components={components} />

      <style jsx>{`
        .blog-content {
          display: flex;
          flex: 100%;
          flex-direction: column;
          margin: 1vw 25vw 1vw 25vw;
          width: 50vw;
          max-width: 50vw;
        }
      `}</style>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostsPath()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  const mdxSource = await serialize(postData.content, { components })
  return {
    props: {
      postMetadata: postData.metadata,
      postContent: mdxSource,
      id: params.id,
    },
  }
}
