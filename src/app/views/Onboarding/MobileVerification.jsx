import Icon from "../../assets/images/smartphone.png";
import Line from "../../assets/images/Line.png";
import Frame from "../../assets/images/Frame.png";
import Arrow from "../../assets/images/arrow-left.png";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import * as defaultService from "../../services/default";
import { isValidNumber } from "libphonenumber-js";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const MobileVerification = (props) => {
  const { code } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    control,
    formState: { errors: errors2 },
    handleSubmit: handleSubmit2,
  } = useForm({
    mode: "all",
  });

  const [formValues, setFormValues] = useState(null);
  const [flag, setFlag] = useState(true);
  const [flag2, setFlag2] = useState(true);
  const [flag3, setFlag3] = useState(false);

  const onSub = (data) => {
    data.code = code;
    setFormValues(data);
    sendData(data);
    // navigate("/profile");
  };

  let navigate = useNavigate();
  const onSubmit = (data) => {
    data.code = formValues.code;
    data.mobile = formValues.mobile;
    // sendData(data);
    setFlag(true);
  };

  const sendData = (data) => {
    console.log(data);
    defaultService.signUp(data).then((response) => {
      if (response.success) {
        console.log(response);
        if (data.mobile) {
          setFlag(true);
        }
      } else if (response.error) {
        console.log(response);
        setFlag3(true);
      }
    });
  };

  return (
    <section className="main">
      <div className="sub-main">
        {!flag && (
          <form onSubmit={handleSubmit2(onSub)}>
            <div>
              <div className="title">Sign Up</div>
              <div
                className="d-flex justify-content-center line"
                style={{
                  "border-bottom": errors.code?.message || flag3 ? "1px solid red" : "",
                }}
              >
                <img src={Icon} alt="Icon" className="mobile-icon" />
                <Controller
                  control={control}
                  name="mobile"
                  rules={{
                    required: "Mobile number is required.",
                    validate: isValidNumber,
                  }}
                  render={({
                    field: { onChange, onBlur, value, name, ref },
                  }) => (
                    <PhoneInput
                      name={name}
                      placeholder={"Mobile Number"}
                      country={"in"}
                      value={value}
                      onChange={(e) => onChange("+" + e)}
                    />
                  )}
                />
              </div>
              <p className="error">
                {errors2.mobile?.type === "required" &&
                  "Mobile number is required."}
                {errors2.mobile?.type === "validate" &&
                  "Mobile number is not valid."}
              </p>
              {flag3 && <div className="error">Invalid Mobile Number</div>}
              <div className="verify-button">
                <button type="submit">Continue</button>
              </div>
            </div>
          </form>
        )}

        {flag && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{ display: flag ? "block" : "none" }}>
              <img
                src={Arrow}
                onClick={() => setFlag(false)}
                alt="test"
                id="arrow"
                className="arrow-mobile"
              />
              <div className="title">Sign Up</div>
              <div className="d-flex justify-content-center line">
                <img src={Frame} alt="Icon" className="frame-icon"/>
                <input
                  type="number"
                  name="otp"
                  id="otp"
                  placeholder="Enter OTP"
                  {...register("otp", {
                    required: "OTP is required",
                  })}
                />
              </div>
              <p id="error">{errors.abc?.message}</p>
              <p style={{ display: flag2 ? "flex" : "none" }} id="resend">
                Resend OTP (0:<span id="countdowntimer">60</span>)
              </p>
              <span
                style={{ display: !flag2 ? "flex" : "none" }}
                id="resendlink"
              >
                Resend OTP
              </span>
              <div className="verify-button">
                <button>Verify</button>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default MobileVerification;
