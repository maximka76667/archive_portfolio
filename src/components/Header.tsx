import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  // {location.pathname === "/" ? '' : 'Главная'}
  return (
    <header className="header">
      <Link to="/">Главная</Link>
    </header>
  )
}

export default Header;