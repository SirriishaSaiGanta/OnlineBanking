import React, { useContext, useState } from 'react'
import { registerFormElements } from './Config';
import styles from './Form.module.css';
import CommonForm from './CommonForm';
import { GlobalContext } from '../GlobalContext/Context';
import { useNavigate } from 'react-router-dom';
import AddCardInfo from './AddCardInfo';

const initialRegisterFormData = {
    nameOfUser:'',
    emailOfUser:'',
    passwordOfUser:'',
    confirmPasswordOfUser:'',
}



function Register() {
  
 const [registerFormData, setRegisterFormData] = useState(initialRegisterFormData);
 const {isUserLoggedIn, setIsUserLoggedIn, addUser, users, presentUser, setPresentUser, register} = useContext(GlobalContext);
 const [isRegistered, setIsRegistered] = useState(false)
 
 const navigate = useNavigate()


function onHandleSubmit(event){
    event.preventDefault();

    if(registerFormData.passwordOfUser !== registerFormData.confirmPasswordOfUser){
      alert("Password do not match!")
      return
    }
    const newUser = {
      id: Date.now(),
      nameOfUser: registerFormData.nameOfUser,
      emailOfUser: registerFormData.emailOfUser,
      passwordOfUser: registerFormData.passwordOfUser,
    };

    if(registerFormData.name === '' || registerFormData.email ==='' || registerFormData.password==='' || registerFormData.confirmPassword===''){
      console.log(registerFormData)  
      alert("please fill all form details")
        return
    }
    
    const registrationSuccess = register(
      registerFormData.name,
      registerFormData.email,
      registerFormData.password
    )
    if (registrationSuccess) {
      const newUser = users.find(user => user.emailOfUser === registerFormData.email);
      setIsUserLoggedIn(true)
      setIsRegistered(true);
      navigate("/register/addCardDetails");
  } else {
      alert("User already exists with this email");
  }

    
    

  
 }
  return (

    <>
    {isRegistered ? <AddCardInfo/>:
      <div className={styles.container}>
          <h3 className={styles.heading}>Welcome To NexGen Bank!</h3>
          <CommonForm
            formData={registerFormData}
            setFormData={setRegisterFormData}
            formControls={registerFormElements}
            buttonText = {"Register"}
            onHandleSubmit = {onHandleSubmit}
            formName = {"Please Register for New Account"}
            formMsg = {"alreadyRegistered"}
          /> </div>}
    
    
      {/* {isRegistered?<AddCardInfo/>:null} */}
    
  
    </>
  )
}

export default Register