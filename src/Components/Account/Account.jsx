import React, { useContext, useEffect, useState } from 'react'
import styles from './Account.module.css'
import { GlobalContext } from '../GlobalContext/Context';


function Account() {


  
                    
  const {isUserLoggedIn, setIsUserLoggedIn,presentUser,users,updateDetails} = useContext(GlobalContext);
  const formData = {nameOfUser: presentUser.nameOfUser||'',
    emailOfUser:presentUser.emailOfUser ||'', 
    contactOfUser:presentUser.contactOfUser ||'', 
    balanceOfUser:'0', 
    accountNoOfUser:presentUser.accountNoOfUser ||'',
    accountTypeOfUser:presentUser.accountTypeOfUser ||'', 
    ifscCodeOfUser:presentUser.ifscCodeOfUser ||'',
    bankOfUser:'NexGen'
  }
  if (!presentUser) {
    return <p>User not logged in</p>;
}
  const [isLoading, setIsLoading] = useState(true);
  const [isEditable, setIsEditable] = useState(false);
  const [isSaved, setIsSaved] = useState(true);
  const [formDetails,setFormDetails]  = useState(formData);
  // console.log(presentUser.nameOfUser)
  // console.log(users)
  // console.log(presentUser)

  useEffect(() => {
    if (presentUser) {
      setFormDetails(formDetails);
    
    }
  }, [presentUser]);


  if (!isUserLoggedIn || !presentUser) {
    return <div>Please login to view account details.</div>;
  }
  

  


  
  

  function editAccountDetails(e){
    e.preventDefault()
    setIsEditable(true);
    setIsSaved(false);
  }  
  function saveAccountDetails(e){
    e.preventDefault()
    setIsSaved(true)
    setIsEditable(false)
    console.log(formDetails)
    updateDetails(formDetails);
 
  }
  function handleInputChange(event){
    event.preventDefault()
    const {id, value} = event.target
    console.log(id)
    setFormDetails(prevData=>({
        ...prevData,
        [id]:value
    }))

  }

  function handleMyAccountFormSubmit(event){
    event.preventDefault()

  }
  return (
    <>  {isUserLoggedIn?(
      <div className={styles.accountPage}>
      <h1>My Account</h1>
      <form className={styles.formContainer} onSubmit={handleMyAccountFormSubmit}>
      <div  className={styles.formContainerItems}>
          <div>
          <label htmlFor="nameOfUser">Name</label>
          <br/>   
          <input type="text" id="nameOfUser" placeholder={presentUser.nameOfUser} disabled={!isEditable} onChange={handleInputChange}/> 
          <br/>

          <label  htmlFor="emailOfUser">Email</label>
          <br/> 
          <input type="text" id="emailOfUser" placeholder={presentUser.emailOfUser} disabled={!isEditable} onChange={handleInputChange}/> 
          <br/>

          <label  htmlFor="contactOfUser">Contact</label>
          <br/> 
          <input type="text" id="contactOfUser" placeholder={presentUser.contactOfUser} disabled={!isEditable} onChange={handleInputChange}/> 
          <br/>

          <label  htmlFor="balance">Available Balance</label>
          <br/>
          <input type="number" id="balance" placeholder={formDetails.balanceOfUser} disabled={!isEditable} onChange={handleInputChange}/> 
          <br/>
          </div>
          <div>
          <label  htmlFor="bankOfUser">Bank</label>
          <br/>
          <input type="text" id="bankOfUser" placeholder={formDetails.bankOfUser}  onChange={handleInputChange}/> 
          <br/>

          <label  htmlFor="accountNumberOfUser">Bank Account Number </label>
          <br/>
          <input type="text" id="accountNoOfUser" placeholder={formDetails.accountNoOfUser} disabled={!isEditable} onChange={handleInputChange}/> 
          <br/>

          <label  htmlFor="IfscCodeOfUser">IFSC Code</label>
          <br/>
          <input type="text" id="IfscCodeOfUser" placeholder={formDetails.ifscCodeOfUser} disabled={!isEditable} onChange={handleInputChange}/> 
          <br/>
          

          <label  htmlFor="accountTypeOfUser">Account Type</label>
          <br/>
          <input type="text" id="accountTypeOfUser" placeholder={formDetails.accountTypeOfUser} disabled={!isEditable}/> 
          <br/>
          </div> 
          </div>
          {isEditable?
              <div >
                  <button onClick={editAccountDetails} >Edit</button>
                  <button onClick={saveAccountDetails} style={{gap:"20px", marginLeft: "15px"}}>Save</button>
              </div>
              :<button onClick={editAccountDetails}>Edit</button>}
          
      </form>
  </div>
    ) 
      : "Please Login/Register to Contiune"}
        
    </>
  )
}

export default Account