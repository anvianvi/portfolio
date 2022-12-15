import './header.css';

function Header() {
  return (
    <header className="header">
      <a href='#' className='logo link'><div className="logo-img"></div>Pavel Viarbbitski</a>
      <nav className='nav'>
        <li className='nav-item'><a href="#" className='link'>HOME</a></li>
        <li className='nav-item'><a href="#" className='link'>ABOUT</a></li>
        <li className='nav-item'><a href="#" className='link'>PROJECTS</a></li>
        <li className='nav-item'><a href="#" className='link'>CONTACT</a></li>
      </nav>

    </header>
  );
}

export default Header;   
