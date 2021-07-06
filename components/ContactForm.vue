<template>
  <div :class="classes.formSection">
    <div :class="classes.formBox">
      <h1 :class="classes.header">Connect, Strategize, Build</h1>
      <form :class="classes.form">
        <label for="name" :class="classes.label">Name:</label>
        <input type="text" :class="classes.input" v-model="name" />
        <label for="name" :class="classes.label">Email:</label>
        <input type="text" :class="classes.input" v-model="email" />
        <label for="name" :class="classes.label">Message:</label>
        <textarea type="text" :class="classes.input" v-model="message" />
        <button @click.prevent="handleSubmit">Send Message</button>
      </form>
      <p :class="classes.alert" v-if="submitted">Submitted</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      submitted: false,
      name: '',
      email: '',
      message: '',
      classes: {
        formSection: 'bg-black h-screen grid content-center',
        header: 'text-xl py-4',
        formBox: 'max-w-sm mx-auto p-2',
        form: '',
        label: 'block uppercase',
        input:
          'text-white bg-gray-800 border-l-4 border-gray-50 block w-full p-1',
        alert: '',
      },
    }
  },
  methods: {
    handleSubmit() {
      let data = { name: this.name, email: this.email, message: this.message }
      console.log(data)
      fetch('https://api.tonyrrr.dev/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          res.json()
          this.submitted = true
          this.name = ''
          this.email = ''
          this.message = ''
        })
        .catch((err) => console.log(err))
    },
  },
}
</script>

<style></style>
