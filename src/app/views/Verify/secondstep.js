import Select from "../../components/forms/select";
import Input from "../../components/forms/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userschema1 } from "../../utils/Validaton";
import * as defaultServices from "../../services/default"
import { useState } from "react";
import { useEffect } from "react";
import Country from "../../services/data";

const SecondStep=({stepCount})=>{

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(userschema1),
  });

  const onSubmitHandler = (data) => {
    console.log({ data });
  };

  const [post, setPost] =useState([]);
  const [place,setPlace]=useState([]);
  
   const accountTypes=()=>{
    defaultServices.accountTypes().then((response) => {
      if (response.success) {
        let type=[];
        response.data.forEach((item)=>{
         type.push({label:item.account_type,value:item.id})
        })
        console.log(type);
        setPost(type);
      } else if (response.error) {
        console.log(response.message);
      }
    });
  }
   
  useEffect(() => {
    accountTypes();
  }, []);

  useEffect(()=>{
    let state=[];
    Country.forEach((item)=>{
      state.push({label:item.name,value:item.dial_code})
      setPlace(state);
    })
  },[]); 
  
  return(
    <>
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div className="secondstep-container">
      <div className="profile-select">
        <Select selectClass={"start-select"} dataArr={post}
          name='option'
          {...register('option')}
         />
         <p className="error1">{errors.option?.message}</p>
      </div>
      <div className="secondstep-input">
      <Select selectClass={"start-select"} dataArr={place}
          name='option'
          {...register('country')}
         />
         <p className="error1">{errors.country?.message}</p>
      </div>
      <div className="secondstep-input">
        <Input type={"email"} placeholder={"Email"} name={"email"}
           inputClass={"start-input"}  
            {...register('email')}
           />
           <p className="error1">{errors.email?.message}</p>
      </div>
      <button className="profile-btn" type="submit" >Continue
     </button>
      </div>
      </form>
    </>
  )
}

export default SecondStep;