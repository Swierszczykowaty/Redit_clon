import React from 'react';
import { useState } from 'react';
import './App.css';
import { PiImageSquareLight } from "react-icons/pi";
import { GoLink } from "react-icons/go";
import { BsRocket } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";
import { FaRegSun } from "react-icons/fa6";
import { IoPodiumOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { RxViewHorizontal } from "react-icons/rx";
import { RiArrowDownSLine } from "react-icons/ri";
import Post from './Post';


function Button_small({ text, icon, className}) {
  return (
    <div >
      <button className={`button_main ${className}`}>
        <span className='b_s_image'>{icon}</span>
        <span className='b_s_text'>{text}</span>
      </button>
    </div>
  );
}
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='main'>
        <div className="first_column">
          <div className='create' id='search'>
            <div className='avatar_circle'>
              <img src="./imagines/Iganc Openhaimer.png" alt="" className='avatar'/>
            </div>
            <input type="text" placeholder='Create Post' className='search' />
            <div className='icons'>
              <button className='imagine_button'>
              <PiImageSquareLight className='imagine'/>
              </button >
              <button className='imagine_button'>
                <GoLink className='imagine' id='link'/>
              </button>
            </div>
          </div>
          <div className='create' id='trend'>
            <Button_small text="Best" icon={<BsRocket size={25}/>} />
            <Button_small text="Hot" icon={<AiOutlineFire size={25}/>} />
            <Button_small text="New" icon={<FaRegSun size={25}/>} />
            <Button_small text="Top" icon={<IoPodiumOutline size={25}/>} />
            <button className='dotdotdot'>
              <BsThreeDots className='dot'/>
            </button>
            <div className='view_dot'>
            <RxViewHorizontal className='view'/>
            <RiArrowDownSLine className='view'/>
            </div>
          </div>
          <Post 
            avatar_sub="./imagines/uwaga.png"
            subredditName="r/Cykadło"
            user="u/Rocha2115"
            time="4"
            title="How do you get enough protein in your diet to promote muscle growth from your workouts?"
            mark="Workout"
            markColor="#8d6a9f"
            post={
              <div>
                <p>I just started tracking macros and... it's depressing. I thought I was doing ok but I'm having way too little protein.</p>
                <p>I don't really like meat other than red meat, like I can't just sit and eat a piece of chicken. But yesterday I had (among other things): peanut butter on sprouted bread that had protein, cottage cheese, a protein shake, collagen supplement, and chicken sausage for dinner as my main sources of protein and I was way way under the recommended 120 grams. I was at like 78 g. I also had Hummus and an avocado, which I know have a little protein too.</p>
                <p>I have been doing more bodyweight exercises, but I'm not seeing the results I want and I think it's diet related. What do you all do here to get enough protein to supplement workouts/what would you recommend for me?</p>
                <p>Edit: I can't reply to everyone, so I'll reply here: thank you all so much!! I have SO many ideas to go off of now. Info I should have included in the post: I'm a woman, and all of my food related goals in the past have been stay skinny so it's been all about cutting calories. This is my first time eating with the goal of being stronger, instead of it being appearance based. I'm so excited to try all of these foods and continue to build strength!</p>
              </div>
            }
          />
          <Post 
            avatar_sub="./imagines/WWSI.ico"
            subredditName="r/Wwsi"
            user="u/Meferek"
            time="7"
            title="How to create a group project?"
            mark="Projekt"
            markColor="#ff4500"
            post={
              <div>
                <p>Hi Everybody,</p>
                <p>I'm making this post because initially when I was a beginner learning to code, I really struggled to make projects, I couldn't quite get out of tutorial hell.</p>
                <p>Initially to overcome this, I posted my frustrations here. The responses I received were all centered around building my own projects. This advice sounds great on the surface and was the right advice, yet the issue for me was I couldn't even watch a tutorial and reproduce the results. How was I supposed to build a project? A project is 10 levels above a tutorial and at the time it seemed that projects were so far away from my abilities. I had no clue how to even get started, let alone how I was going to put it all together.</p>
                <p>This is an issue I see all the time on r/learnprogramming. Beginners are frustrated that they can't seem to get out of tutorial hell and so they seek advice. But, what they get is well meaning redditor's slamming the build projects response in their face without even considering that if the newbie can't even replicate a tutorial how are they going to create their own project. I thought it was about time I did something about it and gave back to the universe.</p>
                <p>So here I am, writing a post that actually breaks down how to build your own projects so that you can start making stuff.</p>
                <p>In order to plan and build a programming project there are three key steps I now use when building projects, these are what work for me but they should work for anyone.</p>
              </div>
            }
          />
          <Post 
            avatar_sub="./imagines/uwaga.png"
            subredditName="r/Cykadło"
            user="u/Rocha2115"
            time="4"
            title="How do you get enough protein in your diet to promote muscle growth from your workouts?"
            mark="Workout"
            markColor="#8d6a9f"
            post={
              <div>
                <p>I just started tracking macros and... it's depressing. I thought I was doing ok but I'm having way too little protein.</p>
                <p>I don't really like meat other than red meat, like I can't just sit and eat a piece of chicken. But yesterday I had (among other things): peanut butter on sprouted bread that had protein, cottage cheese, a protein shake, collagen supplement, and chicken sausage for dinner as my main sources of protein and I was way way under the recommended 120 grams. I was at like 78 g. I also had Hummus and an avocado, which I know have a little protein too.</p>
                <p>I have been doing more bodyweight exercises, but I'm not seeing the results I want and I think it's diet related. What do you all do here to get enough protein to supplement workouts/what would you recommend for me?</p>
                <p>Edit: I can't reply to everyone, so I'll reply here: thank you all so much!! I have SO many ideas to go off of now. Info I should have included in the post: I'm a woman, and all of my food related goals in the past have been stay skinny so it's been all about cutting calories. This is my first time eating with the goal of being stronger, instead of it being appearance based. I'm so excited to try all of these foods and continue to build strength!</p>
              </div>
            }
          />
        </div>
        <div className='second_column'>

        </div>
      </div>
    </>
  );
}

export default App;