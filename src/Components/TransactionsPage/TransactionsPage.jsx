import React, { useContext } from 'react'
import useFetch from '../useFetch'
import {transactionData} from './data.jsx'
import styles from './TransactionsPage.module.css'
import { GlobalContext } from '../GlobalContext/Context.jsx';

function TransactionsPage() {
 
  const { transactions } = useContext(GlobalContext);
  
  if (!transactions || transactions===null || transactions === undefined) {
    return <p className={styles.Notransactions}>No transactions available.</p>;
    } 

  return (
    <div className={styles.transactionsPage}>
        <h3 className={styles.transactionHeading}>Transaction History</h3>
        <div className={styles.tableContainer}>
        <table className={styles.transactionTable}>
            <thead> 
                <tr>
                    <th>S.No</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Description</th>
                </tr>
            </thead>
                
                {
                    // transactionsData.map((transactionItems)=>{
                    //     transactionItems.map(transactionItem=>{
                    //         <tr>
                    //         <td>{transactionItem.id}</td>
                    //         <td>{transactionItem.date}</td>
                    //         <td>{transactionItem.amount}</td>
                    //         <td>{transactionItem.description}</td>
                    //     </tr> 
                    //     })
                        
                    // })
                }
            <tbody>
            {transactions.map((item,index)=>
                    <   tr key={item.id}>
                            <td>{index +1}</td>
                             <td>{item.date}</td>
                             <td>{item.amount}</td>
                             <td>{item.description}</td>
                         </tr> 
                    
                    
                )} 
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default TransactionsPage