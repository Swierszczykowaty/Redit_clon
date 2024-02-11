import React, { useState, useEffect, useRef } from 'react';
import './Nav_bar.css';
import { FaHouse } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { TfiCommentAlt } from "react-icons/tfi";
import { BsBell } from "react-icons/bs";
import { TfiAnnouncement } from "react-icons/tfi";
import { LuFlower } from "react-icons/lu";
import { BsPlusLg } from "react-icons/bs";
function Nav_Bar() {
  const [expanded, setExpanded] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className='nav_box'>
          <img src="imagines/reddit.png" alt="panda" className='panda' />
          <div className='nav_menu' ref={menuRef}>
            <div onClick={toggleMenu} className='nav_home'>
              <FaHouse className='nav_house'/>
              Home
              <IoIosArrowDown className='nav_arrow'/>
              </div>
            {expanded && (
              <ul>
                <li>OPCJA 1</li>
                <li>Opcja 2</li>
                <li>Opcja 3</li>
              </ul>
            )}
          </div>
          <div className='nav_search'>
            <CiSearch className='lupa' />
            <input type="text" placeholder='Search Reddit' className='nav_input' />
          </div>
          <div className='nav_icons_bar'>
            <BsArrowUpRightCircle className='nav_icons'/>
            <TfiCommentAlt className='nav_icons'/>
            <BsBell className='nav_icons'/>
            <BsPlusLg className='nav_icons'/>
            <div className='ano_box'>
            <TfiAnnouncement className='nav_icons' id='ano'/>
            </div>
          </div>
          <div className='nav_avatar_box'>
            <div className='nav_small_avata_box'>
                <div className='nav_avatar'>
                </div>
                <div className='nav_letters'>
                  <div className='nav_username'>
                    Ignac
                  </div>
                  <div className='nav_karma'>
                  <LuFlower className='nav_flower' />
                    1 karma
                  </div>
                </div>
                
            </div>
            <div className='nav_avatar_arrow'>
              <IoIosArrowDown className='nav_arrow'/>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav_Bar;
