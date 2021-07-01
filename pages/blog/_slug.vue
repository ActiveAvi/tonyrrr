<template>
  <div :class="[classes.article]">
    <article :class="classes.articleBody">
      <nuxt-content :document="article" />
    </article>
    <div :class="classes.wrapper"></div>
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
      classes: {
        article:
          'md:flex justify-center mx-auto container w-full p-4 sm:min-w-lg',
        articleBody: ' xl:w-max max-w-2xl prose dark:prose-dark',
        toc: 'lg:fixed top-32 w-44 right-2 xl:right-10 max-w-xs opacity-60',
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
}
</script>

<style></style>
