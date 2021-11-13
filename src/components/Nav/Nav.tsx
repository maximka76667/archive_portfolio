import { Link } from "react-router-dom";
import './Nav.css';

function Nav() {
  return (
    <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item"><Link className="nav__link" to="/">Works</Link></li>
          <li className="nav__item"><Link className="nav__link" to="/about">About</Link></li>
        </ul>
      </nav>
  )
}

export default Nav;