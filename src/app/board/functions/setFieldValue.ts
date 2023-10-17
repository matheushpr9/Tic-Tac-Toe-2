import React from "react"
import defValue from "./defValue";
import validateMiniGame from "./validateMiniGame/validateMiniGame";
import setZoom from "./setZoom";

export const setFieldValue = (event:React.MouseEvent)=>{

    
    const fieldId = (event!.target as HTMLAnchorElement).id;
    
    const field = document.getElementById(fieldId);

    if ( field!.innerHTML ==''){
        defValue();
        field!.innerHTML = sessionStorage.getItem("value")! ;
        
        validateMiniGame(event);
        setZoom(event);
    }
    
}   