import PropTypes from "prop-types";
import { Image } from "react-bootstrap";
const Input =({type,placeholder,name,inputClass,error,imgSrc})=>{
  return(
    <>
      <div className="div-container">
      <div className="input-container">
      {imgSrc !== null ? <Image src={imgSrc}/> : ""}
      <input type={type} placeholder={placeholder} name={name} className={ error === null ? inputClass : 'error-input ' + inputClass } 
       required/>
     </div>
      </div>
    </>
  );
};

Input.defaultProps = {
  type: "text",
  placeholder:null,
  inputClass:"input",
  name:null,
  error:null,
  imgSrc:null,
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  inputClass:PropTypes.string
};

export default Input;