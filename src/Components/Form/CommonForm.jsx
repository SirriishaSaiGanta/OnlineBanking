import React, { useState } from 'react'
import CommonInput from './CommonInput';
import styles from './Form.module.css';
import { Link, useSearchParams } from 'react-router-dom';
import AddCardInfo from './AddCardInfo';

const formTypes={
    INPUT: "input",
    SELECT: "select",
    TEXTAREA : "textarea"
}

function CommonForm({formData, setFormData, formControls=[], buttonText, onHandleSubmit, formName, formMsg}) {
    
    let content = null;
   
   
    function renderFormElement(getCurrentFormElement){
       
        
        switch(getCurrentFormElement.componentType){
            case formTypes.INPUT:
                content = (
                    <CommonInput 
                        label={getCurrentFormElement.label}
                        id={getCurrentFormElement.id}
                        name={getCurrentFormElement.name}
                        placeholder={getCurrentFormElement.placeholder}
                        type = {getCurrentFormElement.type}
                        value={formData[getCurrentFormElement.name]}
                        onChange = {(event)=>{
                            setFormData({
                                ...formData,
                                [event.target.name] : event.target.value,
                            })
                        }}
                        
                       
                    />
                )

                break;
            default:
                content = (
                    <CommonInput 
                    label={getCurrentFormElement.label}
                    id={getCurrentFormElement.id}
                    name={getCurrentFormElement.name}
                    placeholder={getCurrentFormElement.placeholder}
                    type = {getCurrentFormElement.type}
                    value={formData[getCurrentFormElement.name]}
                    onChange ={(event)=>{
                        setFormData({
                            ...formData,
                            [event.target.name] : event.target.value
                        })
                    }}
                    
                />      
            )
            break;
        }
        return content
    }
   
    return (
    <form onSubmit={onHandleSubmit} className={styles.formStyle}>
        <h5 className={styles.formHeading}>{formName}</h5>
        {formControls.length>0 ?
            formControls.map(singleFormElement => renderFormElement(singleFormElement))
            :null}
        <div>
        <button className={styles.buttonStyle} type="submit" value={buttonText}>{buttonText||"Submit"}</button>
        {/* {formMsg==='alreadyRegistered' 
        ? <p className={styles.formMsg}>Already Registered? Please <Link to={'/login'}>Login</Link></p>
        : <p className={styles.formMsg}>Not Registered? Please <Link to={'/register'}>Register</Link></p> }
        </div> */}

        {formMsg==='alreadyRegistered' 
        ? <p className={styles.formMsg}>Already Registered? Please <Link to={'/login'}>Login</Link></p>
        : (formMsg==='Please Enter Card Details to Continue' ? <p className={styles.cardMsg}>Please Enter Card Details to Continue</p>
            : <p className={styles.formMsg}>Not Registered? Please <Link to={'/register'}>Register</Link></p>) }
        </div>
        
    </form>
  )
}

export default CommonForm