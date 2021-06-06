import { getFeaturedPosts, getPostsMetaData } from '../lib/getPostsData'
import Hero from '../components/hero'
import Services from '../components/services'
import Bio from '../components/bio'
import Projects from '../components/projects'
import Cta from '../components/cta'
import Featured from '../components/featured'
import Mailchimp from '../components/mailchimp'

export default function Home({ postsData }) {
  return (
    <div>
      <Hero />
      <Services />
      <Bio />
      <Projects />
      <Featured posts={postsData} />
      <Mailchimp />
      <Cta />
    </div>
  )
}

export async function getStaticProps() {
  const postsData = getFeaturedPosts()
  return {
    props: {
      postsData: postsData,
    },
  }
}
