import Select from "../../components/forms/select";
import Input from "../../components/forms/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userschema1 } from "../../utils/Validaton";

const SecondStep=({stepCount})=>{

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(userschema1),
  });

  const onSubmitHandler = (data) => {
    console.log({ data });
    
  };
  return(
    <>
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div className="secondstep-container">
      <div className="profile-select">
        <Select selectClass={"start-select"} dataArr={[{label:'option 1',value:'option1'},
         {label:'option 2',value:'option2'}  ]}
          name='option'
          {...register('option')}
         />
         <p className="error1">{errors.option?.message}</p>
      </div>
      <div className="secondstep-input">
        <Input type={"text"} placeholder={"Country"} name={"title"}
           inputClass={"start-input"} imgSrc={""}
            {...register('title')}
           />
           <p className="error1">{errors.title?.message}</p>
      </div>
      <div className="secondstep-input">
        <Input type={"text"} placeholder={"Email"} name={"email"}
           inputClass={"start-input"} imgSrc={""}
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