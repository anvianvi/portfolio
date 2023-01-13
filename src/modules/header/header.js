import './header.css';

function Header() {
  return (
    <header className='header'>
      <div className='header-wrapper content-wrapper'>
        <a href='#hero' className='logo link'><div className='logo-img'></div>Pavel Viarbitski</a>
        <nav className='nav'>
          <li className='nav-item'><a href='#hero' className='link'>HOME</a></li>
          <li className='nav-item'><a href='#about' className='link'>ABOUT</a></li>
          <li className='nav-item'><a href='#projects' className='link'>PROJECTS</a></li>
          <li className='nav-item'><a href='#contacts' className='link'>CONTACT</a></li>
        </nav>
      </div>

    </header>
  );
}

export default Header;   
