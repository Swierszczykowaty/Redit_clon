import React from 'react';
import { useState } from 'react';
import './Premium.css';
import Button_long_rounded from './Button_long_rounded';
import { GiCheckedShield } from "react-icons/gi";


function Premium() {

  return (
    <>
        <div className='box'>
            <div className='top_box'>
                <GiCheckedShield className='shield'/>
                <div className=''>
                    <div className='upper_txt'>Reddit Premium</div>
                    <div className='lower_txt'>The best Reddit experience</div>
                </div>
            </div>
            <div className='button_premium'>
            <Button_long_rounded
                title="Try Now"
                backgroundColor="#ff4500"
                hoverColor="#e03c00"
                borderColor="#ff4500"
                color="fff"
            />
            </div>
                
        </div>
    </>
  );
}

export default Premium;