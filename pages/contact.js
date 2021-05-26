import { useState } from 'react'
import { useRouter } from 'next/router'

const classes = {
  formBox: `w-full max-w-sm m-auto`,
  form: 'px-8 pt-6 font-mono lowercase',
  formInput: `shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring`,
  formMsg: `h-20`,
  formLabel: `leading-8`,
  formSite: 'hidden',
  formButton:
    'bg-blue-600 text-gray-50 px-2 py-1 rounded lowercase transition transform hover:scale-110 hover:bg-yellow-200 hover:text-gray-700',
  infoAlert: 'block mt-3 p-1 rounded text-center bg-yellow-200',
  contactHeader: 'text-xl w-max m-auto pt-24 pb-5',
}

export default function Contact() {
  // Form state declarations
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [spam, setSpam] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const router = useRouter()

  // Component functions
  const handleSubmit = (e) => {
    e.preventDefault()
    if (spam) {
      setSubmitted(true)
      return
    }
    let data = {
      name,
      email,
      message,
    }

    fetch('https://api.tonyrrr.dev/mail', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded')
        setName('')
        setEmail('')
        setMessage('')
        setSubmitted(true)
        setTimeout(() => router.push('/'), 1500)
      }
    })
  }

  // Variable sub-components
  let submittedAlert = ''

  if (submitted) {
    submittedAlert = (
      <span className={classes.infoAlert}>Message sent! Redirecting...</span>
    )
  }

  return (
    <div className={classes.formBox}>
      <h1 className={classes.contactHeader}>#Contact Me</h1>
      <form className={classes.form}>
        <label className={classes.formLabel}>Name</label>
        <input
          className={classes.formInput}
          onChange={(e) => setName(e.target.value)}
          type='text'
        />
        <label className={classes.formLabel}>Email address</label>
        <input
          className={classes.formInput}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
        />
        <label className={classes.formLabel}>Message</label>
        <textarea
          className={`${classes.formInput} ${classes.formMsg}`}
          onChange={(e) => setMessage(e.target.value)}
          type='text'
        />
        <div className={classes.formSite}>
          <label className={classes.formLabel}>Website</label>
          <input
            className={classes.formInput}
            onChange={(e) => setSpam(true)}
            type='text'
          />
        </div>
        <button
          className={classes.formButton}
          onClick={(e) => handleSubmit(e)}
          type='submit'>
          Send
        </button>
        {submittedAlert}
      </form>
    </div>
  )
}
