import React from 'react'
import classes from './Navbar.module.css'
import { Navbar } from 'reactstrap'
import Image from 'next/image'
import logo from '../../assets/img/logo.png'
import { useRouter } from 'next/router'

const IndexNavbar = () => {
    const router = useRouter()
    const logoutHandler = () => {
        localStorage.clear('token')
        router.replace('/login')
    }
    return (
        <Navbar className={classes.navbar}>
            <div style={{ display: 'flex' }}>
                <Image src={logo} height='30' width='30' alt='logo' />
                <p className={classes.navItem}>Home</p>
                <p className={classes.navItem}>About Us</p>
                <p className={classes.navItem}>Contact Us</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <p className={classes.conntectedUser}>TK</p>

            </div>
        </Navbar>
    )
}

export default IndexNavbar
