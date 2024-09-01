import React, { useContext, useState } from 'react'
import styles from './Payments.module.css'
import { GlobalContext } from '../GlobalContext/Context';

const initialFormInfo = {depositAmount:0}

function Deposit() {
//    const [isNextInWithdraw, setisNextInWithdraw] = useState(isNext)
   
const [isNext, setIsNext] = useState(false);
const [formInfo, setformInfo] = useState({depositAmount:0})
const [isSubmitted, setIsSubmitted] = useState(false);
const {availableBalance, setAvailableBalance, addTransaction} = useContext(GlobalContext);

    function userClickedEdit(){
        setIsNext(false);
        setIsSubmitted(false)
    }

    function userSelectedNextToDeposit(e){
        e.preventDefault()
        setIsNext(true);
    }
    function handleInputChange(e){
        
        const {id, value} = e.target
        setformInfo((prev)=>({
          ...prev,
          [id]: value
        }))
       
      }
    function handleSubmit(e){
        e.preventDefault();
       
        const depositAmount = parseInt(formInfo.depositAmount, 10);
        setAvailableBalance((prevBalance) => prevBalance + depositAmount);
        const newTransaction = {
          id: Date.now(), 
          date: new Date().toISOString().split('T')[0], 
          amount: +depositAmount,
          description: 'Credited'
      };

      addTransaction(newTransaction);
        setIsSubmitted(true);
        
        console.log(availableBalance)
      }  
    return (
    isNext ? (
    
        
        <form className={styles.paymentsForm} onSubmit={handleSubmit}>
            <button onClick={userClickedEdit} className={styles.editButton}>Edit account details</button>
            <br></br>
            <label  htmlFor="depositAmount">Amount to Deposit</label>
            <br/> 
            <input type="number" id="depositAmount" placeholder={formInfo.depositAmount}  onChange={handleInputChange}/> 
            <br/>
    
            
    
            <button type="submit">Submit</button> 
            
            {isSubmitted && <p className={styles.successMsg}>Successfully the amount is Deposited! Available Balance: {availableBalance} </p>}
            
            
        </form>
        

      ) : (
        <form className={styles.paymentsForm}>
        <label  htmlFor="accountNumber">Account Number</label>
        <br/> 
        <input type="text" id="accountNumber" placeholder="1234 5612 7894" disabled="true" /> 
        <br/>
    
        <label  htmlFor="ifscCode">IFSC Code</label>
        <br/> 
        <input type="text" id="ifscCode" placeholder="ABINOO2456" disabled="true" /> 
        <br/>
    
        <label  htmlFor="ifscCode">Account Type</label>
        <br/> 
        <select>
            <option>Savings</option>
            <option>Current</option>
        </select>
        <br/>
    
        <button onClick={userSelectedNextToDeposit}>Next</button> 
    </form>
    
      )
  )
}

export default Deposit
