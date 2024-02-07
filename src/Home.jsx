import React from 'react';
import { useState } from 'react';
import './Home.css';
import Button_long_rounded from './Button_long_rounded';

function Home() {

  return (
    <>
        <div className='box'>
            UWAGA GROZI ZAWALENIEM
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
    </>
  );
}

export default Home;