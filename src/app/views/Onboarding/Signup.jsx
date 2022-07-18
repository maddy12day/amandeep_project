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
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const [flag, setFlag] = useState(false)
  const onSubmit = (data) => {
    sendCode(data);
    // navigate("/verify/" + data.code);
  };

  // console.log(errors)

  const sendCode = (data) => {
    defaultService.signUp(data).then((response) => {
      if (response.success) {
        console.log(response);
        navigate("/verify/" + data.code);
      } else if (response.error) {
        console.log(response.message)
        setFlag(true)
      }
    });
  };

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
                />
              </div>
              {/* <p id="error">{errors.code?.message}</p> */}
              { errors.code?.type === "required" && (
                <div className="error">{errors.code?.message}</div>
              )}
              { errors.code?.type === "minLength" && (
                <div className="error">{errors.code?.message}</div>
              )}
              {flag && (<div className="error">The code is incorrect</div>)}
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
