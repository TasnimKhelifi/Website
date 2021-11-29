import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import classes from './Home.module.css'
import { useRouter } from 'next/router'
import Loader from "react-loader-spinner";


const Home = () => {
  const router = useRouter()
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    document.title = ' Simple-Auth | Home'
    if (!localStorage.getItem('token'))
      router.replace('/login')
    else
      setLoading(false)

  }, [])
  return (
    <React.Fragment>
      {
        !loading ?
          <Container fluid className={classes.mainContainer} >
            <Container>
              <Row className={classes.logoContainer}>
                <Col md='6' style={{ backgroundColor: 'black', height: '200px' }}>
                  <span className={classes.orangeTag}></span>
                  <span className={classes.blueTag}></span>
                </Col>
              </Row>
              <Row>
                <Col style={{ display: 'flex', justifyContent: 'center' }}>
                  <h3>The above logo is made in pure CSS</h3>
                </Col>
              </Row>
            </Container>
          </Container >
          :
          <Container fluid className={classes.mainContainer} style={{ display: 'flex', justifyContent: 'center' }}>
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
            />
          </Container>
      }
    </React.Fragment>

  )
}


export default Home
