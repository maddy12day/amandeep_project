import { useState } from "react";
import FirstStep from "./firststep";
import SecondStep from "./secondstep";
import ThirdStep from "./thirdstep";
import Arrow from "../../assets/images/arrow.png"
import { Image } from "react-bootstrap";
const Profile = () => {
  const [stepCount,setStepCount]=useState(1);

  function checkProgress(val){
    let className = "";
    if(val<=stepCount){
    className = "progress-complete";
    }
    return className;
    }
  return (
    <>
      <div className="con">
        <div className="profile-container">
        <div className="profile-icon" onClick={()=>stepCount === 1 ? null :setStepCount(stepCount-1)}>
        {stepCount === 1 ? " " : <Image src={Arrow}/>}
        </div> 
        <div className="profile-header">
          <div className="profile-heading"> 
            <h1>Verify yourself</h1>
          </div>
          <div className="progress">
            <span className={`progress1 ${checkProgress(1)}`} ></span>
            <span className={`progress1 ${checkProgress(2)}`}></span>
            <span className={`progress1 ${checkProgress(3)}`}></span>
          </div>
          </div>
          <div>
          {stepCount === 1? <FirstStep stepCount={(e)=>setStepCount(e)}/>: stepCount === 2 ? <SecondStep stepCount={(e)=>setStepCount(e)}/>: stepCount === 3 ? <ThirdStep/>:""}
          </div>
          {/* <div className="profile-btn">
            <button type="submit" onClick={()=>stepCount === 3 ? null : setStepCount(stepCount+1)}>Continue</button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Profile;
