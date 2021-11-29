import React from 'react'
import classes from './Footer.module.css'
import logo from '../../assets/img/logo.png'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.container}>
                <Image src={logo} height='80' width='80' alt='logo' />
                <p className={classes.copyright}>
                    &copy; All rights Reserved
                </p>
            </div>
        </div>
    )
}

export default Footer
