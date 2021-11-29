import React from 'react'
import classes from './Login.module.css'
import { Col, Container, Row, Input } from 'reactstrap'
import { useRouter } from 'next/router'
import MainNavigation from '../../components/MainNavigation/MainNavigation'
import axios from '../../utils/axios'
import Loader from "react-loader-spinner";

const Login = () => {
    const router = useRouter()
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)
    React.useEffect(() => {
        document.title = ' Simple-Auth | Login'
        if (localStorage.getItem('token'))
            router.replace('/')
        else
            setLoading(false)
    }, [])
    const loginHandler = () => {
        axios.post('/user/login', {
            email,
            password
        }).then(response => {
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            router.push('/')

        }).catch(err => {
            console.log(err)
            if (err.response.status === 400)
                setError(true)
        })
    }
    return (
        <React.Fragment>
            {
                !loading ?
                    <Container fluid className={classes.loginContainer}>
                        <Container>
                            <Row className={classes.inputRow}>
                                <Col md='6'>
                                    <MainNavigation />
                                </Col>
                            </Row>
                            <Row className={classes.inputRow}>
                                <Col md='6'>
                                    <Input className={classes.input}
                                        placeholder='Email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onFocus={() => setError(false)} />
                                </Col>
                            </Row>
                            <Row className={classes.inputRow}>
                                <Col md='6'>
                                    <Input
                                        className={classes.input}
                                        placeholder='Password'
                                        value={password}
                                        type='password'
                                        onFocus={() => setError(false)}
                                        onChange={(e) => setPassword(e.target.value)} />
                                </Col>
                            </Row>
                            <Row className={classes.inputRow}>
                                <Col md='6' style={{ color: 'red', display: 'flex', justifyContent: 'center' }}>
                                    {error && <h6>Incorrect email or password!</h6>}
                                </Col>
                            </Row>
                            <Row className={classes.inputRow}>
                                <Col md='6' className={classes.buttonContainer}>
                                    <button className={classes.submitButton} onClick={loginHandler}>
                                        Submit
                                    </button>
                                </Col>
                            </Row>
                        </Container>
                    </Container>
                    :
                    <Container fluid className={classes.loginContainer} style={{ display: 'flex', justifyContent: 'center' }}>
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

export default Login
