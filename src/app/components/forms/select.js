import PropTypes from "prop-types";
const Select =({selectClass,dataArr,name,placeholder})=>{
  return (
    <>
      <div className="select-container">
         <select className={selectClass} placeholder={placeholder} name={name}>
         {dataArr.map((item,i)=>( 
          <option key={'option-'+ i} value={item.value}>{item.label}</option>
         ))}
         </select> 
      </div>
    </>
  );
};

Select.defaultProps = {
  dataArr:[],
  placeholder:'Select option',
  name:'select',
};

Select.propTypes = {
 dataArr:PropTypes.array,
 placeholder:PropTypes.string,
 name:PropTypes.string,
};

export default Select;