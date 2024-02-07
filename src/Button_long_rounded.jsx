import React from 'react';
import { useState } from 'react';
import './Button_long_rounded.css';


function Button_long_rounded({title, backgroundColor, hoverColor, borderColor,color }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
        <div className='mains'style={{
        backgroundColor: isHovered ? hoverColor : backgroundColor,
        borderColor: borderColor,
        color: color}}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
            {title}
        </div>
    </>
  );
}

export default Button_long_rounded;