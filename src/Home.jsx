import React from 'react';
import { useState } from 'react';
import './Home.css';
import Button_long_rounded from './Button_long_rounded';

function Home() {

  return (
    <>
        <div className='box_home'>
            <div>
                <div className='banner_box'>
                <img src="./imagines/home-banner.png" alt="" className='banner'/>
                </div>
                <div className='home_logo_box'>
                    <div className='absolute'>
                    <img src="./imagines/snoo-home.png" alt="" className='snoo'/>
                    <div className='text_title_home'>
                    Home
                    </div>
                    </div>
                </div>
                <div className='text_home'>
                Your personal Reddit frontpage. Come here to check in with your favorite communities. 
                </div>
                <div className='line_home'></div>
                <div className='button_premium'>
                    <Button_long_rounded
                        title="Create Post"
                        backgroundColor="#0079D3"
                        hoverColor="#0272c8"
                        borderColor="#0079D3"
                    />
                </div>
                <div className='button_premium'>
                    <Button_long_rounded
                        title="Create Community"
                        backgroundColor="#fff"
                        hoverColor="#f0f0f0"
                        borderColor="#0079D3"
                        color="#0079D3"
                    />
                </div>
            </div>
        </div>
    </>
  );
}

export default Home;