import React from 'react';
import { useState } from 'react';
import './Recent_post.css';


function Recent_post({imageUrl, title ,points ,comments ,time}) {

  return (
    <>
        <div className='box_recent_post'>
            <div className='box_image_recent'style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div>
                <div className='recent_title'>
                {title}
                </div>
                <div className='data_box'>
                {points} points
                <div className='kropa'>•</div>
                {comments} comments
                <div className='kropa'>•</div>
                {time}d
                </div>
            </div>
        </div>
    </>
  );
}

export default Recent_post;