import React, { useState } from 'react'

function UseErrorMessage() {
 const [errorMsg , setErrorMsg] = useState("") ;

 const showError = () => setErrorMsg(message) ;
 const clearError = () => setErrorMsg("") ;
 return{
    errorMsg ,
    showError ,
    clearError
 }
}

export default UseErrorMessage