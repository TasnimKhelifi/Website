import React from 'react'
import classes from './Signup.module.css'
import { Col, Container, Row, Input } from 'reactstrap'
import MainNavigation from '../../components/MainNavigation/MainNavigation'
import axios from '../../utils/axios'
import Loader from "react-loader-spinner";
import { useRouter } from 'next/router'

const Signup = () => {
    const router = useRouter()
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [rePassword, setRePassword] = React.useState('')
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        document.title = ' Simple-Auth | Register'
        if (localStorage.getItem('token'))
            router.replace('/')
        else
            setLoading(false)
    }, [])

    const signupHander = () => {
        if (password.trim() !== '') {
            if (password === rePassword) {
                axios.post('/user/register', {
                    firstName,
                    lastName,
                    password,
                    email
                })
                    .then(response => {
                        console.log(response)
                    }).catch(err => {
                        console.log(err)
                    })
            }
            else {
                setError(true)
            }
        }
    }

    return (
        <React.Fragment>
            {
                !loading ?
                    <Container fluid className={classes.signupContainer}>
                        <Container>
                            <Row className={classes.inputRow}>
                                <Col md='6'>
                                    <MainNavigation />
                                </Col>
                            </Row>
                            <Row className={classes.inputRow}>
                                <Col md='6'>
                                    <Row>
                                        <Col>
                                            <Input
                                                className={classes.input}
                                                value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)}
                                                placeholder='First Name' />
                                        </Col>
                                        <Col>
                                            <Input
                                                className={classes.input}
                                                value={lastName}
                                                onChange={(e) => setLastName(e.target.value)}
                                                placeholder='Last Name' />
                                        </Col>
                                    </Row>
                                </Col>

                            </Row>
                            <Row className={classes.inputRow}>
                                <Col md='6'>
                                    <Input
                                        className={classes.input}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder='Email' />
                                </Col>
                            </Row>
                            <Row className={classes.inputRow}>
                                <Col md='6'>
                                    <Input
                                        className={classes.input}
                                        type='password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder='Password' />
                                </Col>
                            </Row>
                            <Row className={classes.inputRow}>
                                <Col md='6'>
                                    <Input
                                        className={classes.input}
                                        type='password'
                                        value={rePassword}
                                        onChange={(e) => setRePassword(e.target.value)}
                                        placeholder='Repeat Password' />
                                </Col>
                            </Row>
                            <Row className={classes.inputRow}>
                                <Col md='6' style={{ color: 'red', display: 'flex', justifyContent: 'center' }}>
                                    {error && <h6>Password dont match!</h6>}
                                </Col>
                            </Row>
                            <Row className={classes.inputRow}>
                                <Col md='6' className={classes.buttonContainer}>
                                    <button className={classes.submitButton} onClick={signupHander} disabled={error}>
                                        Submit
                                    </button>
                                </Col>
                            </Row>
                        </Container>
                    </Container>
                    :
                    <Container className={classes.signupContainer} style={{ display: 'flex', justifyContent: 'center' }}>
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

export default Signup
