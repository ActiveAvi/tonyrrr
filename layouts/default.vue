<template>
  <div class="bg-purple-800 text-white">
    <the-tool-bar @scroll-up="handleScroll" />
    <scroll-up v-if="scrolling" />
    <nuxt />
  </div>
</template>

<script>
import ScrollUp from '~/components/ScrollUp.vue'
import TheToolBar from '~/components/TheToolBar.vue'

export default {
  colorMode: 'dark',
  components: { TheToolBar, ScrollUp },
  data() {
    return {
      scrolling: false,
    }
  },
  methods: {
    handleScroll(scrolling) {
      this.scrolling = scrolling
    },
  },
}
</script>

<style></style>
