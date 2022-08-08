import userBg from '../../assets/images/user-bg.png'
import userImg from "../../assets/images/user-img.png"
import userInsta from "../../assets/images/insta-user.png"
import userTwitter from '../../assets/images/twitter-user.png'
import userLinked from "../../assets/images/linked-user.png"
import userSocial from "../../assets/images/user-social.png"
import userTwitch from "../../assets/images/twitch-user.png"
import userIcon from "../../assets/images/icon.png"
import userVideo from "../../assets/images/user-video.png"
import userSnap from "../../assets/images/user-snap.png"
import userSea from '../../assets/images/user-sea.png'
import userCash from "../../assets/images/user-cash.png"
import userTumblur from "../../assets/images/user-tumblr.png"
import userSound from "../../assets/images/user-sound.png"
import { useState } from 'react'
const UserProfile=()=>{

const[flag,setFlag]=useState(true);

  const handlechange=()=>{
     setFlag(!flag);
     

  }

  // const handleChange1=()=>{
  //   setFlag(true)
  // }
  return(
    <>
      <div className={`user-container
     ${flag === false ? "user-container1" : ""} `}>
        <div className="user-background">
         <img src={userBg} alt="Background"
          className='background-image'
         />
        </div>
        {/* <div className='user-image'>
     <img src={userImg}  alt="user"
      className='user-img'
     />
        </div> */}
        <div className={flag === false? 'user-social1' :'user-social'}>
        <img src={userInsta} alt="social"
          className='socials-user'
        />
        <img src={userTwitter} alt="socila"
         className='socials-user' />
        <img src={userLinked} alt="socila"
         className='socials-user' />
        <img src={userSocial} alt="social" 
           className='socials-user'
        />
        </div>
        <div className='user-paragraph'>
         <p>
         Hi my name is Donna and I'm a photographer. Some of my favorite hobbies include fitness/health
         </p>
         <p>
         stock and crypto investing, fashion, STEM, travelling, and enjoying my home city of 
         </p>
         <p>
         Chicago. Book some time and let's talk
         </p>
        </div>
        <div className='user-links'>
       {flag === false ? <p onClick={handlechange}>Hide</p>:<p onClick={handlechange}>See All</p>}
       {/* {flag === true ? <p>See All</p>:""} */}
        </div>
        { flag === true ?
        <div>
        <div className='user-media'>
         <img src={userTwitch} alt="media" className='user-media-img'/>
         <p className='user-media-para'>Twitch</p>
        </div> 
        <div className='user-media '>
         <img src={userIcon} alt="media" className='user-media-img'/>
         <p className='user-media-para'>Follow me on FanClub</p>
        </div> 
        <div className='user-media '>
         <img src={userVideo} alt="media" className='user-media-img'/>
         <p className='user-media-para'>1:1 video chat</p>
        </div></div>:<div>
        <div className='user-media'>
         <img src={userTwitch} alt="media" className='user-media-img'/>
         <p className='user-media-para user-para'>Twitch</p>
        </div> 
        <div className='user-media'>
         <img src={userSnap} alt="media" className='user-media-img'/>
         <p className='user-media-para'>Snapchat</p>
        </div> 
        <div className='user-media'>
         <img src={userSea} alt="media" className='user-media-img'/>
         <p className='user-media-para'>Open Sea</p>
        </div> 
        <div className='user-media'>
         <img src={userCash} alt="media" className='user-media-img'/>
         <p className='user-media-para'>Cash App</p>
        </div> 
        <div className='user-media'>
         <img src={userTumblur} alt="media" className='user-media-img'/>
         <p className='user-media-para user-para'>Tumblr</p>
        </div> 
        <div className='user-media'>
         <img src={userSound} alt="media" className='user-media-img user-image'/>
         <p className='user-media-para'>Sound Cloud</p>
        </div> 
        <div className='user-media'>
         <img src={userIcon} alt="media" className='user-media-img'/>
         <p className='user-media-para'>Follow me on FanClub</p>
        </div> 
        <div className='user-media'>
         <img src={userVideo} alt="media" className='user-media-img'/>
         <p className='user-media-para'>1:1 video chat</p>
        </div> 
        </div>} 
      </div>
    </>
  )
}

export default UserProfile