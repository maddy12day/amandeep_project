import Input from "../../components/forms/input";
import logo from '../../assets/images/user.png'
import Select from "../../components/forms/select";

const Onboarding = () => {
    return (
        <>
        <Input type={"text"} placeholder={"Enter invite code"} name={"usercode"}
           inputClass={"start-input"} imgSrc={logo}
        />
        <Select selectClass={"start-select"} dataArr={[{label:'option 1',value:'option1'}]}/>
        </>
    )
}
export default Onboarding;