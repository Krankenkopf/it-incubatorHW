import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'
import {PATH} from "./App";

const Navbar: React.FC<any> = () => {
    return (
        <div className={classes.container}>
            <div className={classes.breadcrumb}>
                <NavLink to={PATH.HW1} className={classes.chapter}>
			        <span className={classes.breadcrumb__inner}>
				        <span className={classes.breadcrumb__title}>PreJunior</span>
				      {/*  <span className={classes.breadcrumb__desc}>First Item</span>*/}
			        </span>
                </NavLink>
				<NavLink to={PATH.HW1} activeClassName={classes.active}>
			        <span className={classes.breadcrumb__inner}>
				        <span className={classes.breadcrumb__title}>Homework 1</span>
			        </span>
                </NavLink>
				<NavLink to={PATH.HW2} activeClassName={classes.active}>
			        <span className={classes.breadcrumb__inner}>
				        <span className={classes.breadcrumb__title}>Homework 2</span>
			        </span>
                </NavLink>
				<NavLink to={PATH.HW3} activeClassName={classes.active}>
			        <span className={classes.breadcrumb__inner}>
				        <span className={classes.breadcrumb__title}>Homework 3</span>
			        </span>
                </NavLink>
				<NavLink to={PATH.HW4} activeClassName={classes.active}>
			        <span className={classes.breadcrumb__inner}>
				        <span className={classes.breadcrumb__title}>Homework 4</span>
			        </span>
                </NavLink>
				<NavLink to={PATH.HW5} activeClassName={classes.active}>
			        <span className={classes.breadcrumb__inner}>
				        <span className={classes.breadcrumb__title}>Homework 5</span>
			        </span>
				</NavLink>
				<NavLink to={PATH.HW6} activeClassName={classes.active}>
			        <span className={classes.breadcrumb__inner}>
				        <span className={classes.breadcrumb__title}>Homework 6</span>
			        </span>
				</NavLink>
            </div>
        </div>
    )
}

export default Navbar