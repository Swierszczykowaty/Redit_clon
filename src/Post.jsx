import React from 'react';
import { useState } from 'react';
import './Post.css';
import { PiArrowFatDownThin } from "react-icons/pi";
import { PiArrowFatUpThin } from "react-icons/pi";


function Post() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <>
        <div className='post'>
            <div className='column_1'>
                <div className='arrows_counter'>
                    < PiArrowFatUpThin className='arrow' onClick={increment}/>
                    <div className='counter_p'>
                        <div className='counter'>
                            {count}
                        </div>
                    </div>
                    <PiArrowFatDownThin className='arrow' onClick={decrement}/>
                </div>
                
            </div>
            <div className='column_2'>
                <div className='title'>
                    <img src="./imagines/uwaga.png" alt="" className='ravatar'/>
                    <div className='rplace'>
                        r/Cykadło
                    </div>
                    <div className='kropa'>
                    •
                    </div>
                    <div className='user_post'>
                    Posted by u/Rocha2115 
                    </div>
                    <div className='time_post'>
                        5 hours ago   
                    </div>

                </div>
            </div>
        </div>
    </>
  );
}

export default Post;