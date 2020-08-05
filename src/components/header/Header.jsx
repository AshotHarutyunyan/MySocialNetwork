import React from 'react'
import classes from './Header.module.scss';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className={classes.header}>
            <div className={`container ${classes.headerContainer}`}>
                <div className={classes.logo}>
                    <h1>A</h1>
                </div>
                <div className={classes.headerUserInfo}>
                    <NavLink to={'/login'} className={classes.loginLink}>Login</NavLink>
                </div>
            </div>
        </header>
    )
}
