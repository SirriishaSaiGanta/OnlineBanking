import React, { useContext, useState } from "react";
import styles from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../GlobalContext/Context";
import Login from "../Form/Login";

function Header() {
 
  const { logout} = useContext(GlobalContext);
  const [activeNav, setActiveNav] = useState(null);

  
  const navigate = useNavigate();

  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
};

  function ConfirmToLogOut() {
    const confirmLogout = window.confirm("Do you really want to logout?");
    
    if (confirmLogout) {
      logout()
      navigate("/login");
      
    }
  }

  // function renderElements(){
  //   console.log(isUserLoggedIn)
  //   isUserLoggedIn? (
  //     <header className={styles.headerStyle}>
  //         <h4>Sai Bank</h4>
  //         <div  className={styles.headerItems}>
  //         <ul  className={styles.navItems}>
  //           <li><Link to="/home/account"  className={styles.navItem}>My Account</Link></li>
  //           <li ><Link to="/home/transactions" className={styles.navItem}>Transactions</Link></li>
  //           <li ><Link to="/home/account" className={styles.navItem}>Payments</Link></li>
  //           <li ><Link to="/home/account" className={styles.navItem}>Services</Link></li>

  //         </ul>
  //         <button className={styles.logoutButton} onClick={ConfirmToLogOut}>Log Out</button>
  //         </div>
  //     </header>): <Login/>
  // }
  return (
    <header className={styles.headerStyle}>
      <img src="..\src\assets\bankk.png" alt="logo" className={styles.logo}/>
      <h4>NexGen Bank</h4>
      {/* <div className={styles.headerItems}> */}
        <ul className={`${styles.navItems}` }>
          <li onClick={() => handleNavClick('account')} className={`${styles.navItem}  ${activeNav==='account'?styles.active : ''}`}>
            <Link to="/home/account" className={styles.navItem}>
              My Account
            </Link>
          </li>
          <li onClick={() => handleNavClick('transactions')} className={`${styles.navItem}  ${activeNav==='transactions'?styles.active : ''}`}>
            <Link to="/home/transactions" className={styles.navItem}>
              Transactions
            </Link>
          </li>
          <li onClick={() => handleNavClick('payments')} className={`${styles.navItem}  ${activeNav==='payments'?styles.active : ''}`}>
            <Link to="/home/payments" className={styles.navItem}>
              Payments
            </Link>
          </li>
          {/* <li>
            <Link to="/home/services" className={styles.navItem}>
              Services
            </Link>
          </li> */}
        </ul>
        <button className={styles.logoutButton} onClick={ConfirmToLogOut}>
          Log Out
        </button>
      {/* </div> */}
    </header>

  );
}

export default Header;
