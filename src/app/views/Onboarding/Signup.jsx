import Icon from "../../assets/images/icon.png";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as defaultService from "../../services/default";
import { useState } from "react";


const Signup = () => {
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const [flag, setFlag] = useState(false);
  const onSubmit = (data) => {
    sendCode(data);
    // navigate("/verify/" + data.code);
  };

  // watch events
  
 
  
 
  // const isValid=code;

  

  const sendCode = (data) => {
    defaultService.signUp(data).then((response) => {
      if (response.success) {
        console.log(response);
        navigate("/verify/" + data.code);
      } else if (response.error) {
        console.log(response.message);
        setFlag(true);
      }
    });
  };
 
  // const[disabled,setDisabled]=useState(true);
   
  // const handleChange=(e)=>{
  //   if(e.target.value.length >=6){
  //     setDisabled(false);
  //   }
  //   if(e.target.value.length <6){
  //     setDisabled(true);
  //   }
  // }
 
  return (
    <>
      <section className="main">
        <div className="sub-main">
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="title">Sign Up</div>
              <div
                className="line"
                style={{
                  "border-bottom": errors.code?.message ? "1px solid red" : "",
                }}
              >
                <img src={Icon} alt="Icon" className="symb" />
                <input
                className="mandatoryfields"
                  type="text"
                  name="abc"
                  id="code"
                  placeholder="Enter invite code"
                  {...register("code", {
                    required: "Invite Code is required",
                    minLength: {
                      value: 6,
                      message: "Invite Code must be at least 6 characters",
                    },
                  })}
                  style={{ color: errors.code?.message ? "red" : "" }}
                  // onChange={handleChange}
                />
              </div>
              <div className="pargraph-signup">
                {errors.code?.message || flag ? (
                  " "
                ) : (
                  <p className="para-signup">
                    <span className="span-signup">
                      Please enter code above.
                    </span>
                    Invite code can be only used once
                  </p>
                )}
              </div>
              {/* <p id="error">{errors.code?.message}</p> */}
              {errors.code?.message && (
                <div className="error text-start">{errors.code?.message}</div>
              )}
              {/* { errors.code?.type === "minLength" && (
                <div className="error">{errors.code?.message}</div>
              )} */}
              {flag && <div className="error">The code is incorrect</div>}
              <div className="verify-button">
                <button className="btn1" disabled={ watch('code') === undefined || watch('code').length < 6 }>Verify</button>
              </div>
              <div className="para">
                  <p className="msg-para"  onClick={() => {navigate("/early-acess")}}>I don't have a invite code</p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default Signup;
