import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header.module.css';


const Header = () => {
  return (
    <section className={styles.header}>
        <div className={styles.logo}>
           <p className={styles.circle}></p>           
           <p> LearnLingo</p>
        </div>

        <div className={styles.navigation}>
           <NavLink className={styles.linkNavigation} to="/">Home</NavLink>
           <NavLink className={styles.linkNavigation} to="/teachers">Teachers</NavLink>
        </div>

        <div className={styles.registration}>
            <NavLink className={styles.linkRegistration}>Log in</NavLink>
            <NavLink className={styles.linkRegistration}>Registration</NavLink>
        </div>
    </section>
    
    
  );
};
export default Header;



    

