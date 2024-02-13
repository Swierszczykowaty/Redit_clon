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
import Premium from './Premium';
import Home from './Home';
import Recent from './Recent';
import Policy from './Policy';
import Nav_Bar from './Nav_Bar';

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
      <Nav_Bar />
        <div className='main'>
          <div className="first_column">
            <div className='create' id='search'>
              <div className='avatar_circle'>
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
              avatar_sub="./imagines/cow-body.png"
              subredditName="r/Lorem"
              user="u/user2324"
              time="4"
              title="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi deserunt ipsum, placeat natus provident saepe." 
              mark="Workout"
              markColor="#8d6a9f"
              post={
                <div>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia vel illo corporis vitae molestiae. Ullam beatae corporis, libero dignissimos nobis quisquam ducimus id deleniti similique neque ratione sapiente mollitia expedita hic omnis nesciunt molestias?</p>
                  <p>Animi, ullam voluptates. Dolore iure, porro et inventore quo quidem ullam aspernatur, veniam facilis in, temporibus deserunt. Similique ex dolorum beatae ratione. Facere illum optio, dolor quam ratione iste quo sequi, aperiam commodi beatae, molestiae consequuntur!</p>
                  <p>Dolores non voluptatum labore, et saepe quae animi sunt itaque ipsum dignissimos impedit sint rem quos. Ratione, distinctio deleniti molestiae, quidem quas ipsa impedit maiores ab eum esse aliquam obcaecati.</p>
                </div>
              }
            />
            <Post 
              avatar_sub="./imagines/bear-body.png"
              subredditName="r/Lorem"
              user="u/user2024"
              time="7"
              title="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
              mark="Projekt"
              markColor="#ff4500"
              post={
                <div>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad quod minus voluptates possimus accusamus, consequatur deleniti maxime repellat dolorem veritatis corrupti perferendis debitis. Molestias quo sed cupiditate blanditiis culpa eum minima dicta quas illum nobis accusamus nihil veniam, dolores vero consectetur iste laudantium ipsam doloremque amet soluta minus?</p>
                  <p>Nam laboriosam nesciunt esse minima explicabo soluta commodi ullam, quas aliquid corrupti assumenda obcaecati error ipsa. Possimus harum eum iusto modi? Deleniti quae facilis cumque veniam sequi quisquam voluptate? Eius sunt veniam optio dignissimos molestias deserunt delectus aperiam sequi! Sit magnam laboriosam maiores sunt deserunt!</p>
                  <p>Aspernatur pariatur at doloremque officia laborum, ab maiores officiis soluta nesciunt facere sed possimus veritatis explicabo eligendi repudiandae dolores recusandae et. Accusantium architecto eligendi doloremque, repudiandae tempora repellendus nihil ipsum ex a, consectetur harum at cumque possimus recusandae pariatur. Nostrum error aspernatur sint! Officiis adipisci incidunt velit iure consectetur voluptate quaerat nobis hic cumque?</p>
                  <p>Necessitatibus magnam autem similique ullam rerum quas ea quos fuga nulla? Maxime tempore dignissimos quis iure praesentium repellat officia maiores unde, id dolor saepe repellendus suscipit! Culpa omnis quo consequatur ut obcaecati cum praesentium, error suscipit laborum laudantium amet vitae. Sapiente temporibus placeat earum. Corrupti non repellat temporibus vero sequi tenetur ipsa molestiae, consequatur illum voluptate?</p>
                </div>
              }
            />
            <Post 
              avatar_sub="./imagines/lion-body.png"
              subredditName="r/Lorem"
              user="u/user1203"
              time="4"
              title="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
              mark="Fotografia"
              markColor="#df3079"
              post={
                <div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, inventore. Quaerat distinctio dolorem corrupti totam commodi iste id minus exercitationem quam consequatur ullam, maiores laboriosam, accusantium molestiae illo, alias quo amet quisquam et dolor facilis placeat eaque iusto deleniti! Cumque numquam voluptates, id delectus fugiat perferendis odio doloremque eveniet, culpa cum nesciunt!</p>
                  <p>Nesciunt quo autem iste iusto, perferendis culpa, quaerat illo amet a accusamus voluptate perspiciatis cum temporibus doloremque hic corrupti dolorum doloribus voluptatum expedita! Nostrum ea, omnis nemo consequatur velit facere illum illo numquam molestiae voluptate possimus rem quasi odio ipsum quibusdam tempore ipsam necessitatibus saepe consequuntur dolores architecto.</p>
                  <p>Doloremque excepturi rem facilis maiores reiciendis accusamus fugiat laborum suscipit ab libero. Et voluptates deserunt sit impedit voluptatibus illum eaque aliquam accusantium nam.</p>
                </div>
              }
            />
          </div>
          <div className='second_column'>
            <Premium></Premium>
            <Home></Home>
            <Recent></Recent>
            <Policy></Policy>

          </div>
        </div>
    </>
  );
}

export default App;