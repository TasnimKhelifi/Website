import React from 'react'
import classes from './MainNavigation.module.css'
import { Row, Col } from 'reactstrap'
import { useRouter } from 'next/router'
import userIcon from '../../assets/img/user.png'
import signinIcon from '../../assets/img/exit.png'
import Image from 'next/image'

const MainNavigation = () => {
    const router = useRouter()

    return (
        <Col className={classes.mainContainer}>
            <Row >
                <Col className={classes.register} onClick={() => router.push('/signup')}>
                    <Image src={userIcon} alt='user' height='40' width='40' />
                    <h6>Register</h6>
                    <p className={classes.description}>Browse and find what you need</p>
                </Col>
                <div className={classes.verticalLine}></div>
                <Col className={classes.login} onClick={() => router.push('/login')}>
                    <Image src={signinIcon} alt='user' height='40' width='40' />
                    <h6>Sign in</h6>
                    <p className={classes.description}>Already have an account, then welcome back</p>
                </Col>
            </Row>
        </Col>
    )
}

export default MainNavigation
