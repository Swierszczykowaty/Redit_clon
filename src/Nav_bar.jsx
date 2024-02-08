import React, { useState } from 'react';
import './Nav_bar.css';

function Nav_Bar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className='nav_box'>
            <img src="imagines/reddit.png" alt="panda" className='panda' />
            <div className='nav_menu'>
              <button onClick={toggleMenu} className=''>Menu</button>
              {isMenuOpen && (
                <ul>
                  <li>Element 1</li>
                  <li>Element 2</li>
                  <li>Element 3</li>
                </ul>
              )}
            </div>
        </div>
      </nav>
    </>
  );
}

export default Nav_Bar;
