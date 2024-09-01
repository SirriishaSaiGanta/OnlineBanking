import React, { useContext, useState } from 'react'
import CommonForm from './CommonForm'
import {cardFormElements} from './Config'
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../GlobalContext/Context';


const initialFormDataa = {
    accountNoOfUser:"",
    ifscCodeOfUser:'',
    contactOfUser:'',
    accountTypeOfUser:'',
}
function AddCardInfo() {
    const [cardFormData, setCardFormData] = useState(initialFormDataa);
    const { presentUser, updateCardDetails } = useContext(GlobalContext);

    const navigate = useNavigate();

   

    function onHandleSubmit(e){
        e.preventDefault()
        const newCard = {
            accountNoOfUser: cardFormData.accountNumber,
            ifscCodeOfUser: cardFormData.ifscCode,
            contactOfUser:cardFormData.contactNumber,
            accountTypeOfUser:cardFormData.accountType
        }
        
        updateCardDetails(newCard)
        alert("Card details added successfully")
        setCardFormData(initialFormDataa)
        navigate("/home/account")
    }
    return (
        <CommonForm
        formData={cardFormData}
        setFormData={setCardFormData}
        formControls={cardFormElements}
        buttonText = {"Submit"}
        onHandleSubmit = {onHandleSubmit}
        formName = {"Please Enter Card Details"}
        formMsg={"Please Enter Card Details to Continue"}

        />
    )
}

export default AddCardInfo