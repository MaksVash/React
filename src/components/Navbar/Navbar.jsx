import React from 'react'
import { NavLink } from 'react-router-dom';

import s from'./Navbar.module.css';
const Navbar = ()=>{
    return (
    <nav className={s.nav}>
    <div className={s.item}>
       <NavLink to="/profile"   activeclassname={s.active} > Profile</NavLink>
       </div>
    <div  className={s.item}>
      <NavLink to='/dialogs'   activeclassname={s.active}>Dialog</NavLink>
      </div>
    <div  className={s.item}>
      <NavLink to='/news'>News</NavLink>
      </div>
    <div  className={s.item}>
      <NavLink to='/musik'>Music</NavLink>
      </div>
    <div  className={s.item}>
      <NavLink to='/seting'>Settings</NavLink>
      </div>
  </nav>
    )
}
export default Navbar;