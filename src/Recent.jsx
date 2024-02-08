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
            imageUrl='imagines/IMG_20221028_180834.jpg'
            title={"Inegracja w altance - Początek czy koniec?"}
            points={47}
            comments={3}
            time={6}/>
          </div>
          <div className='line_recent'></div>
          <div>
            <Recent_post
            imageUrl='imagines/szeregoweic_iganc.png'
            title={"Czy Enlisted jest realistyczne?"}
            points={214}
            comments={23}
            time={3}/>
          </div>
          <div className='line_recent'></div>
          <div>
            <Recent_post
            imageUrl='imagines/1688649930063.jpg'
            title={"Wyprawa do Dino o 7:00 to był zły pomysł"}
            points={5214}
            comments={809}
            time={7}/>
          </div>
          <div className='line_recent'></div>
          <div>
            <Recent_post
            imageUrl='imagines/1688649929896.jpg'
            title={'"Mleko" - Przyszłość świata?'}
            points={120}
            comments={32}
            time={1}/>
          </div>
          <div className='line_recent'></div>
          <div>
            <Recent_post
            imageUrl='imagines/1688649929615.jpg'
            title={"Znalazł prosty sposób na zarabianie 14k w miesiąc!"}
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