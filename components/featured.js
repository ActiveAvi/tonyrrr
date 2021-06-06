const classes = {
  section: `py-20 sm:px-20`,
  header: `text-white text-3xl px-1 mb-10 min-w-xs`,
  hash: 'text-blue-400 font-extrabold text-2xl',
  post: 'max-w-xs sm:mr-4 md:mr-6 my-5',
  title: 'text-lg',
  date: 'text-sm',
  postBox: 'px-5 flex flex-wrap',
}

export default function Featured({ posts }) {
  return (
    <section className={classes.section}>
      <h1 className={classes.header}>
        <span className={classes.hash}>#</span>Blog
      </h1>
      <div className={classes.postBox}>
        {posts.map((post) => (
          <article key={post.id} className={classes.post}>
            <h2 className={classes.title}>{post.title}</h2>
            <span className={classes.date}>{post.date}</span>
            <p className={classes.desc}>{post.description}</p>
            <a className={classes.link} href={`/blog/${post.id}`}>
              Read more
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
