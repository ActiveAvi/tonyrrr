<template>
  <div>
    <hero />
    <opt-in />
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import OptIn from '~/components/OptIn.vue'
export default {
  components: { Hero, OptIn },
  layout: 'default',
}
</script>

<style></style>
