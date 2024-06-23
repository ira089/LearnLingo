import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header.module.css';
import { MdOutlineLogin } from "react-icons/md";
import { IconContext } from "react-icons";


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
          <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
             <button className={styles.btnLogin} type='button'>
               <MdOutlineLogin color='#8a8a89' size={20}/>
               <span>Log in</span>
              </button>
          </IconContext.Provider>
         
          <button className={styles.btnRegistration} type='button'>
             Registration
          </button>
            {/* <NavLink className={styles.linkRegistration}>Log in</NavLink>
            <NavLink className={styles.linkRegistration}>Registration</NavLink> */}
        </div>
    </section>
    
    
  );
};
export default Header;



    

