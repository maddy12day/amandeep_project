import Icon from "../../assets/images/smartphone.png";
import Line from "../../assets/images/Line.png";
import Frame from "../../assets/images/Frame.png";
import Arrow from "../../assets/images/arrow-left.png";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";

import {
  isPossiblePhoneNumber,
  isValidPhoneNumber,
  validatePhoneNumberLength,
  parsePhoneNumber,
} from "libphonenumber-js";

const MobileVerification = () => {
  const [num, setNum] = useState("");
  const [flag, setFlag] = useState(false);
  const [flag2, setFlag2] = useState(true);

  function Validate() {
    console.log("Validation")
    const phoneNumber = parsePhoneNumber(num);
    if (!isValidPhoneNumber(phoneNumber.number, phoneNumber.country)) {
      alert("Number doesn't exsist");
    } else {
      changeFlag();
    }
  }

  function changeFlag() {
    return setFlag(true);
  }

  function changeFlag2() {
    return setFlag2(false);
  }

  // var timeleft = 60;
  // var downloadTimer = setTimeout(function(){
  // timeleft--;

  // if(timeleft <= 0)
  //     changeFlag2();
  // },1000);
  const Timer = async () => {
    for (let i = 60; i >= 0; i--) {
      document.getElementById("countdowntimer").textContent = i;
      if (i == 0) {
        changeFlag2();
      }
      await sleep(1000);
    }
  };

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    Timer();
  });

  //
  // OTP react-hook-form validation
  //
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [userInfo, setUserInfo] = useState();
  const onSubmit = (data) => {
    setUserInfo(data);
  };
  

  //
  //Mobile number react-hook-form validation
  //


  const {
    register: register2,
    formState: { errors: errors2 },
    handleSubmit: handleSubmit2,
    control,
  } = useForm();
  const onSub = (data) => {
    console.log(data);
    console.log("onsub")
    setFlag(true)
  };

  return (
    <section className="main">
      <div className="sub-main">

        {/*  */}
        {/* Mobile number page */}
        {/*  */}

        {!flag && <form onSubmit={handleSubmit2(onSub)} >
        <div>
          <div className="title">Sign Up</div>
          <div className="d-flex justify-content-center ">
            <img src={Icon} alt="Icon" />
            <PhoneInput
              onChange={(e) => setNum(e)}
              placeholder="Your Mobile Number"
              defaultCountry="IN"
              value={num}
              id="num"
              name="bcd"
              {...register2("bcd", {
                required: "Number is required",
              })}
            />
          </div>
          <div>
            <img src={Line} alt="line" />
          </div>
          <p id="error">{errors2.bcd?.message}</p>
          <div className="verify-button">
            <button type="submit">verify</button>
          </div>
        </div>
        </form>}  

        {/*  */}
        {/* OTP Page */}
        {/*  */}

         {flag && <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ display: flag ? "block" : "none" }}>
            <input
              type="image"
              src={Arrow}
              onClick={() => setFlag(false)}
              id="arrow"
            />
            <div className="title">Sign Up</div>
            <div className="d-flex justify-content-center ">
              <img src={Frame} alt="Icon" />
              <input
                type="number"
                name="abc"
                id="otp"
                placeholder="Enter OTP"
                {...register("abc", {
                  required: "OTP is required",
                })}
              />
            </div>
            <div>
              <img src={Line} alt="line" />
            </div>
            <p id="error">{errors.abc?.message}</p>
            <p style={{ display: flag2 ? "flex" : "none" }} id="resend">
              {" "}
              Resend OTP (0:<span id="countdowntimer">60</span>)
            </p>
            <a style={{ display: !flag2 ? "flex" : "none" }} id="resendlink">
              {" "}
              Resend OTP{" "}
            </a>
            <div className="verify-button">
              <button>verify</button>
            </div>
          </div>
        </form>}
        
      </div>
    </section>
  );
};

export default MobileVerification;
