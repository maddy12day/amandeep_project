import Input from "../../components/forms/input";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userschema2 } from "../../utils/Validaton";
import { isValidNumber } from "libphonenumber-js";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Icon from "../../assets/images/smartphone.png";
import * as defaultService from "../../services/default";
import { useState } from "react";
const Early = () => {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userschema2),
    mode:"all"
  });

  const[flag,setFlag]=useState(true);

  const onSubmitHandler = (data) => {
    console.log({ data });
    sendData(data)
  };
    
  const sendData = (data) => {
    defaultService.early_access(data).then((response) => {
      if (response.success) {
        console.log(response);
        if(response.data.id){
        setFlag(false);
        }
      } else if (response.error) {
        console.log(response.message);
      }
    });
  };
    
  
  return (
    <>
    { flag && (
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="early-main-container">
          <div className="early-con">
            <div className="early-heading ">
              <h1>Early access</h1>
            </div>
            <div className="eraly-input">
              <Input
                type={"text"}
                placeholder={"Enter Fullname"}
                name={"fullname"}
                inputClass={"start-input"}
                {...register("fullname")}
              />
              <p className="error1">{errors.Fullname?.message}</p>
            </div>
            <div className="early-input2">
              <Input
                type={"email"}
                placeholder={"Enter email"}
                name={"email"}
                inputClass={"start-input"}
                {...register("email")}
              />
              <p className="error1">{errors.email?.message}</p>
            </div>
            <div className="d-flex justify-content-center line early-number">
              <img src={Icon} alt="Icon" className="mobile-icon" />
              <Controller
                control={control}
                name="mobile"
                placeholder="Enter mobile number"
                rules={{
                  required: "Mobile number is required.",
                  validate: isValidNumber,
                }}
                render={({ field: { onChange, onBlur, value, name, ref } }) => (
                  <PhoneInput
                    name={'mobile'}
                    placeholder={"Mobile Number"}
                    country={"in"}
                    value={value}
                    onChange={(e) => onChange("+" + e)}
                  />
                )}
              />
            </div>
            <p className="error1">
                {errors.mobile?.type === "required" &&
                  "Mobile number is required."}
                {errors.mobile?.type === "validate" &&
                  "Mobile number is not valid."}
              </p>
            <div className="early-button">
              <button className="early-btn" type="submit" >
                Continue
              </button>
            </div>
          </div>
        </div>
      </form>
    )}
    {!flag && (
      <div className="submit-container">
      <div className="submit-con">
      <div className="submit-heading">
      <p className="submit-paragraph">Your data is submited</p>
      </div>
      </div>
      </div>
      
    )}
    </>
  );
};

export default Early;
