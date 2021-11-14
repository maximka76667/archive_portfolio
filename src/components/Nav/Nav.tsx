import { NavLink } from "react-router-dom";
import './Nav.css';

function Nav() {
  return (
    <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item"><NavLink className={
            ({ isActive }) => "nav__link" + (isActive ? " nav__link_active" : "")
            } end to="/">Works</NavLink></li>
          <li className="nav__item"><NavLink className={
            ({ isActive }) => "nav__link" + (isActive ? " nav__link_active" : "")
            } end to="/about">About</NavLink></li>
        </ul>
      </nav>
  )
}

export default Nav;