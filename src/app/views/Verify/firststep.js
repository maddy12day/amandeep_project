import Select from "../../components/forms/select";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userschema } from "../../utils/Validaton";
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
    <Select selectClass={"start-select"} dataArr={[{label:'option 1',value:'option1'},{label:'option 2',value:'option2'}]} 
    name='option'
     {...register('option')}
     
    />
    <p className="error1">{errors.option?.message}</p>
    </div>
    <div className="profile-paragraph">
      <p>Add display name (optional)</p>
    </div>
    <div className="form-container">
      <div className="form-radio">
      <input type="radio" id="user" name="radio_1" value="username"/>
      <label htmlFor="user">Username</label>
      </div>
      <div className="form-radio">
      <input type="radio" id="full" name="radio_2" value="fullname"/>
      <label htmlFor="full">Full Name</label>
      </div>
      <div className="form-radio">
      <input type="radio" id="show" name="radio_3" value="showname"/>
      <label htmlFor="show">Show Name</label>
      </div>
     </div>
     <button className="profile-btn" type="submit" >Continue
     </button>
     </form>
    </>
  )
}

export default FirstStep;