<template>
  <div :class="classes['scroll-up']">
    <svg
      id="Layer_1"
      :class="classes.icon"
      height="60"
      viewBox="0 0 512 512"
      width="60"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      data-name="Layer 1"
      @click="scrollUp"
    >
      <linearGradient
        id="GradientFill_1"
        gradientUnits="userSpaceOnUse"
        x1="256"
        x2="256"
        y1="5.571"
        y2="506.43"
      >
        <stop offset="0" stop-color="#fcaf2b" />
        <stop offset="1" stop-color="#e03536" />
      </linearGradient>
      <path
        class="shadow"
        d="m504.971 465.459a24 24 0 1 1 -33.942 33.941l-215.029-215.029-215.029 215.029a24 24 0 0 1 -33.942-33.941l232-232a24 24 0 0 1 33.942 0zm-464-186.918 215.029-215.029 215.029 215.029a24 24 0 0 0 33.942-33.941l-232-232a24 24 0 0 0 -33.942 0l-232 232a24 24 0 0 0 33.942 33.941z"
        fill="url(#GradientFill_1)"
      />
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      classes: {
        'scroll-up': 'fixed right-10 bottom-10 z-50',
        icon: 'cursor-pointer bg-indigo-900 bg-opacity-0  opacity-50 transition duration-500 hover:opacity-100 hover:shadow-lg transform hover:scale-110 p-2 rounded-full hover:bg-opacity-30',
      },
    }
  },
  methods: {
    scrollUp() {
      console.log('scrollUp func()')
      // document.body.scrollTop = 0
      // document.documentElement.scrollTop = 0
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },
}
</script>

<style></style>
