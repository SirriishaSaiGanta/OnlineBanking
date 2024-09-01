import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Login from "./Components/Form/Login";
import Register from "./Components/Form/Register";
import NotFound from "./Components/NotFound/NotFound";

import Layout from "./Components/Layout/Layout";
import TransactionsPage from "./Components/TransactionsPage/TransactionsPage";
import Account from "./Components/Account/Account";
import Payments from "./Components/Payments/Payments";
import Withdraw from "./Components/Payments/Withdraw";
import Deposit from "./Components/Payments/Deposit";
import Summary from "./Components/Payments/Summary";
import Services from "./Components/Services/Services";
import AddCardInfo from "./Components/Form/AddCardInfo";
import { useContext } from "react";
import { GlobalContext } from "./Components/GlobalContext/Context";

function App() {
  const {isUserLoggedIn}= useContext(GlobalContext)
  console.log(isUserLoggedIn)
  return (
    <Router>
      <Routes>
      <Route path="/home" element= {<Layout /> }>
            <Route path="transactions" element={<TransactionsPage />} />
            <Route path="account" element={<Account />} />
            <Route path="payments" element={<Payments />}>
                <Route path="withdraw" element={<Withdraw />} />
                <Route path="deposit" element={<Deposit />} />
                <Route path="summary" element={<Summary />} />
            </Route>
            {/* <Route path="services" element={<Services />} /> */}
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />}>
          <Route path="addCardDetails" element={<AddCardInfo/>} />
         </Route>
        
        <Route path="*" element={isUserLoggedIn ? <NotFound /> : <NotFound />}  ></Route>
        
      </Routes>
    </Router>
  );
}

export default App;
