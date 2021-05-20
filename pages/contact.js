import { Form, Button } from 'react-bootstrap'
import styles from '../theme/contact.module.css'
import { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [spam, setSpam] = useState(false)
  const [submitted, setSubmitted] = useState(false)

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

    fetch(process.env.MAIL_URL, {
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
      }
    })
  }

  return (
    <div className={styles.container}>
      <h1>Send me an email</h1>
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control onChange={(e) => setName(e.target.value)} type='text' />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type='email'
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Message</Form.Label>
          <Form.Control
            className={styles.formMsg}
            onChange={(e) => setMessage(e.target.value)}
            type='text'
          />
        </Form.Group>
        <Form.Group className={styles.formWebsite}>
          <Form.Label>Website</Form.Label>
          <Form.Control
            className={styles.formWebsite}
            onChange={(e) => setSpam(true)}
            type='text'
          />
        </Form.Group>
      </Form>
      <Button
        className={styles.submitBtn}
        onClick={(e) => handleSubmit(e)}
        variant='primary'
        type='submit'
        disabled={submitted}>
        Send
      </Button>
    </div>
  )
}
