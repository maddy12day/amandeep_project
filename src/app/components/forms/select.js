import PropTypes from "prop-types";
import React from "react";
const Select =React.forwardRef(({selectClass,dataArr,name,placeholder,...rest}, ref)=>{
  return (
    <>
      <div className="select-container" ref={ref}>
         <select className={selectClass} placeholder={placeholder} name={name} {...rest}>
         {dataArr.map((item,i)=>( 
          <option key={'option-'+ i} value={item.value}>{item.label}</option>
         ))}
         </select> 
      </div>
    </>
  );
});

Select.defaultProps = {
  dataArr:[],
  placeholder:'Select option',
  name:'option',
};

Select.propTypes = {
 dataArr:PropTypes.array,
 placeholder:PropTypes.string,
 name:PropTypes.string,
};

export default Select;