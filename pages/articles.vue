<template>
  <section id="articles" :class="classes.section">
    <h1 v-if="!searchQuery">Articles</h1>

    <h1 v-if="searchQuery">Search results for: {{ searchQuery }}</h1>

    <div :class="classes.searchBox">
      <form :class="classes.search">
        <span :class="classes.search"></span>
        <nuxt-link :class="classes.link" :to="execSearch()">
          <button :class="classes.searchBtn" aria-label="Search">Search</button>
        </nuxt-link>
        <input
          :class="classes.searchInput"
          type="search"
          placeholder="Search Articles"
          v-model="search"
          aria-label="Search Input"
        />
      </form>
    </div>

    <div :class="classes.timeline">
      <div :class="classes['article-list']">
        <section
          v-for="post in posts"
          :key="post.title"
          :class="[classes.post]"
        >
          <nuxt-link
            :class="classes.link"
            :to="'/blog/' + post.path.split('/')[1]"
          >
            <div :class="classes.postCard">
              <img
                :class="classes.postImage"
                v-if="post.image"
                :src="
                  require('~/content/' +
                    post.path.split('/')[1] +
                    '/' +
                    post.image)
                "
                :alt="post.title"
              />
              <div :class="classes.postBody">
                <h3 :class="classes.postTitle">
                  {{ post.title }}
                </h3>
              </div>
            </div>
          </nuxt-link>
        </section>
      </div>
    </div>

    <button
      :class="classes.button"
      @click="getMorePosts"
      style="margin-top: 30px"
      v-if="!searchQuery"
    >
      See more articles
    </button>
  </section>
</template>

<script>
export default {
  watchQuery: ['s'],

  key: (to) => to.fullPath,

  data() {
    return {
      classes: {
        section: 'container m-auto',
        searchBox: '',
        search: '',
        link: '',
        button: '',
        searchInput: '',
        'article-list': 'min-h-screen pt-20',
        post: 'post-dark right relative pl-10 mb-4 mx-2 md:mb-8 lg:mb-14 sm:left-1/2 max-w-lg',
        postCard:
          'p-6 bg-indigo-900 bg-opacity-0 shadow-md text-gray-100 font-bold border-4 border-purple-900 transition duration-300 hover:shadow-lg hover:border-yellow-400 hover:bg-opacity-100',
        postImage: '',
        postTitle: '',
        postBody: '',
        timeline: 'timeline relative mx-auto max-w-screen-xl',
      },

      page: 1,
      search: '',
    }
  },

  methods: {
    async getMorePosts() {
      const blogPosts = await this.$content({ deep: true })
        .only(['title', 'description', 'image', 'path'])
        .sortBy('createdAt', 'desc')
        .skip(9 * this.page)
        .limit(9)
        .fetch()
      blogPosts.forEach((post) => {
        this.posts.push(post)
      })
      this.page++
    },

    execSearch() {
      if (this.search === '') return '/articles/'
      return '/articles/?s=' + this.search.toLowerCase()
    },
  },

  async asyncData({ $content, route }) {
    const searchQuery = route.query.s

    let posts
    if (!searchQuery) {
      posts = await $content({ deep: true })
        .only(['title', 'description', 'image', 'path'])
        .sortBy('createdAt', 'desc')
        .limit(9)
        .fetch()
    } else {
      posts = await $content({ deep: true })
        .only(['title', 'description', 'image', 'path'])
        .sortBy('createdAt', 'desc')
        .search('title', searchQuery)
        .fetch()
    }

    return {
      posts,
      searchQuery,
    }
  },
}
</script>

<style>
.timeline::after {
  content: '';
  position: absolute;
  width: 6px;
  background-color: white;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}

.post-dark::after {
  content: '';
  position: absolute;
  width: 50px;
  height: 50px;
  left: -33px;
  background-color: rgba(76, 29, 149, 1);
  border: 15px solid rgba(91, 33, 182, 1);
  top: 16px;
  z-index: 1;
}

@media screen and (max-width: 640px) {
  .timeline::after {
    left: 20px;
  }
  .post-dark::after {
    left: -13px;
  }
}

/* .right::before {
  content: ' ';
  height: 0;
  position: absolute;
  top: 30px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid #6ee7b7;
  border-width: 10px 10px 10px 0;
  border-color: transparent #6ee7b7 transparent transparent;
} */
</style>
