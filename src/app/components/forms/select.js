import PropTypes from "prop-types";
import React from "react";
const Select =React.forwardRef(({selectClass,dataArr,name,placeholder,...rest}, ref)=>{
  return (
    <>
      <div className="select-container" ref={ref}>
         <select className={selectClass} placeholder={placeholder} name={name} {...rest}>
         <option value={""} key={0} selected disabled>Select your option</option>
         {dataArr.map((item,i)=>( 
          <option key={'option-'+ i} value={item.value}>{item.label}</option>
         ))}
         </select> 
         <span className='custom-arrow'></span>
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