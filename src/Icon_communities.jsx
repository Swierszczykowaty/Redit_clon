import React from 'react';
import './Icon_communities.css';
import { CiStar } from "react-icons/ci";


function Icon_communities({title,image_com}) {

  return (
    <>
    <div className='community_box'>
        <div className='community_imagine' style={{backgroundImage: `url(${image_com})`}}></div>
        <div className='community_title'>
            {title}
        </div>
        <CiStar className='community_star' />
        
    </div>
            
    </>
  );
}

export default Icon_communities;