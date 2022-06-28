const Input =({type,placeholder,name})=>{
  return(
    <>
      <div className="container">
      <div className="input-container">
      <input type={type} placeholder={placeholder} name={name}/>
     </div>
      </div>
    </>
  )
}

export default Input;