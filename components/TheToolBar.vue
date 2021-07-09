<template>
  <header :class="[{ 'shadow-md': scrolling }, classes.header]">
    <progress-bar :value="progress" />
    <div :class="classes.flexbox">
      <a :class="classes.brand" href="/">TonyRrr</a>
      <nav :class="classes.nav">
        <ul :class="classes.ul">
          <li v-for="(route, index) in routes" :key="index" :class="classes.li">
            <nuxt-link :class="classes.link" :to="route.path">{{
              route.name
            }}</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import debounce from 'lodash/debounce'
import ProgressBar from './ProgressBar.vue'

export default {
  components: { ProgressBar },
  name: 'TheToolBar',

  data() {
    return {
      progress: 0,
      scrolling: false,
      classes: {
        header:
          'bg-gradient-to-b from-purple-900 to-purple-800 text-white fixed msm:bottom-0  sm:top-0 z-10 w-full',
        flexbox: 'sm:flex mx-auto container py-4 sm:p-8',
        brand: 'msm:hidden pl-10',
        nav: 'mx-auto',
        ul: '',
        li: 'inline-block',
        link: 'p-2 transition bg-indigo-900 bg-opacity-0 duration-500 hover:text-red-300 border-redviolet hover:ring-4 ring-yellow-400 mx-2 hover:bg-opacity-100 hover:shadow ',
        'color-mode': 'bg-gray-200 bg-gray-800',
      },
      routes: [
        { path: '/', name: 'Home' },
        { path: '/articles', name: 'Blog' },
        { path: '/work', name: 'Work' },
        { path: '/about', name: 'About' },
        { path: '/contact', name: 'Contact' },
      ],
    }
  },

  beforeMount() {
    this.handleDebouncedScroll = debounce(this.handleScroll, 10)
    window.addEventListener('scroll', this.handleDebouncedScroll)
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll(event) {
      if (window.scrollY > 20) {
        this.scrolling = true
      } else {
        this.scrolling = false
      }

      this.$emit('scroll-up', this.scrolling)

      this.progress =
        window.scrollY / (document.body.scrollHeight - window.innerHeight)
    },
  },
}
</script>

<style></style>
