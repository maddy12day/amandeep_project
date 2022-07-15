import DownArrow from '../../assets/images/Arrow2.png'
import Store from '../../assets/images/Playstore.png'
import Store1 from '../../assets/images/Applestore.png'
const Finish=()=>{
  return(
    <>
     <div className='finish-page'>
      <div className="finish-container">
        <div className="finish-heading">
          <h1>You have signed up </h1>
          <h1>successfully!</h1>
        </div>
        <div className="finish-paragraph">
          <p>Let's get the App on your phone!</p>
        </div>
        <div className="finish-image">
        <img src={DownArrow} alt='arrow'/> 
        </div>
        <div className='finish-link'>
        <img src={Store} alt='arrow' className='image-finish'/>
        <img src={Store1} alt='arrow' className='image2-finish'/>  
        </div>
      </div>
      </div>
    </>
  )
}

export default Finish