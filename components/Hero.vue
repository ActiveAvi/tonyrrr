<template>
  <!-- <div
    class="
      hero
      m-auto
      w-full
      h-screen
      bg-gradient-to-b
      from-purple-800
      via-transparent
      to-purple-800
    "
  >
    <div class="w-full h-full"></div>
  </div> -->
  <div :class="[classes.section]">
    <img :class="classes.img" src="../assets/img/dead-cptn.jpg" alt="" />
    <div :class="[classes.inner]">
      <h1 :class="classes.header">A New Kind of Pirate Emerges...</h1>
      <p>
        Arr, I be TonyRrr! I'm here to facilitate business online. That means
        getting your products and services online and seen by the right people.
        I handle website design and development, all the while making it
        market-friendly through market research.
      </p>
      <button :class="[classes.button]">Talk Business</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      classes: {
        section:
          'h-screen bg-black overflow-hidden grid sm:grid-cols-2 content-center justify-items-center',
        imgbox: 'sm:mt-16',
        img: ' 2xl:mt-44',
        inner: 'max-w-sm self-center',
        header: 'text-2xl cursor-default',
        button:
          'bg-purple-700 p-1 m-1 transition duration-300 hover:bg-indigo-800 hover:text-yellow-300 hover:ring-2 ring-yellow-300',
      },
    }
  },
}
</script>

<style>
.bg {
  background-image: url('../assets/img/dead-cptn.jpg');
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
