<template>
  <div :class="[classes.article]">
    <article :class="classes.articleBody">
      <nuxt-content :document="article" />
    </article>
    <nav :class="classes.toc">
      <ul :class="classes.list">
        <li
          :class="{
            'border-b border-dashed': link.depth === 2,
            'ml-4': link.depth === 3,
          }"
          v-for="link of article.toc"
          :key="link.id"
        >
          <nuxt-link :to="`#${link.id}`">{{ link.text }}</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'TonyRrrs Blog',
      classes: {
        article:
          'sm:mt-24 sm:grid sm:grid-cols-4 justify-center mx-auto container w-full p-4 ',
        articleBody: 'article-body sm:col-span-3 prose dark:prose-dark mx-auto',
        toc: 'sticky h-20 top-28 max-w-xs opacity-60',
        list: 'list-none',
        item: '',
      },
    }
  },

  async asyncData({ $content, params, error }) {
    try {
      const [article] = await $content({ deep: true })
        .where({ dir: `/${params.slug}` })
        .fetch()

      return { article }
    } catch (err) {
      error({
        statusCode: 404,
        message: 'Page could not be found',
      })
    }
  },

  head() {
    return {
      title: this.article.title,
    }
  },
}
</script>

<style>
.article-body {
  width: inherit;
}
</style>
