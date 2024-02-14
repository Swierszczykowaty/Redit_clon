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
import Icon_communities from './Icon_communities';
import { LuArrowUpRightFromCircle } from "react-icons/lu";
import { PiShieldCheckeredLight } from "react-icons/pi";
import { IoShirtOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { PiCircleHalfTilt } from "react-icons/pi";
function Icon_menu({ text, icon, className}) {
  return (
      <div className={`community_box ${className}`}>
            <div className='community_imagine'>{icon}</div>
            <div className='community_title'>
                {text}
            </div>
        </div>
  );
}
function Img_menu({ text, imageSrc }) {
  return (
    <div className='community_box'>
      <img className='community_image_image' src={imageSrc} alt={text} />
      <div className='community_title'>{text}</div>
    </div>
  );
}


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
              <div className='nav_menu_box'>
                <input className='nav_community_search' type="text" placeholder='Filter' />
                <div className='nav_community_title'>YOUR COMMUNITES</div>
                <Icon_menu text="Create Community" icon={<FaPlus size={20}/>} />
                <Icon_communities title="r/community324" image_com='./imagines/fox-body.svg'/>
                <Icon_communities title="r/com209" image_com='./imagines/bear-body.svg'/>
                <Icon_communities title="r/community1894" image_com='./imagines/sheep-body.svg'/>
                <Icon_communities title="r/community34494" image_com='./imagines/bunny-body.svg'/>
                <Icon_communities title="r/com9501" image_com='./imagines/cow-body.svg'/>
                <Icon_communities title="r/com995694" image_com='./imagines/monkey-body.svg'/>
                <div className='nav_community_title'>FEEDS</div>
                <Icon_menu text="Best" icon={<FaHouse size={20}/>} />
                <Icon_menu text="Popular" icon={<LuArrowUpRightFromCircle size={20}/>} />
                <Icon_menu text="All" icon={<PiCircleHalfTilt size={20}/>} />
                <div className='nav_community_title'>OTHER</div>
                <Img_menu text="User Settings" imageSrc="imagines/fox-body.svg" />
                <Img_menu text="Messages" imageSrc="imagines/fox-body.svg" />
                <Icon_menu text="Create Post" icon={<FaPlus size={20}/>} />
                <Icon_menu text="Notifications" icon={<BsBell size={20}/>} />
                <Icon_menu text="Premium" icon={<PiShieldCheckeredLight size={20}/>} />
                <Icon_menu text="Avatar" icon={<IoShirtOutline size={20}/>} />
              </div>
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
