import Input from "../../components/forms/input";
import Select from "../../components/forms/select";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userschema2 } from "../../utils/Validaton";

const ThirdStep=()=>{

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(userschema2),
  });

  const onSubmitHandler = (data) => {
    console.log({ data });
    
  };
  return(
    <>
     <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div className="thirdstep-container">
      <div className="thirdstep-input">
      <Input type={"text"} placeholder={"Enter invite code"} name={"title"}
           inputClass={"start-input"} imgSrc={""}
           {...register('title')} 
           />
           <p className="error1">{errors.title?.message}</p>
      </div>
      <div className="thirdstep-select">
        <Select selectClass={"start-select"} dataArr={[{label:'option 1',value:'option1'}]}
          {...register('option')}
        />
        <p className="error1">{errors.option?.message}</p>
      </div>
      <div className="thirdstep-paragraph">
       <p>Will be used to verify indentity</p>
      </div>
      <div className="thirdstep-input">
        <Input type={"text"} placeholder={"Enter invite code"} name={"title1"}
           inputClass={"start-input"} imgSrc={""}
            {...register('title1')}
           />
           <p className="error1">{errors.title1?.message}</p>
      </div>
      <div className="thirdstep-paragraph-2">
       <p>(Optional)</p>
      </div>
      <button className="profile-btn" type="submit" >Continue
      </button>
      </div>
      </form>
    </>
  )
}

export default ThirdStep;