import { useEffect } from 'react'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { getAllPostsPath, getPostData } from '../../lib/getPostsData.js'
import Prism from 'prismjs'
import 'prismjs/components/prism-shell-session'
import 'prismjs/themes/prism-dark.css'

const classes = {
  blog: 'p-2 max-w-lg m-auto',
  headerOne: `text-2xl pb-2 border-b-2 mb-2 font-black`,
  headerTwo: 'text-lg pt-6 pb-2 font-extrabold',
  body: `py-2`,
  blockquote: 'bl-3 py-2',
}

const components = {
  h1: (props) => <h1 className={classes.headerOne} {...props} />,
  h2: (props) => <h2 className={classes.headerTwo} {...props} />,
  p: (props) => <p className={classes.body} {...props} />,
  code: (props) => <code className={classes.code} {...props} />,
  blockquote: (props) => (
    <blockquote className={classes.blockquote}>
      <p {...props} />
    </blockquote>
  ),
}

export default function Blog({ postMetadata, postContent }) {
  useEffect(() => {
    if (typeof window != 'undefined') {
      Prism.highlightAll()
    }
  }, [])

  return (
    <div className={classes.blog}>
      <MDXRemote {...postContent} components={components} />
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
