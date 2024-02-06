import React from 'react';
import { useState } from 'react';
import './App.css';
import { PiImageSquareLight } from "react-icons/pi";
import { GoLink } from "react-icons/go";
import { BsRocket } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";
import { FaRegSun } from "react-icons/fa6";
import { IoPodiumOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { RxViewHorizontal } from "react-icons/rx";
import { RiArrowDownSLine } from "react-icons/ri";
import Post from './Post';


function Button_small({ text, icon, className  }) {
  return (
    <div >
      <button className={`button_main ${className}`}>
        <span className='b_s_image'>{icon}</span>
        <span className='b_s_text'>{text}</span>
      </button>
    </div>
  );
}
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main">
        <div className='create' id='search'>
          <div className='avatar_circle'>
            <img src="./imagines/Iganc Openhaimer.png" alt="" className='avatar'/>
          </div>
          <input type="text" placeholder='Create Post' className='search' />
          <div className='icons'>
            <button className='imagine_button'>
             <PiImageSquareLight className='imagine'/>
            </button >
             <button className='imagine_button'>
              <GoLink className='imagine'/>
            </button>
          </div>
        </div>
        <div className='create' id='trend'>
          <Button_small text="Best" icon={<BsRocket size={25}/>} />
          <Button_small text="Hot" icon={<AiOutlineFire size={25}/>} />
          <Button_small text="New" icon={<FaRegSun size={25}/>} />
          <Button_small text="Top" icon={<IoPodiumOutline size={25}/>} />
          <button className='dotdotdot'>
            <BsThreeDots className='dot'/>
          </button>
          <div className='view_dot'>
          <RxViewHorizontal className='view'/>
          <RiArrowDownSLine className='view'/>
          </div>
        </div>
        <Post/>
      </div>
    </>
  );
}

export default App;