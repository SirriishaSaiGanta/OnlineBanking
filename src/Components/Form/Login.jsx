import React, { useContext, useState } from "react";
import CommonForm from "./CommonForm";
import { loginFormElements } from "./Config";
import styles from './Form.module.css';
import { GlobalContext } from "../GlobalContext/Context";
// import Layout from "../Layout/Layout";
// import { Link } from "react-router-dom";
import TransactionsPage from "../TransactionsPage/TransactionsPage";
import { useNavigate } from "react-router-dom";

const initialFormData = {
  email: "",
  password: "",
};



function Login() {
  const [loginFormData, setLoginFormData] = useState(initialFormData);
  const {login, isUserLoggedIn, setIsUserLoggedIn, users, presentUser, setPresentUser} = useContext(GlobalContext);
  // const[users, setUsers] = useContext(GlobalContext);
 
  const navigate = useNavigate();
  setPresentUser(null)








  function onHandleSubmit(event){
    event.preventDefault();
    
    const isAuthenticated = login(loginFormData.email, loginFormData.password)
    
    if(isAuthenticated){
      navigate("/home/account")
    }else{
      alert("Invalid email or password")
    }
    
    setLoginFormData(initialFormData);
}

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Welcome To NexGen Bank!</h3>
      <CommonForm
        formData={loginFormData}
        setFormData={setLoginFormData}
        formControls={loginFormElements}
        buttonText = {"Login"}
        onHandleSubmit = {onHandleSubmit}
        formName = {"Please Login to your Account"}

      />
    </div>
  );
}

export default Login;
