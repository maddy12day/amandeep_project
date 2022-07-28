import Select from "../../components/forms/select";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userschema } from "../../utils/Validaton";
import Input from "../../components/forms/input";
const FirstStep = ({stepCount})=>{

  const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(userschema),
      });

      const onSubmitHandler = (data) => {
        console.log({ data });
        stepCount(2);
      };
  return(
    <>
    <form onSubmit={handleSubmit(onSubmitHandler)}>
    <div className="profile-select">
    {/* <Select selectClass={"start-select"} dataArr={[{label:'option 1',value:'option1'},{label:'option 2',value:'option2'}]} 
    name='option'
     {...register('option')}
     
    />
    <p className="error1">{errors.option?.message}</p>
    </div> */}
    <div className="secondstep-input">
        <Input type={"text"} placeholder={"Full Name"} name={"title"}
           inputClass={"start-input"} imgSrc={""}
            {...register('Fullname')}
           />
           <p className="error1">{errors.Fullname?.message}</p>
      </div>
      <div className="secondstep-input">
        <Input type={"text"} placeholder={"Username"} name={"title"}
           inputClass={"start-input"} imgSrc={""}
            {...register('Username')}
           />
           <p className="error1">{errors.Username?.message}</p>
      </div>
      <div className="secondstep-input">
        <Input type={"date"} placeholder={"Date of birth"} name={"title"}
           inputClass={"start-input"} imgSrc={""}
            {...register('date')}
           />
           <p className="error1">{errors.date?.message}</p>
      </div>
      </div>
    {/* <div className="profile-paragraph">
      <p>Add display name (optional)</p>
    </div> */}
    {/* <div className="form-container">
      <div className="form-radio">
      <input type="radio" id="user" name="display_name" value="username"/>
      <label htmlFor="user">Username</label>
      </div>
      <div className="form-radio">
      <input type="radio" id="full" name="display_name" value="fullname"/>
      <label htmlFor="full">Full Name</label>
      </div>
      <div className="form-radio">
      <input type="radio" id="show" name="display_name" value="showname"/>
      <label htmlFor="show">Show Name</label>
      </div>
     </div> */}
     <button className="profile-btn" type="submit" >Continue
     </button>
     </form>
    </>
  )
}

export default FirstStep;