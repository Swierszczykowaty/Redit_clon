import React from 'react';
import { useState } from 'react';
import './Post.css';

import { PiArrowFatDownThin } from "react-icons/pi";
import { PiArrowFatUpThin } from "react-icons/pi";
import { TfiComment } from "react-icons/tfi";
import { PiArrowBendUpRightLight } from "react-icons/pi";
import { CiSaveDown2 } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";

function Post({ subredditName, user, time, title, mark, post, avatar_sub, markColor,comment,counter }) {
    const [count, setCount] = useState(counter=0);
    const [upClicked, setUpClicked] = useState(false);
    const [downClicked, setDownClicked] = useState(false);

    const handleUpClick = () => {
        if (!upClicked && !downClicked) {
            setCount(count + 1);
            setUpClicked(true);
        } else if (upClicked && !downClicked) {
            setCount(count - 1);
            setUpClicked(false);
            setDownClicked(false); 
        } else if (!upClicked && downClicked) {
            setCount(count + 2);
            setUpClicked(true);
            setDownClicked(false);
        }
    };

    const handleDownClick = () => {
        if (!downClicked && !upClicked) {
            setCount(count - 1);
            setDownClicked(true);
        } else if (!upClicked && downClicked) {
            setCount(count + 1); 
            setDownClicked(false);
        } else if (upClicked && !downClicked) {
            setCount(count - 2);
            setUpClicked(false);
            setDownClicked(true);
        }
    };

    

  return (
    <>
        <div className='post'>
            <div className='column_1'>
                <div className='arrows_counter'>
                    <PiArrowFatUpThin className={`arrow ${upClicked ? 'clicked' : ''}`} onClick={handleUpClick} />
                    <div className='counter_p'>
                        <div className='counter'>
                            {count}
                        </div>
                    </div>
                    <PiArrowFatDownThin className={`arrow ${downClicked ? 'clicked down' : ''}`} onClick={handleDownClick} />
                </div>
            </div>
            <div className='column_2'>
                <div className='title'>
                    <img src={avatar_sub} alt="" className='ravatar'/>
                    <div className='rplace'>
                        {subredditName}
                    </div>
                    <div className='kropa'>
                        •
                    </div>
                    <div className='user_post'>
                        Posted by {user} 
                    </div>
                    <div className='time_post'>
                        {time} hours ago   
                    </div>
                </div>
                <div className='content'>
                    <div className='title_post'>
                        {title}
                        <div className='title_mark' style={{background: markColor}}>
                            {mark}
                        </div>
                    </div>
                    <div className='text_post'>
                        {post}
                    </div>
                </div>
                <div className='gradient'></div>
                <div className='action_buttons'>
                    <div className='action_buttons_box'>
                        <TfiComment className='button' id='com'/>
                        {comment} Comments
                    </div>
                    <div className='action_buttons_box'>
                        <PiArrowBendUpRightLight className='button' id='share' />
                        Share
                    </div>              
                    <div className='action_buttons_box'>
                        <CiSaveDown2 className='button' id='save'/>
                        Save
                    </div>
                    <BsThreeDots className='dot'/>
                </div>
            </div>
        </div>
    </>
  );
}

export default Post;