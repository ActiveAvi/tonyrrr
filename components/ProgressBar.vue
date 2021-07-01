<template>
  <div :class="[classes.progressBar, 'progress-bar']">
    <div
      :class="[classes.filledBar, 'filled-bar']"
      :style="{ transform: `translate3d(-${(1 - value) * 100}%, 0, 0)` }"
    ></div>
    <!-- <span class="percentage-text"> Progress: {{ percentageText }} </span> -->
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    percentageText() {
      return `${Math.round(this.value * 100)}%`
    },
  },

  data() {
    return {
      classes: {
        progressBar: 'bg-purple-300 sticky sm:absolute top-0',
        filledBar: 'bg-green-600',
      },
    }
  },
}
</script>

<style scoped>
.progress-bar {
  /* position: absolute;
  top: -10px; */
  z-index: 50;
  height: 10px;
  width: 100%;
  /* border-bottom: 1px solid #f0f0f0; */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 3px 3px 0 0;
}

.percentage-text {
  position: absolute;
  color: red;
  top: 50%;
  left: 50%;
  z-index: 2;
  font-size: 14px;
  transform: translate3d(-50%, -50%, 0);
}

.filled-bar {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  height: 100%;
  width: 100%;
}
</style>
