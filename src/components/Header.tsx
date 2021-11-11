import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();
  // {location.pathname === "/" ? '' : 'Главная'}
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item"><Link className="nav__link" to="/">Main</Link></li>
          <li className="nav__item"><Link className="nav__link" to="/works">My works</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;