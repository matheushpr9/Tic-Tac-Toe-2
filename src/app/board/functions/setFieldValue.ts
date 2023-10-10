import React from "react"
import defValue from "./defValue";

export const setFieldValue = (event:React.MouseEvent)=>{

    
    const fieldId = (event!.target as HTMLAnchorElement).id;
    console.log(fieldId)
    const field = document.getElementById(fieldId);

    console.log(field)
    if ( field!.innerHTML ==''){
        defValue();
        field!.innerHTML = sessionStorage.getItem("value")! ;
        
    }
    
}   