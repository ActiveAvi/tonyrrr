<template>
  <div :class="classes.section">
    <link
      href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css"
      rel="stylesheet"
      type="text/css"
    />
    <div id="mc_embed_signup" :class="classes.inner">
      <h1 :class="classes.sectionhead">
        Digital Business Tips, Matrix Hacks, and More
      </h1>
      <form
        action="https://dev.us6.list-manage.com/subscribe/post?u=d31c8c56a5b47cecaf8ca5fe7&amp;id=e325e27ac5"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_blank"
        novalidate
      >
        <div id="mc_embed_signup_scroll">
          <label for="mce-EMAIL">Subscribe to my mailing list</label>
          <input
            type="email"
            value=""
            name="EMAIL"
            class="email"
            id="mce-EMAIL"
            placeholder="email address"
            required
          />
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px" aria-hidden="true">
            <input
              type="text"
              name="b_d31c8c56a5b47cecaf8ca5fe7_e325e27ac5"
              tabindex="-1"
              value=""
            />
          </div>
          <div class="clear">
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              class="button"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
  <!--End mc_embed_signup-->
</template>

<script>
export default {
  data() {
    return {
      classes: {
        section: '',
        sectionhead: 'text-xl py-2',
        inner: 'max-w-lg mx-auto py-20',
      },
    }
  },
}
</script>

<style>
#mc_embed_signup {
  clear: left;
  font: 14px Helvetica, Arial, sans-serif;
}
</style>
