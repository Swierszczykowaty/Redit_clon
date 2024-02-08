import React from 'react';
import { useState } from 'react';
import './Policy.css';


function Policy() {

  return (
    <>
        <div className='box_policy'>
            <div className='box_policy_main'>
              <div className='box_policy_main2'>
                <div className='policy_text'>
                  User Agreement
                </div>
                <div className='policy_text'>
                  Privacy Policy
                </div>
              </div>
              <div className='box_policy_main2'>
                <div className='policy_text'>
                  Content Policy
                </div>
                <div className='policy_text'>
                  Moderator Code Of Conduct 
                </div>
              </div>
            </div>
            <div className='line_policy'></div>
            <div className='box_policy_main'>
              <div className='policy_lang'>
                <div className='policy_text'>English</div>
                <div className='policy_text'>Polish</div>
                <div className='policy_text'>Italiano</div>
              </div>
              <div className='policy_lang'>
                <div className='policy_text'>Deutsh</div>
                <div className='policy_text'>Espaniol</div>
                <div className='policy_text'>Portuges</div>
              </div>
            </div>
            <div className='line_policy'></div>
              <div className='policy_red'>
                <div className='policy_text'>
                Reddit, Inc. © 2024. All rights reserved.
                </div>
              </div>
        </div>
    </>
  );
}

export default Policy;