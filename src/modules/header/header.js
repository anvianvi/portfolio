import './header.css';
import { useState } from 'react';

function Header() {

  const [isBurgerOpen, setisBurgerOpen] = useState(false);

  const handleClick = () => {
    setisBurgerOpen(!isBurgerOpen);
    document.body.classList.toggle('disable-scroll');
  };

  const closeBurger = () => {
    setisBurgerOpen(false);
    document.body.classList.remove('disable-scroll');

  }

  return (
    <header className='header'>
      <div className='header-wrapper content-wrapper'>
        <a href='#hero' className='logo link'>
          <div className='logo-img'></div>
          <div className='logo-name'>Pavel Viarbitski</div>
        </a>

        <div className={`menu-bar ${isBurgerOpen ? 'open' : ''}`} onClick={handleClick}>
          <div class='bar bar1'></div>
          <div class='bar bar2'></div>
          <div class='bar bar3'></div>
        </div>

        <nav className={`nav ${isBurgerOpen ? 'open' : ''}`}>
          <li className='nav-item'><a href='#hero' className='link' onClick={closeBurger()}>HOME</a></li>
          <li className='nav-item'><a href='#about' className='link' onClick={closeBurger()}>ABOUT</a></li>
          <li className='nav-item'><a href='#projects' className='link' onClick={closeBurger()}>PROJECTS</a></li>
          <li className='nav-item'><a href='#contacts' className='link' onClick={closeBurger()}>CONTACT</a></li>
        </nav>
      </div>
      <div class={`nav-bg ${isBurgerOpen ? 'open' : ''}`}></div>
      <div class={`burger-bg ${isBurgerOpen ? 'open' : ''}`} onClick={closeBurger()}></div>

    </header>
  );
}

export default Header;   
