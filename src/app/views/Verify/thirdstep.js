import Input from "../../components/forms/input";
import Select from "../../components/forms/select";

const ThirdStep=()=>{
  return(
    <>
      <div className="thirdstep-container">
      <div className="thirdstep-input">
      <Input type={"text"} placeholder={"Enter invite code"} name={"usercode"}
           inputClass={"start-input"} imgSrc={""}/>
      </div>
      <div className="thirdstep-select">
        <Select selectClass={"start-select"} dataArr={[{label:'option 1',value:'option1'}]}/>
      </div>
      <div className="thirdstep-paragraph">
       <p>Will be used to verify indentity</p>
      </div>
      <div className="thirdstep-input">
        <Input type={"text"} placeholder={"Enter invite code"} name={"usercode"}
           inputClass={"start-input"} imgSrc={""}/>
      </div>
      <div className="thirdstep-paragraph-2">
       <p>(Optional)</p>
      </div>
      </div>
    </>
  )
}

export default ThirdStep;