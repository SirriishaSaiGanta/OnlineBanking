import { createContext, useEffect, useState } from "react";
import { usersManagement } from "../UserManagement";



export const GlobalContext = createContext(null);

function GlobalState({children}){
    const storedUsers = JSON.parse(localStorage.getItem('users')) || usersManagement;
    const storedUser = JSON.parse(localStorage.getItem('presentUser'));
    const[isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const[availableBalance, setAvailableBalance]  = useState(0);
    const[users, setUsers] = useState(storedUsers);
    const[presentUser, setPresentUser] = useState(storedUser || null);
    const [transactions, setTransactions] = useState(() => {
       
        const storedTransactions = localStorage.getItem('transactions');
        return storedTransactions ? JSON.parse(storedTransactions) : [];
    });

    const addTransaction = (transaction) => {
        setTransactions((prevTransactions) => {
            const updatedTransactions = [...prevTransactions, transaction];
            localStorage.setItem('transactions', JSON.stringify(updatedTransactions)); 
            return updatedTransactions;
        });
    };
    
    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
        
    }, [users]);

    useEffect(()=>{
        console.log(transactions)
    },[transactions])

    useEffect(()=>{
        
    },[availableBalance])

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('presentUser'));
        console.log(storedUser)
        if (storedUser) {
            setPresentUser(storedUser);
            setIsUserLoggedIn(true);
        }


        const storedTransactions = localStorage.getItem('transactions');
        if (storedTransactions) {
            setTransactions(JSON.parse(storedTransactions));
        }
    }, []);

    // useEffect(() => {
    //     if (storedUser) {
    //         setPresentUser(storedUser);
    //         setIsUserLoggedIn(true);
    //     } else {
    //         setPresentUser(null);
    //         setIsUserLoggedIn(false);
    //     }
    // }, [storedUser]);

    const addUser = (newUser)=>{
        setUsers((prevUser)=>[
            ...prevUser,
            newUser
        ])
    }

    useEffect(() => {
        console.log('Present user updated:', presentUser);
        if (presentUser) {
            
            localStorage.setItem('presentUser', JSON.stringify(presentUser));
            setIsUserLoggedIn(true);
        } else {
            
            localStorage.removeItem('presentUser');
            setIsUserLoggedIn(false);
        }
    }, [presentUser]);


    
    const login = (email, password) =>{
       
        const user = users.find(user=>
                (user.emailOfUser === email || user.nameOfUser === email) && user.passwordOfUser === password
        );
        if(user){
            setPresentUser(user);
            localStorage.setItem('presentUser', JSON.stringify(user)); 
            return true
        }else{
            return false
        }
        
    }

    const logout = ()=>{

        setPresentUser(null);
        setIsUserLoggedIn(false);
        console.log(presentUser)
        
       
    }

    const register = (name, email, password)=> {
        const existingUser = users.find((u) => u.emailOfUser === email);
        if (existingUser) {
            return false;
        }
        const newUser = { nameOfUser: name, emailOfUser:email, passwordOfUser:password };
        setUsers([...users, newUser]);
        setPresentUser(newUser);
        return true;
    }

    const updateCardDetails =(cardDetails)=> {
        if (presentUser) {
            const updatedUser = { ...presentUser, ...cardDetails };
            setPresentUser(updatedUser);
            setUsers(users.map((u) => u.emailOfUser === presentUser.emailOfUser ? updatedUser : u));
        }
    }

    const updateDetails = (userDetails) => {
        if (presentUser) {
            const updatedUser = { ...presentUser, ...userDetails };
            console.log(updatedUser)
            setPresentUser(updatedUser);
            setUsers(users.map(user => 
                user.emailOfUser === presentUser.emailOfUser ? updatedUser : user
            ));
    
            // Save the updated users list to local storage
            localStorage.setItem('users', JSON.stringify(users.map(user =>
                user.emailOfUser === presentUser.emailOfUser ? updatedUser : user
            )));
        // }
    }};
    
    return(
        <GlobalContext.Provider value={{updateCardDetails, 
                                        isUserLoggedIn, 
                                        setIsUserLoggedIn,
                                        availableBalance,
                                        setAvailableBalance, 
                                        users, 
                                        setUsers, 
                                        addUser, 
                                        presentUser,
                                        setPresentUser,
                                        login,
                                        logout,
                                        register,
                                        updateDetails,
                                        addTransaction,
                                        transactions,}}>
            {children}
        </GlobalContext.Provider>
    )
}
export default GlobalState