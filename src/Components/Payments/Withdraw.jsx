import React, { useContext, useState } from 'react'
import styles from './Payments.module.css'
import { GlobalContext } from '../GlobalContext/Context';

const initialFormInfo = {withdrawAmount:0}

function Withdraw() {
//    const [isNextInWithdraw, setisNextInWithdraw] = useState(isNext)
   
const [isNext, setIsNext] = useState(false);
const [formInfo, setformInfo] = useState({withdrawAmount:0})
const [isSubmitted, setIsSubmitted] = useState(false);
const {availableBalance, setAvailableBalance, addTransaction} = useContext(GlobalContext);

    function userClickedEdit(){
        setIsNext(false);
        setIsSubmitted(false)
    }

    function userSelectedNextToWithdraw(e){
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
       
        const withdrawAmount = parseInt(formInfo.withdrawAmount, 10);
        if (withdrawAmount > 0 && withdrawAmount <= availableBalance) {
            setAvailableBalance((prevBalance) => prevBalance - withdrawAmount);
            const newTransaction = {
              id: Date.now(), 
              date: new Date().toISOString().split('T')[0], 
              amount: -withdrawAmount,
              description: 'Debited'
          };

          addTransaction(newTransaction);
            setIsSubmitted(true);
        } else {
            alert('Insufficient funds to transfer');
            setIsSubmitted(false);
            }
        
      }  
    return (
    isNext ? (
    
        
        <form className={styles.paymentsForm} onSubmit={handleSubmit}>
            <button onClick={userClickedEdit} className={styles.editButton}>Edit account details</button>
            <br></br>
            <label  htmlFor="withdrawAmount">Amount to Transfer</label>
            <br/> 
            <input type="number" id="withdrawAmount" placeholder={formInfo.withdrawAmount} /*disabled={!isEditable}*/ onChange={handleInputChange}/> 
            <br/>
    
            
    
            <button type="submit">Submit</button> 
            
            {isSubmitted && <p className={styles.successMsg}>Successfully the amount is transferred! <br/>Remaining Balance: {availableBalance} </p>}
            
            
        </form>
        

      ) : (
        <form className={styles.paymentsForm}>
        <label  htmlFor="accountNumber">Send to (Account Number)</label>
        <br/> 
        <input type="text" id="accountNumber" placeholder="Enter account number of sender" /*disabled={!isEditable}*/ /> 
        <br/>
    
        <label  htmlFor="ifscCode">IFSC Code</label>
        <br/> 
        <input type="text" id="ifscCode" placeholder="Enter IFSCCode of sender(ABINOO2456)" /*disabled={!isEditable}*/ /> 
        <br/>
    
        <label  htmlFor="ifscCode">Account Type</label>
        <br/> 
        <select>
            <option>Savings</option>
            <option>Current</option>
        </select>
        <br/>
    
        <button onClick={userSelectedNextToWithdraw}>Next</button> 
    </form>
    
      )
  )
}

export default Withdraw
