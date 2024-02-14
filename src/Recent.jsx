import React from 'react';
import { useState } from 'react';
import './Recent.css';
import Recent_post from './Recent_post';


function Recent() {

  return (
    <>
        <div className='box_recent'>
          <div className='title_recent'>
          RECENT POSTS
          </div>
          <div>
            <Recent_post
            imageUrl='./imagines/monkey-body.svg'
            title={"Lorem ipsum dolor sit, amet consectetur adipisicing."}
            points={47}
            comments={3}
            time={6}/>
          </div>
          <div className='line_recent'></div>
          <div>
            <Recent_post
            imageUrl='./imagines/bunny-body.svg'
            title={"Lorem ipsum dolor sit."}
            points={214}
            comments={23}
            time={3}/>
          </div>
          <div className='line_recent'></div>
          <div>
            <Recent_post
            imageUrl='./imagines/cow-body.svg'
            title={"Lorem ipsum dolor sit amet."}
            points={5214}
            comments={809}
            time={7}/>
          </div>
          <div className='line_recent'></div>
          <div>
            <Recent_post
            imageUrl='./imagines/bear-body.svg'
            title={'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
            points={120}
            comments={32}
            time={1}/>
          </div>
          <div className='line_recent'></div>
          <div>
            
            <Recent_post
            imageUrl='./imagines/sheep-body.svg'
            title={"Lorem ipsum dolor sit amet."}
            points={2145}
            comments={273}
            time={1}/>
          </div>
          <div className='recent_clear'>
            Clear
          </div>
        </div>
    </>
  );
}

export default Recent;