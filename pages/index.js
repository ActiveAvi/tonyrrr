import styles from '../theme/index.module.css'
import { Jumbotron, Button, Container } from 'react-bootstrap'

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
          <Button variant='primary'>Consult with me</Button>
        </Container>
      </Jumbotron>
    </div>
  )
}
