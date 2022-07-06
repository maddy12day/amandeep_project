import Icon from "../../assets/images/smartphone.png";
import Line from "../../assets/images/Line.png";
import Frame from "../../assets/images/Frame.png"
import Arrow from "../../assets/images/arrow-left.png"
import 'react-phone-number-input/style.css'
import PhoneInput from "react-phone-number-input";
import { useState } from "react";

import {
    isPossiblePhoneNumber,
    isValidPhoneNumber,
    validatePhoneNumberLength,
    parsePhoneNumber
  } from 'libphonenumber-js'


const MobileVerification = () => {
    const[num, setNum] = useState("")
    const [flag, setFlag] = useState(false)
    const [flag2, setFlag2] = useState(true)

    function Validate(){
        const phoneNumber = parsePhoneNumber(num)
        if(!isValidPhoneNumber(phoneNumber.number, phoneNumber.country)){
                alert("Number doesn't exsist")
        } 
        else{
            changeFlag();
        }
    }

    function changeFlag(){
        return setFlag(true)
    }

    function changeFlag2(){
        return setFlag2(false)
    }
    

    var timeleft = 60;
    var downloadTimer = setInterval(function(){
    timeleft--;
   document.getElementById("countdowntimer").textContent = timeleft;
    if(timeleft <= 0)
        changeFlag2();
    },1000);

  return (
    <section className="main">
      <div className="sub-main">
        <div style={{display : !flag ? "block" : "none"}}>
          <div className="title">Sign Up</div>
          <div className="d-flex justify-content-center ">
            <img src={Icon} alt="Icon" />
            <PhoneInput
              onChange = {(e) => setNum(e)}
              placeholder="Your Mobile Number"
              defaultCountry="IN"
              value={num}
              id = "num"
            />
          </div>
          <div>
            <img src={Line} alt="line" />
          </div>
          <div className="verify-button">
            <button onClick={Validate}>verify</button>
          </div>
        </div>

        {/*  */}
        {/* OTP Page */}
        {/*  */}

        <div style={{display : flag ? "block" : "none"}}>
          <input type="image" src={Arrow} onClick= {() => setFlag(false)} id="arrow" />
          <div className="title">Sign Up</div>
          <div className="d-flex justify-content-center ">
            <img src={Frame} alt="Icon" />
            <input type="text" id="otp" placeholder="Enter OTP" />
          </div>
          <div>
            <img src={Line} alt="line" />
          </div>
            <p style={{display : flag2 ? "flex" : "none"}} id="resend"> Resend OTP (0:<span id="countdowntimer">60</span>)</p>
            <a style={{display : !flag2 ? "flex" : "none"}} id="resendlink" > Resend OTP </a>
          <div className="verify-button">
            <button>verify</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MobileVerification;
