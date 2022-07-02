import Select from "../../components/forms/select";
import Input from "../../components/forms/input";

const SecondStep=()=>{
  return(
    <>
      <div className="secondstep-container">
      <div className="profile-select">
        <Select selectClass={"start-select"} dataArr={[{label:'option 1',value:'option1'}]}/>
      </div>
      <div className="secondstep-input">
        <Input type={"text"} placeholder={"Enter invite code"} name={"usercode"}
           inputClass={"start-input"} imgSrc={""}/>
      </div>
      </div>
    </>
  )
}

export default SecondStep;