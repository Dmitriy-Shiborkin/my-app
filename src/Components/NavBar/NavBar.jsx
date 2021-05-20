import { NavLink } from 'react-router-dom';
import style from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav id={style.nav}>
      <ul>
        <NavLink to="/" activeClassName={style.activeLink}><li></li></NavLink>
        <NavLink to="/Profile" activeClassName={style.activeLink}><li>Profile</li></NavLink>
        <NavLink to="/Wall" activeClassName={style.activeLink}><li>Wall</li></NavLink>
      </ul>
    </nav>
  )
}

export default NavBar;
