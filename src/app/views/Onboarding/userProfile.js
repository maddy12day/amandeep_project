import userBg from '../../assets/images/user-bg.png'
import userImg from "../../assets/images/user-img.png"
import userInsta from "../../assets/images/insta-user.png"
import userTwitter from '../../assets/images/twitter-user.png'
import userLinked from "../../assets/images/linked-user.png"
import userSocial from "../../assets/images/user-social.png"
import userTwitch from "../../assets/images/twitch-user.png"
const UserProfile=()=>{
  return(
    <>
      <div className="user-container">
        <div className="user-background">
         <img src={userBg} alt="Background"
          className='background-image'
         />
        </div>
        <div className='user-image'>
     <img src={userImg}  alt="user"
      className='user-img'
     />
        </div>
        <div className='user-social'>
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
       <p>See All</p>
        </div>
        <div className='user-'>

        </div>
      </div>
    </>
  )
}

export default UserProfile