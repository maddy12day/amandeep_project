import Icon from "../../assets/images/icon.png";
import Line from "../../assets/images/Line.png";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import * as defaultService from "../../services/default"

const Signup = ({ childToParent }) => {
  //
  // Code validate
  //
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [userInfo, setUserInfo] = useState();
  const onSubmit = (data) => {
    setUserInfo(data);
    console.log(data)
    navigate("/verify",{code : data.code });
    // childToParent(data)
  };

  //otp post


  return (
    <>
      <section className="main">
        <div className="sub-main">
          <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="title">Sign Up</div>
            <div>
              <img src={Icon} alt="Icon" className="symb" />
              <input
                type="text"
                name="abc"
                id="code"
                placeholder="Enter invite code"
                {...register("code", {
                  required: "Invite Code is required",
                })}
              />
            </div>
            <div >
              <img src={Line} alt="line" className="signup-image"/>
            </div>
            <p id="error">{errors.code?.message}</p>
            <div className="verify-button">
              <button>Verify</button>
            </div>
            <div className="para">
              <p>If you don't have invite code you can ask for a </p>
              <p>refferal from any current fanClub user</p>
            </div>
          </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default Signup;
