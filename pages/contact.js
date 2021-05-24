import styles from '../styles/contact.module.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import classes from '../styles/contact.styles.js'

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
