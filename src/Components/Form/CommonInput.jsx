import React, { useState } from 'react'
import styles from './Form.module.css';

function CommonInput({label,name,value,id,placeholder,type, onChange, errors}) {
  const [errorElement, setErrorElement] = useState(null);
  
  
  
  function handleBlur(e){
    const nameField = e.target.name
    if(e.target.value===''){
      setErrorElement(<span className={styles.errorMsg}>*{nameField} is required</span>)
    }else{
      setErrorElement(null)
    }
  }

  return (
    <>
    <div>
        {/* <label htmlFor={name} className={styles.labelStyle}>{label}</label> */}
        {/* <br></br> */}
        <input onBlur={handleBlur} className={styles.inputStyle} type={type} id={id} name={name} value={value} placeholder={placeholder||"Enter your Value"} onChange={onChange}/> 
        {/* {errors.name && <span>{errors.name}</span>} */}
        
    </div>
    {errorElement}
    </>
  )
}

export default CommonInput