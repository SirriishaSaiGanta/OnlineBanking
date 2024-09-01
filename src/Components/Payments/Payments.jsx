import React, { useContext, useState } from 'react'
import styles from './Payments.module.css'

import Withdraw from './Withdraw';
import Deposit from './Deposit';
import Summary from './Summary';
import { Link, Outlet } from 'react-router-dom';



function Payments() {
  const [withDraw, setWithdraw] = useState(false);  
  const [deposit, setDeposit] = useState(false);  
  const [summary,setSummary] = useState(false);  
  const [view, setView] = useState('');
  

  

  function handleWithdraw(e){
    e.preventDefault();
    setWithdraw(true)
    setDeposit(false)
    setSummary(false)
    setView('withdraw')

  }  
  function handleDeposit(e){
    e.preventDefault();
    setDeposit(true)
    setWithdraw(false)
    setSummary(false)
    setView('deposit')
  }  
  function handleSummary(e){
    e.preventDefault();
    setSummary(true)
    setDeposit(false)
    setWithdraw(false)
    setView('summary')
  }  
  
  

  
 

  return (
    <div className={styles.paymentsPage}>
        <h1>Hello User!</h1>
        <div>
        <Link to="withdraw"><button>Transfer</button></Link>
        <Link to="deposit"><button>Deposit</button></Link>
        <Link to="summary"><button >Summary</button> </Link>
        </div>
        <Outlet/>
    </div>
  )
}

export default Payments