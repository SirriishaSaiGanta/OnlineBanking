import React, { useContext } from 'react'
import { GlobalContext } from '../GlobalContext/Context'

function Summary() {
    const {availableBalance, presentUser} = useContext(GlobalContext);
  return (
    <div>
        <h3>Hey <i style={{color:'yellow', fontSize:'1.5em'}}>{presentUser.nameOfUser}</i>, Available Balance is {availableBalance}</h3>
    </div>
  )
}

export default Summary