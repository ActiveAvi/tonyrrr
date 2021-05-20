import styles from '../theme/index.module.css'
import { Jumbotron, Button, Container, Row, Col, Card } from 'react-bootstrap'

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <Jumbotron className={styles.jumbo}>
        <Container>
          <h1>
            Welcome aboard, <br />
            freedom-seekers!
          </h1>
          <p>
            This ship belongs to TonyRrr. I'm a web developer, freedom advocate,
            business creator, and above-all, an autonomous pirate on the nets
            highseas.
          </p>
          <Button href='/contact' variant='primary'>
            Consult with me
          </Button>
        </Container>
      </Jumbotron>
      <Container>
        <Card bg='light' text='dark' style={{ width: '14rem' }}>
          <Card.Header>
            <Card.Title>TonyRrr.dev</Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>
              Next.js, Github, IPFS
            </Card.Subtitle>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              Personal portfolio / markdown blog site, created using Next.js,
              and deployed to IPFS using Fleek.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}
